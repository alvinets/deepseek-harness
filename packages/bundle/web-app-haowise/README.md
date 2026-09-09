---
description: "HAOWISE-branded web surface: a thin bundle overlay over dsh-web-app that swaps the official brand occupants for HAOWISE."
kind: "package-bundle"
---

# @deepseek-ai/dsh-web-app-haowise

English | [中文](README.zh.md)

## Summary

`web-app-haowise` is the HAOWISE rebrand layer for the web surface. It rides over [`dsh-web-app`](../web-app/README.md) and does exactly two things with its patch list: it disables the `ui-brand-official` row so the DeepSeek occupants register nothing, and it inserts the [`ui-brand-haowise`](../../client/ui-brand-haowise/README.md) row so the HAOWISE mark, name, and Hero occupants register instead. Everything else — server, API gateway, browser roster, prompt — stays the web-app bundle's.

## Table of Contents

- [Use this bundle](#use-this-bundle)
- [Model Experience](#model-experience)

-----

<a id="use-this-bundle"></a>
## Use this bundle

List this bundle in `dsh.profile.bundles` after `dsh-web-app` (and `dsh-base`):

```json
"bundles": ["@deepseek-ai/dsh-base", "@deepseek-ai/dsh-web-app", "@deepseek-ai/dsh-web-app-haowise"]
```

The `haowise` client build profile (`DSH_BUILD_CLIENT_PROFILE=haowise`) activates the occupants; without it the web-app fallbacks show.

<a id="model-experience"></a>
## Model Experience

None, as the overlay only swaps presentation rows; the model-facing composition stays owned by the composed `dsh-base` and `dsh-web-app` layers.

#### KV Cache effect

None; no prompt section, tool, or provider request changes.
