---
description: "HAOWISE brand occupants for the Web client's sidebar and conversation Hero slots, active only in haowise builds; for deployments branded as HAOWISE."
kind: "package-reference"
---

# @deepseek-ai/dsh-client-ui-brand-haowise

English | [中文](README.zh.md)

## Summary

This package gives a `haowise` client build the HAOWISE Λ mark and wordmark in the sidebar and conversation Hero. Other build profiles load the plugin but register no occupants, leaving the shell fish fallbacks visible. It is the counterpart of [`ui-brand-official`](../ui-brand-official/README.md) for deployments whose identity is not DeepSeek's own; its bundle overlay [`web-app-haowise`](../../bundle/web-app-haowise/README.md) disables the official package in the same tree. It retains no runtime state and does not affect model requests.

## Table of Contents

- [Use this package](#use-this-package)
- [Model Experience](#model-experience)
- [Known Limitations and Deferred Work](#known-limitations-and-deferred-work)

-----

<a id="use-this-package"></a>
## Use this package

Mount this plugin in the browser roster of a deployment whose identity is HAOWISE's, then build the client with the `haowise` profile so the occupants register. The [`web-app-haowise`](../../bundle/web-app-haowise/README.md) bundle layer wires both: it disables `ui-brand-official` and inserts this package's row, so the profile composes the brand from one place.

### Choosing the profile

`DSH_CLIENT_BUILD_PROFILE` selects the register-or-skip switch at build time; only the value `haowise` registers occupants. Every other value (including the official build) keeps the shell fallbacks.

<a id="model-experience"></a>
## Model Experience

None, as the package contributes browser presentation only; nothing here reaches a model request.

#### KV Cache effect

None; this package neither assembles nor sends a provider request.

<a id="known-limitations-and-deferred-work"></a>
## Known Limitations and Deferred Work

- **The package supplies one occupant set** — alternative HAOWISE presentations belong in another Cordis package occupying the same slots.
- **The wordmark is a fixed light/dark PNG pair** — the base64 assets are embedded in `Brand.tsx`; swapping them requires a re-build of this package.
- **The browser title is independent** — `DSH_CLIENT_TITLE` selects title text at build time rather than through a UI slot.
