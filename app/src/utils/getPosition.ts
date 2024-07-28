export function getPosition<
  T extends HTMLElement,
  U extends Document | Element | undefined,
>(node: T, scope: U): { top: number } {
  const root = scope || (document as U | unknown);
  let offsetTop = node.offsetTop;

  while (
    node &&
    node.offsetParent &&
    node.offsetParent !== root &&
    node !== root &&
    root !== node.offsetParent
  ) {
    offsetTop += (node.offsetParent as T).offsetTop;
    node = node.offsetParent as T;
  }

  return {
    top: offsetTop,
  };
}
