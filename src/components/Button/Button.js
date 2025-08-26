import Component from "/src/components/Component/Component.js";

export class Button extends Component {
  async render() {
    const {
      text = '',
      mix: {
        id = '',
        className = '',
      } = {},
      onClick = null
    } = this.props;

    if (onClick) {
      const eventName = LESCH.EventController.getRandomEventName(text);
      LESCH.EventController.registerEvent(eventName, onClick);

      return `
        <button
          type="button"
          ${id ? `id="${id}"` : ''}
          ${className ? `class="${className}"` : ''}
          onclick="LESCH.EventController.callEvent('${eventName}')"
        >
          ${text}
        </button>
      `;
    }

    return `
      <button
        type="button"
        ${id ? `id="${id}"` : ''}
        ${className ? `class="${className}"` : ''}
      >
        ${text}
      </button>
    `;
  }
};

export default Button;
