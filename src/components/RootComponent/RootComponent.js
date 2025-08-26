import Router from '/src/components/Router/Router.js';
import Component from '/src/components/Component/Component.js';
import Nav from '/src/components/Nav/Nav.js';
import renderComponent from '/src/utils/renderComponent.js';

export class RootComponent extends Component {
  async render() {
    return `
      <div id="AnastasiTattoo">
        ${await renderComponent(Nav)}
        <main>
          ${await renderComponent(Router)}
        </main>
      </div>
    `;
  }
};

export default RootComponent;
