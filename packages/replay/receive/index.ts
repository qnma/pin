import { IncrementalParam, IncSource } from '@mood/record';
import { RecCtx, RecHandler } from '../types';
import { receInput } from './input';
import { recMediaInteraction } from './media-interaction';
import { recMouseInteraction } from './mouse-interaction';
import { recMouseMove } from './mouse-move';
import { recMutation } from './mutation';
import { recViewportResize } from './viewport-resize';
import { recScroll } from './scroll';
import { recStyleSheet } from './style-sheet';

export function applyIncremental(
  event: IncrementalParam,
  context: RecCtx,
  sync: boolean
) {
  const handlerMap: { [key in IncSource]: RecHandler } = {
    [IncSource.MUTATION]: recMutation,
    [IncSource.MOUSE_MOVE]: recMouseMove,
    [IncSource.MOUSE_INTERACTION]: recMouseInteraction,
    [IncSource.SCROLL]: recScroll,
    [IncSource.VIEWPORT_RESIZE]: recViewportResize,
    [IncSource.INPUT]: receInput,
    [IncSource.TOUCH_MOVE]: recMouseMove,
    [IncSource.MEDIA_INTERACTION]: recMediaInteraction,
    [IncSource.STYLE_SHEETRULE]: recStyleSheet
  };

  handlerMap[event.source](event, context, sync);
}