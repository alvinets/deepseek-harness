---
description: "HAOWISE 品牌填充，用于 Web 客户端侧栏与会话首屏，仅在 haowise 构建中生效；供使用 HAOWISE 品牌识别的部署阅读。"
kind: "package-reference"
---

# @deepseek-ai/dsh-client-ui-brand-haowise

[English](README.md) | 中文

## 概述

本包让以 `haowise` profile 构建的客户端在侧栏与会话首屏显示 HAOWISE Λ 标志与字标。其他构建 profile 仍会加载插件，但不注册 occupant，因此显示外壳鱼形回退。它是 [`ui-brand-official`](../ui-brand-official/README.zh.md) 在 HAOWISE 品牌部署中的对应物；其 bundle 覆盖层 [`web-app-haowise`](../../bundle/web-app-haowise/README.zh.md) 在同一棵树上禁用官方包。本包不保留运行时状态，也不影响模型请求。

## 目录

- [使用本包](#use-this-package)
- [模型体验](#model-experience)
- [已知限制与暂缓事项](#known-limitations-and-deferred-work)

-----

<a id="use-this-package"></a>
## 使用本包

将本包挂载到以 HAOWISE 为身份标识的部署的浏览器 roster，并以 `haowise` profile 构建客户端，使 occupant 注册。[`web-app-haowise`](../../bundle/web-app-haowise/README.zh.md) bundle 层同时完成接线：它禁用 `ui-brand-official` 并插入本包的行，让 profile 在一处完成品牌组合。

### 选择 profile

`DSH_CLIENT_BUILD_PROFILE` 在构建期选择注册或跳过；只有取值 `haowise` 时注册 occupant。其他取值（包括官方构建）均保留外壳回退。

<a id="model-experience"></a>
## 模型体验

无，因为本包只贡献浏览器呈现；这里没有任何内容进入模型请求。

#### KV Cache 影响

无；本包既不组装也不发送 provider 请求。

<a id="known-limitations-and-deferred-work"></a>
## 已知限制与暂缓事项

- **本包只提供一组 occupant** —— 其他 HAOWISE 呈现应由占用相同 slot 的另一个 Cordis 包提供。
- **字标为固定的明/暗 PNG 对** —— base64 素材内嵌于 `Brand.tsx`；更换素材需重新构建本包。
- **浏览器标题相互独立** —— `DSH_CLIENT_TITLE` 在构建期选择标题文字，而不经过 UI slot。
