import { Mirror } from '@mood/snapshot';
import { each } from '@mood/utils';

export function addHoverClass($el: Element, $doc?: Document) {
  each($doc?.querySelectorAll('.\\:hover') || [], $node => $node.classList.remove(':hover'));

  let $current: Element | null = $el;

  while ($current) {
    if ($current.classList) {
      $current.classList.add(':hover');
    }
    $current = $current.parentElement;
  }
}

export function moveAndHover(
  x: number,
  y: number,
  id: number,
  mirror: Mirror,
  cursor: HTMLElement,
  doc?: Document
) {
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;

  const $target = mirror.getNode<Element>(id);

  if ($target) {
    addHoverClass($target, doc);
  }
}
