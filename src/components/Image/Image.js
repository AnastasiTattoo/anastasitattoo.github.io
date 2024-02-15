import Component from "../../util/Component/Component.js";

export class Image extends Component {
    async renderContent() {
        const {
            name = '',
            mix: {
                id = '',
                className = '',
            } = {},
            src = ''
        } = this.props;

        return `
            <img
              id="${ id }"
              class="${ className }"
              src="${ src }"
              alt="${ name }"
            />
        `;
    }
};

export default Image;
