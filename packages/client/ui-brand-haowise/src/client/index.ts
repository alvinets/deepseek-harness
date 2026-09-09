/** HAOWISE brand occupants for the generic browser-brand slots. */
import type { Context as ClientContext } from '@deepseek-ai/cordis'
import type {} from '@deepseek-ai/dsh-client-ui-renderer/client'
import type {} from '@deepseek-ai/dsh-client-ui-sidebar/client'
import type {} from '@deepseek-ai/dsh-client-ui-conversation/client'
import { HaowiseBrandName, HaowiseHeroMark, HaowiseSidebarMark } from './Brand.tsx'

/** Required service: the UI slot registry. */
export const inject = ['slots']

/**
 * Fill the brand slots as one declaration-aware registration set, active only
 * when DSH_CLIENT_BUILD_PROFILE is `haowise`; other profiles keep the shell
 * fish fallbacks.
 * @param ctx - Client root context.
 */
export function apply(ctx: ClientContext): void {
  if (process.env.DSH_CLIENT_BUILD_PROFILE !== 'haowise') return
  ctx.slots.inject('sidebar.brand.mark', () =>
    ctx.slots.inject('sidebar.brand.name', () =>
      ctx.slots.inject('conversation.hero.brand.mark', function* () {
        yield ctx.slots.register({ name: 'sidebar.brand.mark' }, HaowiseSidebarMark)
        yield ctx.slots.register({ name: 'sidebar.brand.name' }, HaowiseBrandName)
        yield ctx.slots.register({ name: 'conversation.hero.brand.mark' }, HaowiseHeroMark)
      })))
}
