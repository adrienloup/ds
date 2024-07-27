export function getPosition<T extends HTMLElement>(node: T): { top: number } {
  const root = document as unknown as Element;
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
