# HTML 交互原型确认记录 · 小泌宝 v0.1.2

状态：**品牌已更名；原型部分 DOM 预览；G2 未签认**。此记录不是用户确认。

- HTML 路径：`prototypes/v0.1/index.html`；原型版本：0.1.2，与包 VERSION 0.1.2 对齐。
- 品牌更名后 SHA-256（0.1.2）：
  - index.html `bed094133fb65d3bafca922fc2d5be9c9a42c1f37da315355904ad8c86c4f6e7`
  - style.css `b3b7769152b00b21d89a504d455cdba311494b18d7af572d51ecc65399e1560d`
  - app.js `d3398ad0cda3b47402090a13ed8b0cf5bc10525f25063e2af1a39c7755f37d52`
  - demo-data.js `79023eb4dace85dff7af7a20599b322c64876669101b4ba24a6d73f6bee44d8f`
- 当前 SPEC/场景/交互路径：SPEC v0.2 / SCENARIOS v0.2 / INTERACTION-DESIGN v1（路径表存在，逐条点击未完成）。
- 预览环境：ZCode IAB，1280×720，`http://127.0.0.1:8876/`。首页 DOM 快照实测显示小泌宝看板、模拟档案、指标入口、AI 面板与页脚版本；hash 直达 `#metrics`、`#onechart`、`#trials`、`#injection` 后 DOM 分别显示系列指标、一图秀图表与不可比说明、模拟匹配卡、三张默认收起的治疗折叠卡。IAB locator 点击超时，浏览器截图 surface preparation 也超时。
- 唯一实渲截图：`docs/assets/prototype-v0.1/dashboard-1280x720.png`（1280×720，采集时旧品牌为“小肽宝”、版本 v0.1；目前截图过期，仅作布局草稿证据）。README 当前有此图 1 张；要求 ≥4 张，目前差 3 张。
- 模拟数据：`prototypes/v0.1/demo-data.js` 是原型内唯一演示数据源；临床试验条目、本地/外部结果、匹配指数都是模拟数据，不联网、不构成适配判断。
- 覆盖：看板 / 病情整理 / 分级与基因 / 指标系列 / 一图秀 / 注射与周期 / 试验匹配 / 腹泻与饮食 / 慢病心晴 / 就诊问题 / 收藏回顾 / 设置。AI 面板目前为原型自绘占位，不是 DSH 原生 agent-draft 链路；病情整理、编辑、添加、导出多数为 toast 占位。
- 折叠治疗卡：HTML 使用原生 `<details>/<summary>`，数据 3 个治疗阶段；是否默认全收、打印展开及五块顺序尚未经浏览器实测/printToPDF，**未验证**。
- 一图秀：指标选择窗口已实现最多 4 项选择限制、可比性提示；仍缺 C1–C12 大部分规范（时间窗、全期归一化合同、单点/空态全链、治疗 lane、固定详情/回源、点标题、aria-pressed、独立翻转状态等），见 `docs/ONE-CHART-SPEC.md`，不得称符合规范。
- 窄宽/大字/reduced-motion：CSS 有 1180/900/600 断点与 reduced-motion 声明；未跑逐页 390px 探针与大字预览。
- 用户确认：**未确认**；尚无可实际预览截图供逐模块签认。

| 模块/功能ID | 对应 HTML/行为 | 实际走查证据 | 用户明确确认依据/人/日期 | 未确认项 | 允许实施范围 |
| --- | --- | --- | --- | --- | --- |
| F-DASH 看板 | DOM 首页显示模拟随访安排、近期指标 | IAB DOM 快照（1280×720） | 无 | 视觉截图、按钮操作 | 不允许生产实现 |
| F-METRIC 系列卡 | hash `#metrics` DOM 显示生化/影像/激素系列 | IAB DOM 快照；locator click 未走通 | 无 | 3D 翻转实际状态、窄屏 | 不允许生产实现 |
| F-ONECHART | 指标选择窗口与 4 项上限已写入 | 浏览器交互未实测 | 无 | 选择应用后的图表更新、C1–C12 | 不允许生产实现 |
| F-TRIAL 匹配 | 模拟匹配指数卡与来源展示 | DOM 预览未打开该页 | 无 | 真 sqlite/外部工具、privacy 过滤 | 不允许生产实现 |
| F-PATHWAY 折叠治疗历程 | 三张 `<details>` 含五块结构 | 页面未实际打开/展开 | 无 | 默认收起、展开、打印 | 不允许生产实现 |

签认范围、版本/hash、确认原话/人/日期：待用户看过实际原型后填写。本记录范围不含数据层签认或真实客户端加载确认。
