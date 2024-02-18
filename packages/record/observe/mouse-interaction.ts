import { each, on } from '@mood/utils';
import { ObserveFunc, ST } from '../types';

const actions = <const>[
  'mouseup',
  'mousedown',
  'click',
  'contexemenu',
  'dbclick',
  'focus',
  'blur',
  'touchstart',
  'touchend'
];

export type SubscribeToMouseInteraction = (typeof actions)[number];

export type MouseInteractionEmitArg = {
  source: ST.MOUSE_INTERACTION;
  action: SubscribeToMouseInteraction;
  id: number;
  x: number;
  y: number;
};

export const observeMouseInteraction: ObserveFunc<MouseInteractionEmitArg> = (cb, { mirror }) => {
  const getHandler = (action: SubscribeToMouseInteraction) => {
    return (event: MouseEvent | TouchEvent) => {
      const id = mirror.getId(event.target);

      const { clientX, clientY } = event instanceof TouchEvent ? event.changedTouches[0] : event;

      cb({ source: ST.MOUSE_INTERACTION, action, id, x: clientX, y: clientY });
    };
  };

  const unsubscribes = actions.map(action => {
    const handler = getHandler(action);
    return on(document, action, handler);
  });

  return () => each(unsubscribes, u => u());
};
