import RootComponent from '/src/components/RootComponent/RootComponent';
import elementFromHTML from '/src/utils/elementFromHTML';

export class ComponentRenderer {
  root = null;
  components = [];

  async renderComponent(Component, props = {}) {
    const component = new Component(props);
    this.components.push(component);
    return await component.render();
  }

  runAfterRender() {
    this.components.forEach((component) => {
      component.afterRender();
    });

    this.components = [];
  }

  async renderRoot() {
    LESCH.EventController.reset();

    this.renderComponent(RootComponent)
      .then((newRootHTML) => {
        const oldRoot = this.root || document.getElementById('root');
        this.root = elementFromHTML(newRootHTML);

        oldRoot.replaceWith(this.root);
      })
      .then(() => {
        this.runAfterRender()
      });
  }
};

export default ComponentRenderer;
