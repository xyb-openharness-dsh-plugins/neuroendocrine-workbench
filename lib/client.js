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

    function Panel() {
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

      if (!uiBroken) {
        return h('main', { className: 'wb-neuroendocrine-workbench', style: { flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 } },
          h('iframe', {
            src: UI_ENTRY,
            title: metadata.title,
            style: { flex: 1, width: '100%', border: 0, minHeight: 0, background: '#f7faf8' },
          }))
      }

      return h('main', { className: 'wb-neuroendocrine-workbench', 'data-font': large ? 'large' : 'standard', style: { flex: 1, display: 'flex', flexDirection: 'column', gap: 16, padding: 20, overflow: 'auto' } },
        h('header', { style: { display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', paddingInlineStart: 'var(--dsh-frame-leading-clearance, 0px)' } },
          h('strong', null, metadata.title),
          h('span', { 'aria-live': 'polite' }, health ? `v${health.version}` : '版本待连接'),
          h('button', { type: 'button', 'aria-pressed': large, onClick: () => setLarge(!large) }, large ? '标准字' : '大字'),
          h('button', {
            type: 'button',
            className: 'primer-trigger',
            ref: triggerRef,
            'data-primer-open': '',
            'aria-haspopup': 'dialog',
            'aria-controls': 'disease-primer',
            'aria-expanded': open ? 'true' : 'false',
            'aria-label': '疾病概要：定义、医学资料与指南情况、治疗全景、发展趋势',
            title: '疾病概要：定义 · 指南 · 治疗全景 · 趋势',
            onClick: openPanel
          }, '?')),
        h('style', null, theme + primerTheme),
        h(StatusCard, {
          health,
          showSetup,
          onSetup: () => setShowSetup(!showSetup),
          onOpenPrimer: openPanel
        }),
        h('section', { style: { background: 'var(--wb-surface)', border: '1px solid var(--wb-line)', borderRadius: 'var(--wb-radius)', padding: 20 } },
          h('h1', { style: { fontSize: '1.6em', margin: '0 0 12px' } }, metadata.title),
          h('p', null, metadata.description),
          h('p', { role: 'status' }, error || (health ? '接入骨架：服务已连接，业务功能待按 spec 实现。' : '正在连接本机服务…')),
          h('button', { type: 'button', className: 'wb-primary', onClick: () => setAttempt((value) => value + 1) }, '重新检查连接')),
        open ? h(PrimerOverlay, { onClose: closePanel, panelRef }) : null)
    }

    function apply(ctx) {
      ctx.effect(() => ctx.desktopWorkbenches.register({"title":"小泌宝 · 神经内分泌肿瘤工作台","repository":"https://github.com/xyb-openharness-dsh-plugins/neuroendocrine-workbench","description":"神经内分泌和肾上腺肿瘤（NET）患者工作台：分级档案、生化+影像双线随访、SSA 注射与 PRRT 治疗事件、基因/病理与临床试验匹配","customFrame":true}, Panel))
    }
    return { apply, inject: ['desktopWorkbenches'] }
  }
})
