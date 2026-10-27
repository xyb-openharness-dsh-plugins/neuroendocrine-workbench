window.__ModuleLoader__.load({
  id: "@community/neuroendocrine-workbench",
  factory(require) {
    const React = require('react')
    const h = React.createElement
    const UI_ENTRY = '/api/neuroendocrine-workbench/ui/'
    const metadata = {"title":"小泌宝 · 神经内分泌肿瘤工作台","description":"神经内分泌和肾上腺肿瘤（NET）患者工作台：分级档案、生化+影像双线随访、SSA 注射与 PRRT 治疗事件、基因/病理与临床试验匹配"}
    const theme = "/* Scope to business content; never style host navigation globally. */\n.wb-neuroendocrine-workbench {\n  --wb-paper: #f7faf8; --wb-surface: #ffffff; --wb-ink: #34413c;\n  --wb-muted: #596c62; --wb-line: #dce7df; --wb-mint: #e2f2ea;\n  --wb-mint-ink: #22664e; --wb-action: #b95023; --wb-action-ink: #ffffff;\n  --wb-pink: #f8e8eb; --wb-blue: #eaf1f6; --wb-yellow: #faf2d8;\n  --wb-radius: 18px; --wb-gap: 16px; --wb-group-gap: 24px;\n  color: var(--wb-ink); background: var(--wb-paper); font: 16px/1.65 -apple-system,BlinkMacSystemFont,\"PingFang SC\",\"Microsoft YaHei\",sans-serif;\n  font-variant-numeric: tabular-nums; min-width: 0; min-height: 0; container-type: inline-size;\n}\n.wb-neuroendocrine-workbench[data-font=large] { font-size: 19px; }\n.wb-neuroendocrine-workbench * { box-sizing: border-box; }\n.wb-neuroendocrine-workbench button,.wb-neuroendocrine-workbench input,.wb-neuroendocrine-workbench select { font: inherit; }\n.wb-neuroendocrine-workbench button { min-height: 44px; cursor: pointer; }\n.wb-neuroendocrine-workbench :focus-visible { outline: 3px solid var(--wb-mint-ink); outline-offset: 3px; }\n.wb-neuroendocrine-workbench .wb-primary { background: var(--wb-action); color: var(--wb-action-ink); border: 0; border-radius: 999px; padding: 9px 20px; }\n.wb-neuroendocrine-workbench .wb-flower { display: inline-block; width: 24px; height: 24px; flex: 0 0 auto; margin-inline-end: 10px; animation: wb-flower-turn 12s linear infinite; }\n@keyframes wb-flower-turn { to { transform: rotate(360deg); } }\n@media (prefers-color-scheme: dark) {\n  .wb-neuroendocrine-workbench { --wb-paper:#17231f; --wb-surface:#20322a; --wb-ink:#edf5ef; --wb-muted:#c0d2c6; --wb-line:#496354; --wb-mint:#294f3f; --wb-mint-ink:#a0ddbd; --wb-action:#f3a578; --wb-action-ink:#39200e; --wb-pink:#45333a; --wb-blue:#283d4c; --wb-yellow:#473e25; }\n}\n@media (prefers-reduced-motion: reduce) {\n  .wb-neuroendocrine-workbench .wb-flower { animation:none; }\n}\n"
    /* 36 号 · 疾病概要在装机层的样式（全部限定在业务区作用域内） */
    const primerTheme = `
.wb-neuroendocrine-workbench .primer-trigger{min-width:34px;min-height:34px;padding:0 9px;border-radius:999px;border:1px solid var(--wb-line);background:var(--wb-mint);color:var(--wb-mint-ink);font-weight:700;line-height:1}
.wb-neuroendocrine-workbench .status-card{margin:0;padding:16px;background:var(--wb-surface);border:1px solid var(--wb-line);border-radius:var(--wb-radius);display:flex;flex-direction:column;gap:12px}
.wb-neuroendocrine-workbench .status-eyebrow{margin:0;color:var(--wb-muted);font-size:12px;font-weight:600;letter-spacing:.04em}
.wb-neuroendocrine-workbench .status-main{display:flex;gap:20px;align-items:flex-start;justify-content:space-between;flex-wrap:wrap}
.wb-neuroendocrine-workbench .status-day{display:block;font-size:32px;line-height:1.15;color:var(--wb-mint-ink);font-weight:700;font-variant-numeric:tabular-nums}
.wb-neuroendocrine-workbench .status-day.pending{font-size:24px;color:var(--wb-muted)}
.wb-neuroendocrine-workbench .status-anchor{display:block;margin-top:4px;color:var(--wb-muted);font-size:12px}
.wb-neuroendocrine-workbench .status-now{display:flex;flex-direction:column;gap:5px;flex:1 1 300px;align-items:flex-start}
.wb-neuroendocrine-workbench .status-phase{align-self:flex-start;background:var(--wb-yellow);color:#7a5a1f;border:1px solid var(--wb-line);border-radius:999px;padding:3px 10px;font-size:12px;font-weight:600}
.wb-neuroendocrine-workbench .status-state{font-size:14px;font-weight:600}
.wb-neuroendocrine-workbench .status-next{font-size:12.5px;color:var(--wb-muted)}
.wb-neuroendocrine-workbench .status-actions{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
.wb-neuroendocrine-workbench .status-steps{margin:0;padding-left:20px;color:var(--wb-muted);font-size:13px;line-height:1.7}
.wb-neuroendocrine-workbench .wb-soft{border:1px solid var(--wb-line);background:var(--wb-surface);color:var(--wb-ink);border-radius:999px;padding:9px 18px}
.wb-neuroendocrine-workbench .dp-overlay{position:fixed;inset:0;z-index:60;display:flex;background:rgba(28,20,36,.34);-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}
.wb-neuroendocrine-workbench .dp-panel{position:absolute;inset:clamp(8px,1.2vw,16px);display:flex;flex-direction:column;min-width:0;min-height:0;background:var(--wb-paper);border:1px solid var(--wb-line);border-radius:14px;box-shadow:0 18px 48px rgba(30,20,40,.22);overflow:hidden}
.wb-neuroendocrine-workbench .dp-panel:focus{outline:none}
.wb-neuroendocrine-workbench .dp-head{position:sticky;top:0;z-index:2;display:flex;align-items:center;gap:10px;flex-shrink:0;min-height:56px;padding:0 12px 0 8px;background:var(--wb-surface);border-bottom:1px solid var(--wb-line)}
.wb-neuroendocrine-workbench .dp-head-title{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px}
.wb-neuroendocrine-workbench .dp-crumb{font-size:11px;color:var(--wb-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.wb-neuroendocrine-workbench .dp-title{margin:0;font-size:15px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.wb-neuroendocrine-workbench .dp-en{font-weight:500;font-size:11.5px;color:var(--wb-muted)}
.wb-neuroendocrine-workbench .dp-btn{display:inline-flex;align-items:center;gap:4px;min-height:36px;padding:0 12px;font-size:12.5px;color:var(--wb-ink);background:var(--wb-surface);border:1px solid var(--wb-line);border-radius:9px;flex-shrink:0}
.wb-neuroendocrine-workbench .dp-close{min-width:36px;justify-content:center;padding:0}
.wb-neuroendocrine-workbench .dp-body{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;padding:20px clamp(14px,1.6vw,28px) 56px}
.wb-neuroendocrine-workbench .dp-inner{max-width:980px;margin:0 auto}
.wb-neuroendocrine-workbench .dp-note{margin:0 0 18px;padding:11px 14px;font-size:12.5px;line-height:1.7;color:var(--wb-muted);background:var(--wb-mint);border-left:3px solid var(--wb-mint-ink);border-radius:0 9px 9px 0}
.wb-neuroendocrine-workbench .dp-section{padding:16px 0 4px;border-top:1px dashed var(--wb-line)}
.wb-neuroendocrine-workbench .dp-section:first-of-type{border-top:0}
.wb-neuroendocrine-workbench .dp-section h3{margin:0 0 10px;font-size:15.5px;font-weight:700;display:flex;align-items:baseline;gap:8px}
.wb-neuroendocrine-workbench .dp-section h3::before{content:"";width:4px;height:15px;border-radius:2px;background:var(--wb-mint-ink);flex-shrink:0}
.wb-neuroendocrine-workbench .dp-lead{margin:0 0 10px;font-size:13px;line-height:1.78;color:var(--wb-muted)}
.wb-neuroendocrine-workbench .dp-group{margin:0 0 12px}
.wb-neuroendocrine-workbench .dp-group h4{margin:0 0 5px;font-size:12.5px;font-weight:700;color:var(--wb-mint-ink)}
.wb-neuroendocrine-workbench .dp-points{margin:0 0 10px;padding-left:0;list-style:none}
.wb-neuroendocrine-workbench .dp-points li{position:relative;padding-left:18px;font-size:12.8px;line-height:1.75;color:var(--wb-muted);margin-bottom:5px}
.wb-neuroendocrine-workbench .dp-points li::before{content:"";position:absolute;left:6px;top:.72em;width:5px;height:5px;border-radius:50%;background:var(--wb-muted)}
.wb-neuroendocrine-workbench .dp-table-wrap{overflow-x:auto;margin:0 0 12px}
.wb-neuroendocrine-workbench .dp-table{min-width:640px;border-collapse:collapse;width:100%;font-size:12.2px;background:var(--wb-surface);border:1px solid var(--wb-line);border-radius:9px}
.wb-neuroendocrine-workbench .dp-table th,.wb-neuroendocrine-workbench .dp-table td{padding:7px 10px;text-align:left;border-bottom:1px solid var(--wb-line);vertical-align:top;line-height:1.6}
.wb-neuroendocrine-workbench .dp-table th{background:var(--wb-mint);color:var(--wb-mint-ink);font-weight:700;white-space:nowrap}
.wb-neuroendocrine-workbench .dp-table tr:last-child td{border-bottom:0}
.wb-neuroendocrine-workbench .dp-src{margin:10px 0 0;font-size:11px;line-height:1.65;color:var(--wb-muted)}
.wb-neuroendocrine-workbench .dp-src b{color:var(--wb-ink);margin-right:6px}
.wb-neuroendocrine-workbench .dp-link{color:inherit;font-weight:600;text-decoration:underline;text-underline-offset:3px}
.wb-neuroendocrine-workbench .dp-miss{color:#b3372e;font-weight:600}
.wb-neuroendocrine-workbench .dp-foot{margin:22px 0 0;padding-top:14px;border-top:1px solid var(--wb-line);font-size:11.5px;line-height:1.7;color:var(--wb-muted)}
html.dp-lock,html.dp-lock body{overflow:hidden}
@media (max-width:760px){
  .wb-neuroendocrine-workbench .dp-panel{inset:0;border-radius:0;border:0}
  .wb-neuroendocrine-workbench .dp-back span{display:none}
  .wb-neuroendocrine-workbench .dp-body{padding:16px 14px 44px}
}
@media (prefers-reduced-motion:reduce){
  .wb-neuroendocrine-workbench .dp-overlay{animation:none}
}
`

    /* 36 号 · 疾病概要数据（与 prototypes/v0.1/primer-data.js 同源，内联进客户端；
       内容只取自本仓 README 与 docs/，未取得原件的一律 nolink + note） */
    const PRIMER = {
      brand: '小泌宝',
      name: '神经内分泌肿瘤',
      en: 'Neuroendocrine Tumors（NET）',
      updated: '2026-10-27',
      sections: [
        {
          id: 'definition',
          title: '定义',
          intro: '神经内分泌和肾上腺肿瘤（NET）：按 WHO 消化系统肿瘤分类第 5 版分级（G1 ≤2% / G2 3–20% / NET G3 >20% 分化良好 vs NEC 低分化）。本工作台覆盖胃肠胰神经内分泌肿瘤（GEP-NETs）与嗜铬细胞瘤/副神经节瘤（PPGL），以分化良好 NET 的长程管理为主线，肾上腺亚群单独保留激素语境。',
          points: [
            '分级口径：WHO 消化系统肿瘤分类第 5 版按 Ki-67 指数分为 G1（≤2%）、G2（3–20%）、NET G3（>20%，分化良好）；低分化的 NEC 与之分开记录（常 >55%）。',
            '本台记录的常见项目：病理分级与免疫组化、CgA / 24h 尿 5-HIAA / NSE 等生化标志物、CT / MRI / SRI 影像报告、SSA 注射与 PRRT 治疗事件、基因检测状态。',
            '同一份报告里的分级、Ki-67 与影像测量值都照录原文；分级由医生判读，本工作台不计算分级。'
          ],
          sources: [
            { org: 'WHO', doc: 'Classification of Tumours: Digestive System Tumours, 5th ed.', version: '2019（2022 更新）', entry: true, kind: 'hub', url: 'https://publications.iarc.who.int/Book-And-Report-Series/Who-Classification-Of-Tumours/Digestive-System-Tumours-2019', note: 'IARC 官方出版页；在线全文需订阅或购买纸质版，本台未取得该版全文' }
          ]
        },
        {
          id: 'evidence',
          title: '医学资料规范和指南情况',
          intro: '这个工作台里出现的「该查什么、按什么口径分级、随访看什么」，应能追到下面某一份文件。未取得原件的在表里如实标出，不假装看过。',
          table: {
            head: ['机构', '文件', '版本 / 年份', '原件', '本台用途'],
            rows: [
              ['NCCN', 'NCCN Guidelines · Neuroendocrine and Adrenal Tumors', 'Version 3.2025（官网检索日 2026-10-25）',
                { text: '官方入口 · 临床版需注册', kind: 'hub', url: 'https://www.nccn.org/guidelines/guidelines-detail?id=1448', note: '临床版全文需在 NCCN 官网注册后取得；本台未取得该版原件' },
                '分期、治疗线与随访口径参照'],
              ['WHO', 'WHO Classification of Tumours: Digestive System Tumours', '5th ed.（2019；2022 更新）',
                { text: '官方出版页 · 在线全文需订阅', kind: 'hub', url: 'https://publications.iarc.who.int/Book-And-Report-Series/Who-Classification-Of-Tumours/Digestive-System-Tumours-2019', note: 'IARC 出版页；在线全文需订阅或购买纸质版，本台未取得该版全文' },
                'G1 / G2 / NET G3 / NEC 的分级口径'],
              ['ENETS', 'ENETS Guidelines & Standards of Care', '按部位滚动更新（检索日 2026-10-25）',
                { text: '官方指南栏目', kind: 'hub', url: 'https://www.enets.org/guidelines.html', note: '栏目页按部位滚动更新；本台未取得某一部位版全文' },
                '分部位指南脉络参照'],
              ['CSCO', 'CSCO 神经内分泌肿瘤诊疗指南', '2025 版（2025-04-25 发布）',
                { text: '未取得原件 · 无公开免费全文', nolink: true, note: 'CSCO 指南经官方渠道发行、会员登录浏览；本台未取得该版原件，不引用其条文' },
                '国内可及药物与本土实践参照，暂不作引用依据']
            ]
          },
          points: [
            '指南给的是「通常怎么做」，不是「你该怎么做」。同一份指南隔一年条目会变，所以版本号必须写清。',
            '本台对未取得原件的文件只记录「存在」与大致范围，不引用具体条文；表格里的入口链接只用于读者自行核对。'
          ],
          sources: [
            { org: 'NCCN', doc: 'NCCN Guidelines · Neuroendocrine and Adrenal Tumors', version: 'Version 3.2025', entry: true, kind: 'hub', url: 'https://www.nccn.org/guidelines/guidelines-detail?id=1448', note: '临床版全文需注册；本台未取得该版原件' },
            { org: 'WHO', doc: 'Classification of Tumours: Digestive System Tumours, 5th ed.', version: '2019（2022 更新）', entry: true, kind: 'hub', url: 'https://publications.iarc.who.int/Book-And-Report-Series/Who-Classification-Of-Tumours/Digestive-System-Tumours-2019', note: '在线全文需订阅；本台未取得该版全文' },
            { org: 'ENETS', doc: 'ENETS Guidelines & Standards of Care', version: '按部位滚动更新', entry: true, kind: 'hub', url: 'https://www.enets.org/guidelines.html', note: '栏目页；本台未取得某一部位版全文' },
            { org: 'CSCO', doc: '神经内分泌肿瘤诊疗指南', version: '2025 版', nolink: true, note: '未取得原件：官方渠道发行/会员登录浏览，无公开免费全文' }
          ]
        },
        {
          id: 'landscape',
          title: '目前治疗全景概要',
          intro: '下面按治疗手段类别列出本仓 docs（BRIEF / SOURCES / SPEC）与 README 中记录过的手段。这是「世界上大致有哪些办法」的地图，不是给你排的先后顺序。',
          groups: [
            {
              label: '局部处理',
              points: ['手术：本仓把手术列为治疗事件之一，记录在治疗历程里；是否手术、何时手术由主管医生判断。']
            },
            {
              label: '全身治疗',
              points: [
                '生长抑素类似物（SSA）：奥曲肽 LAR 每 4 周肌注 10–40 mg（齐鲁首仿 2023 年上市）；兰瑞肽 Autogel 120 mg/28 天深部皮下注射。',
                '靶向治疗：舒尼替尼与依维莫司用于胰腺 NET（依维莫司在医保目录内）；索凡替尼用于胃肠胰 NET（2020 年 NMPA 批准）。',
                'PRRT（肽受体放射性核素治疗）：177Lu-DOTATATE，方案为 4 周期、每周期 7.4 GBq、间隔 8 周，并配合氨基酸肾保护；国内 Lutathera 未正式获批，先通仿制 2025-04 获 CDE 受理。'
              ]
            },
            {
              label: '随访与支持',
              points: [
                '生化 + 影像双线随访：CgA、24h 尿 5-HIAA、NSE 等生化标志物，与 CT / MRI、68Ga-DOTATATE PET/CT 等影像检查按期复查。',
                'PPGL 亚群单独记录血浆游离 MN / CNs 筛查与术前 α 阻滞等激素语境；本仓不载剂量与用药方案。',
                '临床研究：本仓把临床试验匹配列为待接入模块；当前未连接任何数据源，页面显示「未查过」而不是「零结果」。'
              ]
            }
          ],
          points: ['以上是文献与指南里列出的手段，按病期与线序排列，不代表任何一项适合你。选哪一个，这一句需要问你的医生。'],
          sources: [
            { org: 'NCCN', doc: 'NCCN Guidelines · Neuroendocrine and Adrenal Tumors', version: 'Version 3.2025', entry: true, kind: 'hub', url: 'https://www.nccn.org/guidelines/guidelines-detail?id=1448', note: '临床版全文需注册；本台未取得该版原件' },
            { org: 'ENETS', doc: 'ENETS Guidelines & Standards of Care', version: '按部位滚动更新', entry: true, kind: 'hub', url: 'https://www.enets.org/guidelines.html', note: '栏目页；本台未取得某一部位版全文' },
            { org: 'CSCO', doc: '神经内分泌肿瘤诊疗指南', version: '2025 版', nolink: true, note: '未取得原件：官方渠道发行/会员登录浏览，无公开免费全文' }
          ]
        },
        {
          id: 'trend',
          title: '发展趋势',
          intro: '这一段只写已经发生的事：哪份文件换了版本、哪一天发布、哪一项审批到了哪一步。不写预测，不做评价，也不给任何倾向。',
          points: [
            '2025-04-25：CSCO《神经内分泌肿瘤诊疗指南》2025 版发布。',
            '官网检索日 2026-10-25：NCCN Neuroendocrine and Adrenal Tumors 显示为 Version 3.2025；本仓此前记录的版本为 2.2025。',
            '2020 年：索凡替尼获 NMPA 批准，用于胃肠胰 NET（epNET）。',
            '2023 年：奥曲肽 LAR 齐鲁首仿上市。',
            '2025-04：先通仿制的 177Lu-DOTATATE 获 CDE 受理；截至检索日 2026-10-25，国内 Lutathera 未正式获批。',
            'WHO 消化系统肿瘤分类第 5 版（2019/2022）沿用 G1 / G2 / NET G3 / NEC 的分级口径。'
          ],
          sources: [
            { org: 'NCCN', doc: 'NCCN Guidelines · Neuroendocrine and Adrenal Tumors', version: 'Version 3.2025', entry: true, kind: 'hub', url: 'https://www.nccn.org/guidelines/guidelines-detail?id=1448', note: '版本记录以官网为准；本台未取得该版原件' },
            { org: 'WHO', doc: 'Classification of Tumours: Digestive System Tumours, 5th ed.', version: '2019（2022 更新）', entry: true, kind: 'hub', url: 'https://publications.iarc.who.int/Book-And-Report-Series/Who-Classification-Of-Tumours/Digestive-System-Tumours-2019', note: '在线全文需订阅；本台未取得该版全文' },
            { org: 'CSCO', doc: '神经内分泌肿瘤诊疗指南', version: '2025 版', nolink: true, note: '未取得原件：官方渠道发行/会员登录浏览，无公开免费全文' }
          ]
        }
      ]
    }

    const safeHref = (u) => {
      if (!u || typeof u !== 'string') return ''
      const t = u.trim()
      return /^https:\/\//i.test(t) ? t : ''
    }

    function sourceLine(s, key) {
      const bits = [s.org, s.doc].filter(Boolean).join(' · ')
      const tail = []
      if (s.version) tail.push(s.version)
      const url = safeHref(s.url)
      const sec = safeHref(s.secondaryUrl)
      if (s.nolink) {
        tail.push(h('span', { key: 'nl', className: 'dp-miss' }, '未取得原件 · 无公开链接'))
        if (s.note) tail.push(s.note)
      } else if (s.entry) {
        tail.push(url
          ? h('a', { key: 'u', href: url, target: '_blank', rel: 'noopener noreferrer', className: 'dp-link' }, '官方入口 ↗ 需自行注册')
          : h('span', { key: 'u', className: 'dp-miss' }, '缺链接，违反 36 号 §2.5'))
        if (s.note) tail.push(s.note)
      } else if (s.original) {
        tail.push(url
          ? h('a', { key: 'u', href: url, target: '_blank', rel: 'noopener noreferrer', className: 'dp-link' }, '原件已取得 · 打开/下载 ↗')
          : h('span', { key: 'u', className: 'dp-miss' }, '原件已取得（缺链接，违反 36 号 §2.5）'))
        if (s.note) tail.push(s.note)
      } else {
        tail.push(sec
          ? h('a', { key: 'u', href: sec, target: '_blank', rel: 'noopener noreferrer', className: 'dp-link' }, '未取得原件，据二次来源 ↗')
          : h('span', { key: 'u', className: 'dp-miss' }, '未取得原件（缺二次链接，违反 36 号 §2.5）'))
        if (s.note) tail.push(s.note)
      }
      if (s.page) tail.push('页码 ' + s.page)
      return h('span', { key }, bits, tail.length ? '（' : '', ...tail, tail.length ? '）' : '')
    }

    function sourcesNode(sources) {
      if (!sources || !sources.length) return h('span', { className: 'dp-miss' }, '未标注 —— 这一段还不能用。')
      const out = []
      sources.forEach((s, i) => {
        if (i) out.push(h('span', { key: 'sep' + i }, ' ｜ '))
        out.push(sourceLine(s, 's' + i))
      })
      return out
    }

    function cellNode(c, key) {
      if (c && typeof c === 'object' && !Array.isArray(c)) {
        const u = safeHref(c.url)
        const text = c.text == null ? '' : String(c.text)
        if (u) return h('a', { key, className: 'dp-link', href: u, target: '_blank', rel: 'noopener noreferrer' }, text + ' ↗')
        if (c.nolink) {
          return h('span', { key }, text, h('span', { className: 'dp-miss' }, '（无公开链接）'), c.note ? h('span', null, ' · ' + c.note) : null)
        }
        return h('span', { key }, text, h('span', { className: 'dp-miss' }, '（缺 https 链接，违反 36 号 §2.5）'))
      }
      return String(c == null ? '' : c)
    }

    function tableNode(t, key) {
      return h('div', { className: 'dp-table-wrap', key },
        h('table', { className: 'dp-table' },
          h('thead', null, h('tr', null, t.head.map((x, i) => h('th', { key: i }, x)))),
          h('tbody', null, t.rows.map((row, ri) => h('tr', { key: ri }, row.map((c, ci) => h('td', { key: ci }, cellNode(c, 'c' + ri + '-' + ci))))))))
    }

    function pointsNode(list, key) {
      if (!list || !list.length) return null
      return h('ul', { className: 'dp-points', key }, list.map((p, i) => h('li', { key: i }, p)))
    }

    function SectionBlock(props) {
      const s = props.section
      const body = []
      if (s.intro) body.push(h('p', { className: 'dp-lead', key: 'intro' }, s.intro))
      if (s.groups) {
        s.groups.forEach((g, gi) => body.push(h('div', { className: 'dp-group', key: 'g' + gi },
          h('h4', null, g.label), pointsNode(g.points, 'gp' + gi))))
      }
      const pts = pointsNode(s.points, 'pts')
      if (pts) body.push(pts)
      if (s.table) body.push(tableNode(s.table, 'tbl'))
      if (!body.length) body.push(h('p', { className: 'dp-lead dp-empty', key: 'empty' }, '本台尚未整理这一段。'))
      return h('section', { className: 'dp-section', 'data-dp-section': s.id },
        h('h3', null, s.title),
        body,
        h('p', { className: 'dp-src' }, h('b', null, '来源'), sourcesNode(s.sources)))
    }

    function PrimerOverlay(props) {
      const sections = PRIMER.sections
      return h('div', {
        className: 'dp-overlay',
        id: 'disease-primer',
        onClick: (e) => { if (e.target === e.currentTarget) props.onClose() }
      },
      h('div', {
        className: 'dp-panel',
        role: 'dialog',
        'aria-modal': 'true',
        'aria-labelledby': 'dp-title',
        tabIndex: -1,
        ref: props.panelRef
      },
      h('div', { className: 'dp-head' },
        h('button', { className: 'dp-btn dp-back', type: 'button', 'data-dp': 'back', 'aria-label': '返回工作台', onClick: props.onClose }, '← ', h('span', null, '返回')),
        h('div', { className: 'dp-head-title' },
          h('span', { className: 'dp-crumb' }, PRIMER.brand + ' › 疾病概要'),
          h('h2', { className: 'dp-title', id: 'dp-title' }, PRIMER.name + ' ', h('span', { className: 'dp-en' }, PRIMER.en))),
        h('button', { className: 'dp-btn dp-close', type: 'button', 'data-dp': 'close', 'aria-label': '关闭疾病概要', onClick: props.onClose }, '✕')),
      h('div', { className: 'dp-body', tabIndex: 0 },
        h('div', { className: 'dp-inner' },
          h('p', { className: 'dp-note' }, '这是公开信息的整理，属于', h('b', null, '解释'), '：说明这个病是什么、依据哪些文件、指南里列了哪些手段、这些年发生了什么变化。它不是对你个人情况的判断，也不构成任何建议。'),
          sections.map((s) => h(SectionBlock, { key: s.id, section: s })),
          h('p', { className: 'dp-foot' }, '最后更新 ' + PRIMER.updated + ' · 内容只做事实与原文整理 · 任何与你有关的判断，这一句需要问你的医生。')))))
    }

    function StatusCard(props) {
      return h('section', { className: 'status-card', 'aria-labelledby': 'status-card-title' },
        h('p', { className: 'status-eyebrow' }, 'D+N 状态卡 · 待初始化'),
        h('div', { className: 'status-main' },
          h('div', null,
            h('strong', { className: 'status-day pending', id: 'status-card-title' }, '待初始化'),
            h('span', { className: 'status-anchor' }, '没有锚点日：天数必须由锚点派生，本台不手填')),
          h('div', { className: 'status-now' },
            h('span', { className: 'status-phase' }, '三步向导'),
            h('span', { className: 'status-state' }, '尚未记录阶段 · 本机服务' + (props.health ? '已连接' : '未连接')),
            h('span', { className: 'status-next' }, '下次：初始化后按锚点日计算'))),
        props.showSetup ? h('ol', { className: 'status-steps' },
          h('li', null, '连接本机服务：' + (props.health ? '已连接 v' + props.health.version : '当前未连接，先点「重新检查连接」')),
          h('li', null, '记录确诊日期与分级档案：确诊日作为 Day 0 锚点，分级照录病理报告原文'),
          h('li', null, '设定随访锚点日：下次注射/复查日期写入后，状态卡按日期派生天数')) : null,
        h('div', { className: 'status-actions' },
          h('button', { className: 'wb-primary', type: 'button', onClick: props.onSetup }, props.showSetup ? '收起三步向导' : '开始三步初始化'),
          h('button', { className: 'wb-soft', type: 'button', 'data-primer-open': '', 'aria-haspopup': 'dialog', 'aria-controls': 'disease-primer', onClick: props.onOpenPrimer }, '疾病概要：神经内分泌肿瘤是什么？')))
    }

    /* ---------------- AI 会话面板（customFrame 分栏，家族基线） ----------------
     * 宿主把 DSH 原生会话节点作为 conversation prop 交给我们排版：
     * - 右侧 aside 常挂载，显隐只用 display（卸载会丢输入框与草稿）；
     * - 宽度 25%–45%、默认 35%、步进 2%，localStorage 持久化，键盘 ←/→/Home/End；
     * - 容器窄于 760px 改覆盖式抽屉，业务区不让位；
     * - 点击「AI 对话」复用本工作台归属会话，没有才 ensureSession 建一次；
     *   开场白只填进原生草稿，不自动发送。
     */
    const AGENT_MIN = 0.25, AGENT_MAX = 0.45, AGENT_DEFAULT = 0.35, AGENT_STEP = 0.02
    const NARROW_BELOW = 760, DRAWER_MAX = 420
    const WIDTH_KEY = 'xyb.neuroendocrine.agent-pane.v1'
    const DRAFT_QUEUE_KEY = 'xyb.neuroendocrine.initial-draft.v1'
    const DRAFT_LIMIT = 8000

    const clampRatio = (value) => {
      const n = Number(value)
      if (!Number.isFinite(n)) return AGENT_DEFAULT
      return Math.min(AGENT_MAX, Math.max(AGENT_MIN, n))
    }
    const snapRatio = (value) => clampRatio(Math.round(value / AGENT_STEP) * AGENT_STEP)
    const round4 = (n) => Math.round(n * 10000) / 10000
    const loadWidth = () => {
      try { return clampRatio(localStorage.getItem(WIDTH_KEY)) } catch { return AGENT_DEFAULT }
    }
    const saveWidth = (value) => {
      try { localStorage.setItem(WIDTH_KEY, String(round4(value))) } catch { /* 隐私模式写不进去，不挡使用 */ }
    }

    /* 分隔线品牌色（本仓绿）；悬停/拖动光晕由它派生，不写死蓝色 */
    const SPLITTER_BRAND = '#416d60'
    const splitterRgba = (hex, alpha) => {
      const raw = String(hex).replace('#', '')
      const full = raw.length === 3 ? raw.split('').map((c) => c + c).join('') : raw
      const n = parseInt(full, 16)
      return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`
    }

    let bridge = null

    function currentSession() {
      const service = bridge && bridge.desktopWorkbenches
      if (service && typeof service.currentSession === 'function') return service.currentSession() || null
      const snapshot = bridge && bridge.sessions && bridge.sessions.list && bridge.sessions.list.getSnapshot
        ? bridge.sessions.list.getSnapshot()
        : null
      return (snapshot && (snapshot.current || Object.keys(snapshot.byId || {}).find((id) =>
        ((snapshot.byId[id] && snapshot.byId[id].retainedBy && snapshot.byId[id].retainedBy.mainView) || 0) > 0))) || null
    }
    function workbenchOwnsSession(id) {
      const service = bridge && bridge.desktopWorkbenches
      return Boolean(id && service && typeof service.ownsSession === 'function' && service.ownsSession(id))
    }
    function ownedSession() {
      const id = currentSession()
      return workbenchOwnsSession(id) ? id : null
    }

    /* 只填草稿：不覆盖已有内容、不合并引用态、不自动发送 */
    function fillDraft(sessionId, prompt) {
      if (!sessionId || ownedSession() !== sessionId) throw new Error('会话已切换，请回到本工作台再操作')
      const actx = bridge.sessions.scope(sessionId)
      const conversation = actx && actx.get ? actx.get('conversation') : null
      if (!conversation) throw new Error('对话输入不可用')
      const input = conversation.input.for(actx)
      const snapshot = input.state.getSnapshot()
      if ((snapshot.occurrences && snapshot.occurrences.length) || (snapshot.phase && snapshot.phase !== 'plain')) {
        throw new Error('当前草稿含引用或特殊输入，请先在原生会话里处理')
      }
      const current = snapshot.draft || ''
      input.setDraft(current.trim() ? `${current}\n\n${prompt}` : prompt)
    }

    let pendingDraft = null
    try {
      const saved = JSON.parse(localStorage.getItem(DRAFT_QUEUE_KEY) || 'null')
      if (saved && saved.sessionId && saved.prompt) pendingDraft = saved
    } catch { /* 隐私模式忽略 */ }
    function rememberDraft(entry) {
      pendingDraft = entry
      try {
        if (entry) localStorage.setItem(DRAFT_QUEUE_KEY, JSON.stringify(entry))
        else localStorage.removeItem(DRAFT_QUEUE_KEY)
      } catch { /* 隐私模式忽略 */ }
    }
    function flushDraft() {
      if (!pendingDraft) return false
      try {
        fillDraft(pendingDraft.sessionId, pendingDraft.prompt)
        rememberDraft(null)
        return true
      } catch { return false /* composer 未就绪：留给下一轮 */ }
    }

    function onboardingPrompt(dir) {
      return [
        '你正在协助我使用「小泌宝 · 神经内分泌肿瘤工作台」。它只做本机资料整理，不提供诊疗建议。',
        `资料目录：${dir || '（首次打开时在面板里选择）'}`,
        '里面是我的分级档案、生化与影像双线随访、SSA 注射与 PRRT 治疗事件、基因/病理记录、复查安排和我想问的问题。',
        '分工：你帮我汇总、找缺漏、把报告里的数值和日期整理成对照表（数值照抄、单位随报告原文）；判断和决定由我和治疗团队做。',
      ].join('\n')
    }

    function Panel({ conversation }) {
      const [health, setHealth] = React.useState(null)
      const [error, setError] = React.useState('')
      const [large, setLarge] = React.useState(false)
      const [attempt, setAttempt] = React.useState(0)
      const [open, setOpen] = React.useState(false)
      const [showSetup, setShowSetup] = React.useState(false)
      const [uiBroken, setUiBroken] = React.useState(false)
      const triggerRef = React.useRef(null)
      const panelRef = React.useRef(null)
      const openRef = React.useRef(false)
      const scrollRef = React.useRef({ win: 0, pane: 0 })
      /* ---- AI 会话面板状态 ---- */
      const [note, setNote] = React.useState('')
      const [width, setWidth] = React.useState(loadWidth)
      const [paneOpen, setPaneOpen] = React.useState(true)
      const [connecting, setConnecting] = React.useState(false)
      const [narrow, setNarrow] = React.useState(false)
      const [dragging, setDragging] = React.useState(false)
      const [hovering, setHovering] = React.useState(false)
      const shellRef = React.useRef(null)
      const dragHostRef = React.useRef(null)
      const frameRef = React.useRef(null)
      const hasConversation = Boolean(conversation)
      const canOpenSession = Boolean(bridge && bridge.desktopWorkbenches && typeof bridge.desktopWorkbenches.ensureSession === 'function')

      React.useEffect(() => {
        const controller = new AbortController()
        setHealth(null); setError('')
        fetch('/api/neuroendocrine-workbench/health', { signal: controller.signal, credentials: 'same-origin' })
          .then(async (response) => {
            if (!response.ok) throw new Error(`服务连接失败 (${response.status})`)
            const result = await response.json()
            if (!controller.signal.aborted) setHealth(result)
          })
          .catch((failure) => { if (!controller.signal.aborted) setError(failure.message) })
        return () => controller.abort()
      }, [attempt])

      /* 业务界面在 public/（原型提升而来）。探不到就退回骨架，避免白屏。 */
      React.useEffect(() => {
        const controller = new AbortController()
        fetch(UI_ENTRY, { method: 'HEAD', signal: controller.signal, credentials: 'same-origin' })
          .then((response) => { if (!response.ok) setUiBroken(true) })
          .catch(() => setUiBroken(true))
        return () => controller.abort()
      }, [attempt])

      React.useEffect(() => { openRef.current = open }, [open])

      const closePanel = React.useCallback(() => {
        if (!openRef.current) return
        let canHistory = false
        try { canHistory = !!(window.history && window.history.back) && !!(window.history.state && window.history.state.dp) } catch (_) { canHistory = false }
        if (canHistory) {
          try {
            window.history.back()
            setTimeout(() => { if (openRef.current) setOpen(false) }, 250)
            return
          } catch (_) {}
        }
        setOpen(false)
      }, [])

      React.useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') { e.preventDefault(); closePanel() } }
        if (open) document.addEventListener('keydown', onKey)
        return () => document.removeEventListener('keydown', onKey)
      }, [open, closePanel])

      React.useEffect(() => {
        const onPop = () => { if (openRef.current) setOpen(false) }
        window.addEventListener('popstate', onPop)
        return () => window.removeEventListener('popstate', onPop)
      }, [])

      const openPanel = () => {
        if (openRef.current) return
        const pane = document.querySelector('.wb-neuroendocrine-workbench')
        scrollRef.current = { win: window.scrollY || 0, pane: pane ? pane.scrollTop : 0 }
        setOpen(true)
        try { window.history.pushState({ dp: 1 }, '', '#disease-primer') } catch (_) {}
      }

      React.useEffect(() => {
        if (open) {
          document.documentElement.classList.add('dp-lock')
          if (panelRef.current) { try { panelRef.current.focus() } catch (_) {} }
          return
        }
        document.documentElement.classList.remove('dp-lock')
        if (triggerRef.current) { try { triggerRef.current.focus({ preventScroll: true }) } catch (_) {} }
        const pane = document.querySelector('.wb-neuroendocrine-workbench')
        if (scrollRef.current.win) { try { window.scrollTo(0, scrollRef.current.win) } catch (_) {} }
        if (pane && scrollRef.current.pane) pane.scrollTop = scrollRef.current.pane
      }, [open])

      /* ---------------- AI 会话：调起/复用、草稿队列、分栏 ---------------- */
      React.useEffect(() => {
        const timer = setInterval(() => { if (flushDraft()) setNote('草稿已填入会话，按回车发送') }, 500)
        const service = bridge && bridge.desktopWorkbenches
        const unsubscribe = service && service.subscribe ? service.subscribe(() => setNote('')) : null
        return () => { clearInterval(timer); if (unsubscribe) unsubscribe() }
      }, [])

      React.useEffect(() => {
        if (!canOpenSession) setNote('当前 Desktop 版本不支持从面板调起会话；请从左侧会话列表新建会话')
      }, [canOpenSession])

      /* 窄屏判定用**容器宽度**，不是窗口宽度：宿主主区宽度 ≠ 窗口宽度 */
      React.useEffect(() => {
        const host = shellRef.current
        if (!host || typeof ResizeObserver !== 'function') return undefined
        const observer = new ResizeObserver((entries) => {
          const w = (entries[0] && entries[0].contentRect && entries[0].contentRect.width) || 0
          setNarrow(w > 0 && w < NARROW_BELOW)
        })
        observer.observe(host)
        return () => observer.disconnect()
      }, [])

      const applyWidth = React.useCallback((next) => {
        const snapped = round4(snapRatio(next))
        setWidth(snapped)
        saveWidth(snapped)
      }, [])
      const stopDrag = React.useCallback(() => {
        dragHostRef.current = null
        setDragging(false)
      }, [])
      React.useEffect(() => {
        if (!dragging) return undefined
        const onMove = (event) => {
          const host = dragHostRef.current
          if (!host) return
          const rect = host.getBoundingClientRect()
          if (!rect.width) return
          /* 会话在右侧：指针越靠左，会话越宽 */
          applyWidth((rect.right - event.clientX) / rect.width)
        }
        document.addEventListener('pointermove', onMove)
        document.addEventListener('pointerup', stopDrag)
        document.addEventListener('pointercancel', stopDrag)
        return () => {
          document.removeEventListener('pointermove', onMove)
          document.removeEventListener('pointerup', stopDrag)
          document.removeEventListener('pointercancel', stopDrag)
        }
      }, [dragging, applyWidth, stopDrag])

      const onSplitterPointerDown = (event) => {
        event.preventDefault()
        try { event.currentTarget.setPointerCapture(event.pointerId) } catch { /* 旧宿主无指针捕获：document 监听兜住 */ }
        dragHostRef.current = shellRef.current
        setDragging(true)
      }
      const onSplitterKeyDown = (event) => {
        const delta = { ArrowLeft: AGENT_STEP, ArrowRight: -AGENT_STEP }[event.key]
        if (delta !== undefined) { event.preventDefault(); applyWidth(width + delta); return }
        if (event.key === 'Home') { event.preventDefault(); applyWidth(AGENT_MAX); return }
        if (event.key === 'End') { event.preventDefault(); applyWidth(AGENT_MIN) }
      }

      async function openAgent(prompt) {
        setNote('')
        if (!canOpenSession) {
          setNote('当前 Desktop 版本不支持从面板调起会话；请从左侧会话列表新建会话')
          return
        }
        setConnecting(true)
        try {
          let dir = null
          try {
            const res = await fetch('/api/neuroendocrine-workbench/health')
            dir = (await res.json()).dir || null
          } catch { /* 拿不到目录也照样调起 */ }
          /* ensureSession 复用本工作台归属会话；没有才创建一次 */
          const id = await bridge.desktopWorkbenches.ensureSession({ folder: dir })
          rememberDraft({ sessionId: id, prompt: (prompt || onboardingPrompt(dir)).slice(0, DRAFT_LIMIT) })
          flushDraft()
          setPaneOpen(true)
          setNote('会话已就绪：开场白只填进草稿，按回车才会发送')
        } catch (error) {
          setNote(`没能调起会话：${(error && error.message) || error}`)
        } finally {
          setConnecting(false)
        }
      }
      /* 收起只是隐藏，不结束会话；再点「打开 AI 对话」回到同一会话 */
      function onAgentClick() {
        if (!hasConversation) { void openAgent(null); return }
        setPaneOpen((v) => !v)
        setNote('')
      }

      const agentLabel = !canOpenSession
        ? 'AI 对话暂不可用'
        : connecting ? '正在连接…'
          : !hasConversation ? 'AI 对话'
            : paneOpen ? '收起 AI 对话' : '打开 AI 对话'
      const percent = Math.round(width * 100)
      const paneVisible = paneOpen && (hasConversation || connecting)

      /* ---- 外壳样式（顶栏 / 业务区 / 会话区 / 分隔线） ---- */
      const rootStyle = { display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0, minWidth: 0, width: '100%', background: '#f5f4ef', color: '#27332f', font: '13px/1.55 "DM Sans","Noto Sans SC",-apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei",sans-serif' }
      const headerStyle = {
        display: 'flex', alignItems: 'center', gap: 10, flex: '0 0 auto', flexWrap: 'wrap',
        padding: '6px 12px', paddingInlineStart: 'calc(12px + var(--dsh-frame-leading-clearance, 0px))',
        borderBottom: '1px solid #e8e9e3', background: '#fff',
      }
      const brandStyle = { fontSize: 12.5, fontWeight: 700, color: '#416d60', whiteSpace: 'nowrap' }
      const verStyle = { fontSize: 11, color: '#74807a', background: '#eaf3ee', borderRadius: 999, padding: '1px 8px', whiteSpace: 'nowrap' }
      const hintStyle = { flex: 1, minWidth: 180, fontSize: 11.5, color: '#74807a' }
      const headerActionsStyle = { display: 'flex', alignItems: 'center', gap: 6, flex: '0 0 auto', marginLeft: 'auto', flexWrap: 'wrap' }
      const buttonStyle = { border: 0, borderRadius: 999, padding: '5px 14px', minHeight: 32, minWidth: 44, whiteSpace: 'nowrap', background: '#416d60', color: '#fff', font: 'inherit', fontWeight: 600, cursor: 'pointer' }
      const ghostStyle = { ...buttonStyle, background: 'transparent', color: '#416d60', border: '1px solid #e8e9e3' }
      const smallStyle = { ...ghostStyle, minWidth: 36, padding: '4px 10px' }
      const noteStyle = { color: '#416d60', fontWeight: 600, fontSize: 11.5, maxWidth: 340 }
      const bodyStyle = { position: 'relative', display: 'flex', flex: 1, minHeight: 0, minWidth: 0, overflow: 'hidden' }
      const businessStyle = { flex: 1, minWidth: 0, minHeight: 0, display: 'flex', flexDirection: 'column' }
      const frameStyle = { flex: '1 1 auto', width: '100%', minHeight: 0, border: 0, display: 'block', background: '#f7faf8' }
      const paneStyle = {
        display: 'flex', flexDirection: 'column', flex: '0 0 auto', minWidth: 0, minHeight: 0,
        borderLeft: '1px solid #e8e9e3', background: '#fff', overflow: 'hidden',
      }
      const drawerStyle = {
        position: 'absolute', top: 0, right: 0, bottom: 0, zIndex: 3,
        boxShadow: '-8px 0 24px rgba(40, 56, 48, 0.18)',
      }
      /* 1px 视觉细线：绝对定位在业务区/会话边界上，不占布局宽度 */
      const splitterStyle = {
        position: 'absolute', top: 0, bottom: 0, width: 1, marginRight: -0.5,
        zIndex: 2, background: '#e8e9e3', cursor: 'col-resize', touchAction: 'none',
        transition: 'background .15s ease, box-shadow .15s ease',
      }
      const splitterHoverStyle = {
        ...splitterStyle, background: SPLITTER_BRAND,
        boxShadow: `0 0 6px ${splitterRgba(SPLITTER_BRAND, 0.55)}`,
      }
      const splitterDragStyle = {
        ...splitterHoverStyle,
        boxShadow: `0 0 10px ${splitterRgba(SPLITTER_BRAND, 0.8)}`,
      }
      /* 拖动命中面积由 11px 透明热区提供，线条本身不变粗 */
      const splitterHitStyle = {
        position: 'absolute', top: 0, bottom: 0, left: -5, width: 11,
        background: 'transparent', cursor: 'col-resize',
      }
      const splitterGripStyle = {
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: 14, height: 22, borderRadius: 4, background: SPLITTER_BRAND,
        color: '#fff', fontSize: 11, lineHeight: '22px', letterSpacing: '-1px', textAlign: 'center',
        opacity: 0.95, pointerEvents: 'none', userSelect: 'none',
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.18)',
      }
      /* 拖动遮罩：指针掠过业务 iframe 时事件仍归文档，拖动不断 */
      const dragShieldStyle = {
        position: 'absolute', top: 0, right: 0, bottom: 0, left: 0,
        zIndex: 4, cursor: 'col-resize', background: 'transparent', touchAction: 'none',
      }
      const padStyle = { display: 'flex', flexDirection: 'column', gap: 8, justifyContent: 'center', padding: 20, color: '#74807a', fontSize: 12.5, lineHeight: 1.75 }

      /* 业务区：iframe 原样保留；探不到界面才退回原骨架（原顶栏按钮移入外壳顶栏） */
      const business = uiBroken
        ? h('main', { className: 'wb-neuroendocrine-workbench', 'data-font': large ? 'large' : 'standard', style: { flex: 1, display: 'flex', flexDirection: 'column', gap: 16, padding: 20, overflow: 'auto' } },
          h('style', null, theme + primerTheme),
          h(StatusCard, {
            health,
            showSetup,
            onSetup: () => setShowSetup(!showSetup),
            onOpenPrimer: openPanel,
          }),
          h('section', { style: { background: 'var(--wb-surface)', border: '1px solid var(--wb-line)', borderRadius: 'var(--wb-radius)', padding: 20 } },
            h('h1', { style: { fontSize: '1.6em', margin: '0 0 12px' } }, metadata.title),
            h('p', null, metadata.description),
            h('p', { role: 'status' }, error || (health ? '接入骨架：服务已连接，业务功能待按 spec 实现。' : '正在连接本机服务…')),
            h('button', { type: 'button', className: 'wb-primary', onClick: () => setAttempt((value) => value + 1) }, '重新检查连接')))
        : h('iframe', {
            key: attempt,
            ref: frameRef,
            src: UI_ENTRY,
            title: metadata.title,
            style: frameStyle,
            sandbox: 'allow-scripts allow-same-origin allow-forms allow-downloads',
            onLoad: () => setNote(''),
          })

      return h(React.Fragment, null,
        h('div', { style: rootStyle },
          /* 顶栏：保留原结构（标题 / 版本 / 大字 / 疾病概要），右侧按钮组加「AI 对话」入口 */
          h('header', { style: headerStyle },
            h('strong', { style: brandStyle }, metadata.title),
            h('span', { 'aria-live': 'polite', style: verStyle }, health ? `v${health.version}` : '版本待连接'),
            h('span', { style: hintStyle }, hasConversation
              ? '右侧是 DSH 原生会话：可拖中间分隔边调整宽度（25%–45%），收起不会结束会话。'
              : '还没有会话。点右侧「AI 对话」调起原生会话，开场白只填进草稿，不自动发送。'),
            h('div', { style: headerActionsStyle },
              uiBroken ? h('button', { type: 'button', style: smallStyle, 'aria-pressed': large, onClick: () => setLarge(!large) }, large ? '标准字' : '大字') : null,
              uiBroken ? h('button', {
                type: 'button',
                className: 'primer-trigger',
                style: smallStyle,
                ref: triggerRef,
                'data-primer-open': '',
                'aria-haspopup': 'dialog',
                'aria-controls': 'disease-primer',
                'aria-expanded': open ? 'true' : 'false',
                'aria-label': '疾病概要：定义、医学资料与指南情况、治疗全景、发展趋势',
                title: '疾病概要：定义 · 指南 · 治疗全景 · 趋势',
                onClick: openPanel,
              }, '?') : null,
              h('button', {
                type: 'button',
                style: buttonStyle,
                onClick: onAgentClick,
                disabled: connecting || !canOpenSession,
                'aria-label': `AI 对话：${agentLabel}`,
              }, agentLabel),
              hasConversation && paneOpen
                ? h('button', { type: 'button', style: ghostStyle, onClick: () => setPaneOpen(false), 'aria-label': '收起 AI 对话面板' }, '×')
                : null,
              note ? h('span', { role: 'status', style: noteStyle }, note) : null)),
          h('div', { ref: shellRef, style: bodyStyle },
            h('div', { style: businessStyle }, business),
            /* splitter 必须夹在业务区与 aside 之间：DOM 顺序为 业务区 → splitter → aside */
            !narrow && paneVisible ? h('div', {
              role: 'separator',
              'aria-orientation': 'vertical',
              'aria-label': '调整 AI 对话面板宽度',
              'aria-valuemin': Math.round(AGENT_MIN * 100),
              'aria-valuemax': Math.round(AGENT_MAX * 100),
              'aria-valuenow': percent,
              tabIndex: 0,
              style: {
                ...(dragging ? splitterDragStyle : hovering ? splitterHoverStyle : splitterStyle),
                right: `${percent}%`,
              },
              onPointerDown: onSplitterPointerDown,
              onPointerEnter: () => setHovering(true),
              onPointerLeave: () => setHovering(false),
              onKeyDown: onSplitterKeyDown,
            },
              h('span', { style: splitterHitStyle, 'aria-hidden': 'true' }),
              (hovering || dragging) ? h('span', { style: splitterGripStyle, 'aria-hidden': 'true' }, '⠿') : null) : null,
            /* 原生会话常挂载：显隐只用 display，卸载会丢输入框与草稿 */
            h('aside', {
              style: {
                ...paneStyle,
                ...(narrow ? drawerStyle : null),
                width: narrow ? `min(92%, ${DRAWER_MAX}px)` : `${percent}%`,
                display: paneVisible ? 'flex' : 'none',
              },
              'aria-label': 'AI 对话',
              'aria-hidden': paneVisible ? undefined : 'true',
            }, conversation || h('div', { style: padStyle },
              h('b', null, 'AI 对话还没开始'),
              h('span', null, '点顶栏「AI 对话」调起 DSH 原生会话后，它会固定出现在这一侧。'),
              h('span', null, '没有会话也不影响记录：业务区照常可用。'))),
            /* 拖动遮罩：指针掠过业务 iframe 时事件仍归文档，拖动不断 */
            dragging && !narrow ? h('div', { style: dragShieldStyle, 'aria-hidden': 'true' }) : null)),
        open ? h(PrimerOverlay, { onClose: closePanel, panelRef }) : null)
    }

    function apply(ctx) {
      bridge = ctx
      ctx.effect(() => ctx.desktopWorkbenches.register({"title":"小泌宝 · 神经内分泌肿瘤工作台","repository":"https://github.com/xyb-openharness-dsh-plugins/neuroendocrine-workbench","description":"神经内分泌和肾上腺肿瘤（NET）患者工作台：分级档案、生化+影像双线随访、SSA 注射与 PRRT 治疗事件、基因/病理与临床试验匹配","customFrame":true}, Panel))
    }
    return { apply, inject: ['desktopWorkbenches', 'sessions'] }
  }
})
