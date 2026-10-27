import Schema from '@deepseek-ai/schemastery'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createStaticHandler } from './server.js'

export const name = 'neuroendocrine-workbench-main'
export const inject = ['webServer', 'connection']
/** root 可选：不给就用内存演示库（装机后由 cordis.patch.yml 以 dshHomePath('neuroendocrine-workbench') 注入）。 */
export const Config = Schema.object({
  root: Schema.string(),
})
const manifest = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'))

export const PUBLIC_DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'public')
export const UI_PREFIX = '/api/neuroendocrine-workbench/ui/'

export function apply(ctx) {
  if (!ctx.webServer?.register) throw new Error('Desktop webServer.register is unavailable')
  /* 业务界面：public/（原型提升而来）经 iframe 装进面板。此前只注册了 /health，
     外壳自己在画骨架 —— 装机后用户看不到任何业务页。 */
  ctx.effect(() => ctx.webServer.register({
    kind: 'prefix', path: UI_PREFIX, handler: createStaticHandler(PUBLIC_DIR, UI_PREFIX),
  }), 'neuroendocrine-workbench ui')
  ctx.effect(() => ctx.webServer.register({
    kind: 'exact', path: '/api/neuroendocrine-workbench/health',
    handler(req, res) {
      const send = (status, body) => {
        res.writeHead(status, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' })
        res.end(JSON.stringify(body))
      }
      if (typeof ctx.connection?.requestRejection !== 'function') return send(503, { error: 'connection authentication capability unavailable' })
      const rejection = ctx.connection.requestRejection(req)
      if (rejection !== undefined) return send(rejection, { error: 'Authentication required' })
      if (req.method !== 'GET') return send(405, { error: 'Method not allowed' })
      send(200, { ok: true, version: manifest.version, apiVersion: 'v1', capabilities: ['health'] })
    },
  }), 'neuroendocrine-workbench health')
}
