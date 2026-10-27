/* 36 号 · 疾病概要数据（小泌宝 · 神经内分泌肿瘤工作台）
 * 四段固定顺序：definition → evidence → landscape → trend。
 * 内容只取自本仓 README 与 docs/（BRIEF / SPEC / SOURCES / USER-RESEARCH），不写临床判定。
 * 链接逐条经 primer-backfill-2026-10-27/verify-links.mjs 验活（2026-10-27）；
 * 未取得原件的一律 nolink + note，不编 URL。
 */
window.DISEASE_PRIMER = {
  brand: '小泌宝',
  name: '神经内分泌肿瘤',
  en: 'Neuroendocrine Tumors（NET）',
  updated: '2026-10-27',
  sections: [
    {
      id: 'definition',
      title: '定义',
      intro: '神经内分泌和肾上腺肿瘤（NET）：按 WHO 消化系统肿瘤分类第 5 版分级（G1 ≤2% / G2 3–20% / NET G3 >20% 分化良好 vs NEC 低分化）。'
        + '本工作台覆盖胃肠胰神经内分泌肿瘤（GEP-NETs）与嗜铬细胞瘤/副神经节瘤（PPGL），'
        + '以分化良好 NET 的长程管理为主线，肾上腺亚群单独保留激素语境。',
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
      intro: '这个工作台里出现的「该查什么、按什么口径分级、随访看什么」，应能追到下面某一份文件。'
        + '未取得原件的在表里如实标出，不假装看过。',
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
      intro: '下面按治疗手段类别列出本仓 docs（BRIEF / SOURCES / SPEC）与 README 中记录过的手段。'
        + '这是「世界上大致有哪些办法」的地图，不是给你排的先后顺序。',
      groups: [
        {
          label: '局部处理',
          points: [
            '手术：本仓把手术列为治疗事件之一，记录在治疗历程里；是否手术、何时手术由主管医生判断。'
          ]
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
      points: [
        '以上是文献与指南里列出的手段，按病期与线序排列，不代表任何一项适合你。选哪一个，这一句需要问你的医生。'
      ],
      sources: [
        { org: 'NCCN', doc: 'NCCN Guidelines · Neuroendocrine and Adrenal Tumors', version: 'Version 3.2025', entry: true, kind: 'hub', url: 'https://www.nccn.org/guidelines/guidelines-detail?id=1448', note: '临床版全文需注册；本台未取得该版原件' },
        { org: 'ENETS', doc: 'ENETS Guidelines & Standards of Care', version: '按部位滚动更新', entry: true, kind: 'hub', url: 'https://www.enets.org/guidelines.html', note: '栏目页；本台未取得某一部位版全文' },
        { org: 'CSCO', doc: '神经内分泌肿瘤诊疗指南', version: '2025 版', nolink: true, note: '未取得原件：官方渠道发行/会员登录浏览，无公开免费全文' }
      ]
    },
    {
      id: 'trend',
      title: '发展趋势',
      intro: '这一段只写已经发生的事：哪份文件换了版本、哪一天发布、哪一项审批到了哪一步。'
        + '不写预测，不做评价，也不给任何倾向。',
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
