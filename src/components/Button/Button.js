import Component from "../../util/Component/Component.js";

export class Button extends Component {
    async renderContent() {
        const {
            text = '',
            mix: {
                id = '',
                className = '',
            } = {},
            onClick = null
        } = this.props;

        const eventId = text.replace(' ', '');

        if (onClick) {
            registerClickEvent(eventId, onClick);
        }

        const onClickEvent = onClick ? `callClickEvent('${eventId}')` : '';

        return `
            <button
              id="${id}"
              class="${className}"
              onclick="${onClickEvent}"
            >
                ${text}
            </button>
        `;
    }
};

export default Button;
