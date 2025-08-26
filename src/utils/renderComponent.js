export const renderComponent = async (Component, props = {}) => {
  return await window.LESCH.ComponentRenderer.renderComponent(Component, props);
}

export default renderComponent;
