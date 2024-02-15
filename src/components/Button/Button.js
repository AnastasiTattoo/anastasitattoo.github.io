import Component from "../../util/Component/Component.js";

export class Button extends Component {
    async renderContent() {
        const {
            mix: {
                id = '',
                className = '',
            } = {},
        } = this.props;

        return `
            <button
              id="${ id }"
              class="${ className }"
            >
            </button>
        `;
    }
};

export default Button;
