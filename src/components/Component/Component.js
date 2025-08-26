import { COMPONENTS_PATH } from "/src/utils/constants";

export class Component {
  constructor(props) {
    this.props = props;

    if (!props.noStyles) {
      this.#loadStyles();
    }
  }

  getStylePath() {
    return `${COMPONENTS_PATH}/${this.constructor.name}/style.css`;
  }

  async #loadStyles() {
    const stylePath = this.getStylePath();
    if (!stylePath) return;

    const existingStyle = document.head.querySelector(`link[href="${stylePath}"]`);
    if (existingStyle) return;

    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', stylePath);
    document.head.appendChild(link);
  }

  async render() { }

  async afterRender() { }
};

export default Component;
