import Component from "/src/components/Component/Component.js";

export class Link extends Component {
  async render() {
    const {
      text = '',
      mix: {
        id = '',
        className = '',
      } = {},
      href = ''
    } = this.props;

    return `
      <a
        ${id ? `id="${id}"` : ''}
        ${className ? `class="${className}"` : ''}
        ${href ? `href="${href}"` : ''}
        target="_blank"
      >
        ${text}
      </a>
    `;
  }
};

export default Link;
