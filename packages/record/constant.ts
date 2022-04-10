export enum ET {
  META,
  LOADED,
  DOM_CONTENT_LOADED,
  FULL_SNAPSHOT,
  INCREMENTAL_SNAPSHOT,
  CUSTOM
}

export enum IncSource {
  MUTATION,
  MOUSE_MOVE,
  MOUSE_INTERACTION,
  SCROLL,
  VIEWPORT_RESIZE,
  INPUT,
  TOUCH_MOVE,
  MEDIA_INTERACTION,
  STYLE_SHEETRULE
}
