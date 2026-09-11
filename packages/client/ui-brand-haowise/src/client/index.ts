/** HAOWISE brand occupants for the generic browser-brand slots. */
import type { ClientContext } from '@deepseek-ai/dsh-client-runtime/client'
import type {} from '@deepseek-ai/dsh-client-ui-conversation/client'
import type {} from '@deepseek-ai/dsh-client-ui-sidebar/client'
import { HaowiseBrandMark, HaowiseBrandName } from './Brand.tsx'

/** Required service: the UI slot registry. */
export const inject = ['slots']

/**
 * Fill every shipped brand slot as one declaration-aware registration set.
 * Only active when DSH_CLIENT_BUILD_PROFILE is 'haowise'.
 * @param ctx - Client root context.
 */
export function apply(ctx: ClientContext): void {
  if (process.env.DSH_CLIENT_BUILD_PROFILE !== 'haowise') return
  ctx.slots.inject('sidebar.brand.mark', () =>
    ctx.slots.inject('sidebar.brand.name', () =>
      ctx.slots.inject('conversation.hero.brand.mark', function* () {
        yield ctx.slots.register({ name: 'sidebar.brand.mark' }, HaowiseBrandMark)
        yield ctx.slots.register({ name: 'sidebar.brand.name' }, HaowiseBrandName)
        yield ctx.slots.register({ name: 'conversation.hero.brand.mark' }, HaowiseBrandMark)
      })))
}
