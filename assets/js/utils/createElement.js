function createElement(tagName, options, ...children) {
  const { classNames = [], attributes = {},addEventListener={}} = options;
  const elem = document.createElement(tagName);

  for (let i = 0; i < classNames.length; i++) {
    elem.classList.add(classNames[i]);
  }
  
  elem.addEventListener(addEventListener.event,addEventListener.callback);
  /*
    attributes = {
      src: 'http:///cdgvfdv',
      alt: 'test pic'
    }

  */

  for (const attributePair of Object.entries(attributes)) {
    const [attributeKey, attributeValue] = attributePair;
    elem.setAttribute(attributeKey, attributeValue);
  }

  elem.append(...children);

  return elem;
}
