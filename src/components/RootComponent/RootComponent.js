import Router from '/src/components/Router/Router';
import Component from '/src/components/Component/Component';
import Nav from '/src/components/Nav/Nav';
import renderComponent from '/src/utils/renderComponent';

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
