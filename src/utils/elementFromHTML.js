const getElementTypeFromHTML = (html) => {
  const firstArrowIndex = html.indexOf('<');
  const secondArrowIndex = html.indexOf('>', firstArrowIndex);
  const nextSpaceIndex = html.indexOf(' ', firstArrowIndex);

  if (secondArrowIndex === -1 || (secondArrowIndex === -1 && nextSpaceIndex === -1)) return '';

  const secondIndex = secondArrowIndex > nextSpaceIndex ? nextSpaceIndex : secondArrowIndex;
  return html.slice(firstArrowIndex + 1, secondIndex);
};

export const elementFromHTML = (html) => {
  const elType = getElementTypeFromHTML(html);
  if (!elType) {
    console.warn(`/src/utils/elementFromHTML > elementFromHTML [LINE 15]: Syntax error in "${html}"`);
    return;
  }

  const el = document.createElement(elType);
  el.classList.add('wrapper');
  el.innerHTML = html;
  return el.children.length > 1 ? el : el.children[0];
};

export default elementFromHTML;
