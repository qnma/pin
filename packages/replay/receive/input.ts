import { InputParam } from '@mood/record';
import { mirror } from '@mood/snapshot';

export function receiveInput(event: InputParam) {
  const $target = mirror.getNode<HTMLInputElement>(event.id);

  if (!$target) return;

  if (typeof event.value === 'boolean') {
    $target.checked = event.value;
  } else {
    $target.value = event.value;
  }
}
