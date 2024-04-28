import Component from '../../util/Component/Component.js';

export class Link extends Component {
    async renderContent() {
        const {
            text = '',
            href = '',
            className = '',
            inNewTab = false
        } = this.props;

        const newTabSetting = inNewTab ? 'target="_blank"' : '';

        return `
            <a class="${ className }" href="${ href }" ${ newTabSetting }>${ text }</a>
        `;
    }
};

export default Link;
