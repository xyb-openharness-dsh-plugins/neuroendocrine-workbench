# 变更记录

只增不删；每条写清"改了什么 + 为什么 + 用户可见结果"。版本号与 VERSION、package.json 三处必须一致。

## 0.1.10 — 2026-10-28

- **修装机后业务区空白（根因）**：`dsh/index.js` 把静态路由注册成 `kind: 'prefix', path: '/api/neuroendocrine-workbench/ui/'`，
  而宿主 `dsh-host-webserver` 的 `match()` 判定是 `pathname === prefix || pathname.startsWith(prefix + '/')`——前缀以 `/` 结尾时，
  子路径要命中 `…/ui//`。结果只有 iframe 入口页 `/ui/` 能命中，`/ui/app.js`、`/ui/style.css` 全部落到宿主的 SPA 兜底
  （200 text/html），浏览器把 HTML 当 JS/CSS 解析，面板只剩顶栏与分栏，业务区空白。
  改为注册不带尾斜杠的 `/api/neuroendocrine-workbench/ui`，静态层仍按尾斜杠入口剥前缀。用户可见结果：装机后 iframe
  正常加载 `public/index.html` 与四件套。
- 版本升 0.1.10（VERSION / package.json 同步）。

## 0.1.8 — 2026-10-27

- 装机界面补齐（评审反馈：装了只有骨架）：把 `prototypes/v0.1` 提升为 `public/` 并随包发出（`files += public`）；新增 `dsh/server.js`（只从 public/ 出文件、拦 `..` 与符号链接逃逸）并把 `/api/neuroendocrine-workbench/ui/` 注册为静态前缀路由；`lib/client.js` 改成 iframe 装 public（探活失败才退回原骨架，骨架只作兜底）。同时按 34 号 §2b 去掉界面里自建的「AI 对话」面板与输入框，`和 AI 讨论` 只 `postMessage(neuroendocrine:agent-draft)` 给宿主原生会话。

- 36 号 v2 引入（指南可点 + 状态卡）：原型顶栏增加「?」入口与整页疾病概要（definition → evidence → landscape → trend），装机层 `lib/client.js` 内联同源数据并提供同款按钮与四段浮窗（返回 / 关闭 / Esc、关闭回焦、缺链接红标）。
- 链接共 3 条官方入口，均经真浏览器验活：NCCN（guidelines-detail?id=1448）、WHO/IARC（Digestive System Tumours 5th ed. 2019）、ENETS（Guidelines & Standards of Care）。CSCO 2025 版未取得原件，表内 `nolink: true` + note（官方渠道发行 / 会员登录浏览，无公开免费全文），不编 URL。
- 看板首卡新增状态卡四件：eyebrow / 锚点派生大字天数（原型「第 957 天」由确诊日 2024-03-12 与原型固定日 2026-10-25 派生，不手填；装机层无锚点显示「待初始化」并指向三步向导）/ 现状行 / 出口按钮排（主按钮 + 「疾病概要：神经内分泌肿瘤是什么？」）。
- 新增 `scripts/check-primer-links.mjs`（L1–L12，含 `--self-test`）并接入 `npm run check`；新增 `scripts/probe-disease-primer.mjs`（P1–P9 + E0，原型实测 10/10）。

## 0.1.0 — 2026-10-25

- 由社区脚手架 dsh-wb-cli@1.5.7 (c0bcc5d+dirty) 初始化，仅有注册骨架与健康接口，无业务功能。

## 0.1.1 — 2026-10-25

- 完成 NET M1 调研与 SPEC v0.2，提交 HTML 原型草案与 HVT 记录。

## 0.1.2 — 2026-10-25

- 品牌名由默认占位“小肽宝”改为用户指定“小泌宝”；同步工作台标题、原型与客户端注册标题。

## 0.1.3 — 2026-10-25

- 重做一图秀：左栏时间范围、分组指标即时勾选、显示开关；趋势线按各自全期范围缩放，图例显示全期范围，点选固定数值与来源。
- 重做指标卡：固定尺寸原位翻转，正面显示分类色点、当前值、较前次变化箭头与记录数；背面显示 sparkline、端值日期和来源。

## 0.1.4 — 2026-10-25

- 原型顶栏增加 AI 对话开合入口；所有页面增加“和 AI 讨论”，按页面构造含来源/核对状态/缺项的 agent-draft 上下文。
- 原生宿主当前尚无 agent-draft bridge；原型显式显示宿主模拟状态，独立预览不发送。

## 0.1.5 — 2026-10-25

- 原型增加顶栏唯一 AI 对话面板开合入口；所有一级页面增加“和 AI 讨论”，按页构造模拟事实摘要与讨论提示。嵌入形态按 34 号发送事件请求宿主原生会话；独立预览保留草稿、不发送。真实原生面板桥仍未接入。

## 0.1.6 — 2026-10-25

- AI 面板开合入口统一收在顶栏，移除浮动重复入口；每页提供“和 AI 讨论”并携带页面摘要。原生 DSH bridge 未实现，独立预览不发送。
- 临床研究页移除虚构试验和匹配分数，改为档案准备度、来源接入状态与“未查过”空态；参考胆道癌原型路径在本机缺失，未声称复刻。

## 0.1.7 — 2026-10-25

- 临床研究拆分为个人档案、检索条件、检索与协助、结果核对四个二级页面；条件仅在原型会话暂存，未接数据源时显示带时间的“未能查询”，不生成模拟结果。
