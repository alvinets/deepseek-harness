---
description: "HAOWISE 品牌化的 Web 表面：位于 dsh-web-app 之上的薄 bundle 覆盖层，将官方品牌 occupant 替换为 HAOWISE。"
kind: "package-bundle"
---

# @deepseek-ai/dsh-web-app-haowise

[English](README.md) | 中文

## 概述

`web-app-haowise` 是 Web 表面的 HAOWISE 品牌层。它位于 [`dsh-web-app`](../web-app/README.zh.md) 之上，用它的 patch 列表做且只做两件事：禁用 `ui-brand-official` 行，使 DeepSeek occupant 不再注册；插入 [`ui-brand-haowise`](../../client/ui-brand-haowise/README.zh.md) 行，使 HAOWISE 标志、名称与首屏 occupant 取而代之。其余一切 —— 服务器、API 网关、浏览器 roster、提示词 —— 仍由 web-app bundle 拥有。

## 目录

- [使用本 bundle](#use-this-bundle)
- [模型体验](#model-experience)

-----

<a id="use-this-bundle"></a>
## 使用本 bundle

在 `dsh.profile.bundles` 中于 `dsh-web-app`（以及 `dsh-base`）之后列出本 bundle：

```json
"bundles": ["@deepseek-ai/dsh-base", "@deepseek-ai/dsh-web-app", "@deepseek-ai/dsh-web-app-haowise"]
```

`haowise` 客户端构建 profile（`DSH_BUILD_CLIENT_PROFILE=haowise`）激活这些 occupant；没有它时显示 web-app 回退。

<a id="model-experience"></a>
## 模型体验

无，因为该覆盖层只交换呈现行；模型可见组合仍由组合的 `dsh-base` 与 `dsh-web-app` 层拥有。

#### KV Cache 影响

无；不改动任何 prompt section、工具或 provider 请求。
