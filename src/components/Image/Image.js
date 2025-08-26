import Component from "/src/components/Component/Component.js";

export class Image extends Component {
  async render() {
    const {
      src = '',
      alt = '',
      mix: {
        id = '',
        className = '',
      } = {},
    } = this.props;

    return `
      <img
        ${id ? `id="${id}"` : ''}
        ${className ? `class="${className}"` : ''}
        ${src ? `src="${src}"` : ''}
        ${alt ? `alt="${alt}"` : ''}
      />
    `;
  }
};

export default Image;
