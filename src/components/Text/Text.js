import Component from '../../util/Component/Component.js';

export class Text extends Component {
    async renderContent() {
        const {
            text = '',
            className = '',
            isHeader = false,
            headerType = ''
        } = this.props;

        if (isHeader) {
            return `
                <${ headerType } class="${ className }">${ text }</${ headerType }>
            `;
        }

        return `
            <p class="${ className }">${ text }</p>
        `;
    }
};

export default Text;
