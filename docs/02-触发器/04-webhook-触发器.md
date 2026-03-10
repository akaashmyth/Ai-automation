# 如何用 Webhook 触发 Automation？

Webhook 触发器会为你的 Automation 生成一个 **HTTP 端点**，向该端点发送 POST 请求即可触发一次运行。

---

## 基本步骤

### 1. 创建并保存 Automation

- 前往 [cursor.com/automations](https://cursor.com/automations) 创建 Automation
- 先完成基础配置（Prompt、仓库等），然后**保存**
- 保存后才会生成 Webhook URL 和 API Key

### 2. 添加 Webhook 触发器

- 在 Automation 的 **Triggers** 中选择 **Webhook**
- 保存后，在配置界面会看到：
  - **Webhook URL**：用于接收 POST 请求的地址
  - **API Key**：用于鉴权

### 3. 发送 POST 请求

```bash
curl -X POST "https://your-webhook-url" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"message": "可选的自定义 payload"}'
```

---

## 注意事项

| 项目 | 说明 |
|------|------|
| **认证** | 请求需携带 API Key（通常放在 `Authorization: Bearer <API_KEY>` 中） |
| **方法** | 使用 POST |
| **Payload** | 可自定义 JSON，Agent 可通过上下文获取 |
| **仓库/分支** | Webhook 无法从请求中推断，需在触发器设置里手动指定仓库和分支 |

---

## 常见用途

- **CI 流水线**：构建/测试完成后触发代码审查
- **监控系统**：告警时触发自动分析
- **内部系统**：工单、发布系统等通过 Webhook 调用 Automation
- **定时任务**：用外部 cron 服务定时调用 Webhook

---

## 与其他触发器的区别

| 触发器 | 触发来源 |
|--------|----------|
| GitHub | PR、Push、CI 等 GitHub 事件 |
| Slack | 频道消息、新频道等 |
| Webhook | 任意能发 HTTP POST 的系统 |

Webhook 适合需要从**自定义系统**或**非 Cursor 原生集成**触发 Automation 的场景。
