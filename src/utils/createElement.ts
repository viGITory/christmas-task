const createElement = (
  tag: string,
  attributes?: { [key: string]: string },
  children?: (HTMLElement | string)[]
): HTMLElement => {
  const element = document.createElement(tag);

  if (attributes) {
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  }

  if (children) {
    children.forEach((child) => element.append(child));
  }

  return element;
};

export default createElement;
