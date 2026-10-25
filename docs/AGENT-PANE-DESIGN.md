# 小泌宝 DSH 原生 AI 对话栏设计状态

状态：**交互状态稿已写入 HTML；DSH 原生桥未实现，实机未验证**。依据 `prompts/DSH-AGENT-PANE-INTEGRATION.md`、`docs/20-AGENT-PANE-DESIGN.md` 与 `docs/34-AGENT-DRAFT-SEND.md`。

## 合同与原型

- 宿主目标：DSH Desktop NEXT；当前包 `customFrame: true`，因此工作区布局应保留业务主区和右侧 Agent 区。真实 NEXT conversation prop/会话 ownership API 仍须按目标 Desktop RC 核验。
- 顶栏：品牌/版本在左，右侧有具名“收起 AI 对话 / 打开 AI 对话”按钮，作为唯一开合入口；没有浮动重开按钮或面板内第二个关闭按钮。按钮只控制 HTML 原型状态，不结束会话。
- 所有一级页面页头加入“和 AI 讨论”。按页面键生成专用 prompt 与上下文摘要：病理页带报告原文状态；指标/一图秀带系列、时间范围、单位、日期与来源；试验页显式提示数据是模拟；情绪页不带私密记录；设置页不带目录路径或凭据。摘要缺项明确写出，不推断、不补值。
- 消息类型遵循 `neuroendocrine:agent-draft`，嵌入形态 payload 含 `prompt` 与 `send: true`，由宿主桥在用户点击“和 AI 讨论”后处理。草稿不是事实，不写回病历。
- 独立打开原型时无 parent：本地显示提示词草稿和“未发送 / 非真实 DSH 会话”，不假装已发送。

## 实际实现边界

当前 prototype HTML 有独立状态稿和 message postMessage 请求；项目 `lib/client.js` 目前只注册健康接口与客户端外壳，没有监听 agent-draft、调用原生 conversation、ensureSession、ownership 校验、草稿冲突保护或 session submit。**所以不能标原生 AI 接通。**

| 项 | 当前状态 | 证据/后续验法 |
| --- | --- | --- |
| 顶栏显隐入口 | HTML 已写，浏览器操作未验证 | 浏览器分别点开/收起，检查 aria-expanded 与 textarea 草稿保留 |
| 各页“和 AI 讨论” | HTML 运行时给每页头部注入按钮，逐页事件未验证 | 逐页检查按钮；检查 prompt 与摘要使用正确当前页/筛选 |
| agent-draft 事件 | iframe 分支已写 `type/prompt/send:true` | host bridge 未实现；集成后对穿检查 source、origin、长度、private |
| 原生会话创建/复用 | 未实现 | 目标 DSH NEXT RC 实机；ensureSession/owner 守卫与只创建一次断言 |
| 原生输入草稿冲突与 submit | 未实现 | 已有草稿、引用、非 plain 状态均需实机测试；当前不得覆盖/假发送 |
| splitter、宽度持久化、窄屏抽屉 | 原型仅布局模拟 | 25%–45%、键盘/触控、<760px 抽屉和偏好恢复均需浏览器/真机验证 |

## 原型 / 会话记录

- 原型：`prototypes/v0.1/index.html`，v0.1.7；顶栏为唯一开合入口（无浮动重复入口）；哈希见 `docs/PROTOTYPE-REVIEW.md`。
- 顶栏开关与逐页草稿按钮：见 `prototypes/v0.1/index.html`、`prototypes/v0.1/app.js`。
- 当前用户授权范围：本轮明确要求添加原生 AI 对话栏入口与逐页讨论按钮；原生桥接仍需后续按宿主契约实现并通过 V2/V3 验收。
