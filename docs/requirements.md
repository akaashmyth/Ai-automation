# 产品需求文档：实验用小需求（v0.1）

> 版本：v0.1 | 日期：2025-03-10

---

## 一、产品概述

**产品名称**：实验用 Banner 功能

**目标**：用于测试 Cursor Automation 是否能根据 `requirements.md` 自动生成或修改代码。

---

## 二、页面与需求

### 页面：首页（index.html）

| 需求项 | 描述 | 优先级 |
|--------|------|--------|
| REQ-001 | 在首页顶部增加一条横幅（banner）区域 | 高 |
| REQ-002 | 横幅文案为「本应用由 Cursor Automations 实验驱动」 | 高 |
| REQ-003 | 横幅背景颜色为浅黄色（如 `#FFF9C4`），文字为深灰色 | 中 |
| REQ-004 | 横幅在桌面端宽度 100%，在移动端同样自适应 | 中 |
| REQ-005 | 横幅右侧预留一个按钮「了解更多」，暂不需要跳转功能 | 低 |

---

## 三、实现建议

- 在现有 `index.html` 结构中，插入一个位于页面最顶部的 `banner` 容器
- 推荐结构示例（仅供参考）：

```html
<div class="banner">
  <span class="banner-text">本应用由 Cursor Automations 实验驱动</span>
  <button class="banner-action">了解更多</button>
</div>
```

- 在 `css/style.css` 中为 `.banner`、`.banner-text`、`.banner-action` 增加样式，满足颜色和响应式要求

---

## 四、实验目的

1. 当 `docs/requirements.md` 中新增上述小需求后，观察 Automation 是否能：
   - 读取并理解 REQ-001 ~ REQ-005
   - 在 `index.html` 和 `css/style.css` 中自动添加或修改对应代码
   - 通过 Open pull request 工具创建包含这些变更的 PR
2. 验证 Prompt 设计是否足够清晰，是否需要进一步约束代码结构或风格。

