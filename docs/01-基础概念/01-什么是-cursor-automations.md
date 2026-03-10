# 什么是 Cursor Automations？

**Cursor Automations** 是 Cursor 提供的自动化功能，让 **Cloud Agent** 在云端按你设定的**触发器**自动执行任务，无需你手动操作。

---

## 核心概念

| 概念 | 说明 |
|------|------|
| **Cloud Agent** | 在 Cursor 云端运行的 AI 代理，可读写代码、调用工具、执行任务 |
| **触发器 (Trigger)** | 决定何时运行，如定时、GitHub 事件、Slack 消息等 |
| **工具 (Tools)** | Agent 可用的能力，如创建 PR、发 Slack、调用 MCP 等 |

---

## 典型用途

- **代码审查**：PR 打开时自动做安全/质量检查
- **日常维护**：定时清理 feature flags、更新依赖
- **事件响应**：PagerDuty 告警时自动分析日志、提出修复建议
- **协作流程**：Slack 收到 Bug 时自动分流、创建 Issue
- **周报/摘要**：定时生成仓库变更摘要、测试覆盖率报告

---

## 工作流程

1. 在 [cursor.com/automations](https://cursor.com/automations) 创建 Automation
2. 配置**触发器**（何时运行）
3. 选择**工具**（能做什么）
4. 编写 **Prompt**（具体执行什么任务）
5. 触发器触发后，Cloud Agent 在沙箱中执行任务

---

## 与本地 Agent 的区别

| 对比项 | 本地 Agent (Cursor IDE) | Automations (Cloud Agent) |
|--------|-------------------------|---------------------------|
| 运行位置 | 你的电脑 | Cursor 云端 |
| 触发方式 | 你手动发起 | 触发器自动触发 |
| 适用场景 | 日常编码、即时任务 | 定时任务、事件驱动、无人值守 |

---

**一句话总结**：Cursor Automations = 在云端按触发器自动运行的 AI 代理，用于自动化重复、可规则化的任务。
