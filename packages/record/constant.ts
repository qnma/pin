export enum EventType {
  META,
  LOADED,
  DOM_CONTENT_LOADED,
  FULL_SNAPSHOT,
  INCREMENTAL_SNAPSHOT,
  CUSTOM
}

export enum MouseInteractions {
  MOUSEUP,
  MOUSEDOWN,
  CLICK,
  CONTEXTMENU,
  DBLCLICK,
  FOCUS,
  BLUR,
  TOUCHSTART,
  TOUCHEND
}

export enum IncrementalSource {
  MUTATION,
  MOUSE_MOVE,
  MOUSE_INTERACTION,
  SCROLL,
  VIEWPORT_RESIZE,
  INPUT,
  TOUCH_MOVE,
  MEDIA_INTERACTION,
  STYLE_SHEETRULE,
  XHR,
  FETCH,
  LOG,
  ERROR
}
