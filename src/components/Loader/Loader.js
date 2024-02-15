import Component from '../../util/Component/Component.js';

export class Loader extends Component {
    async renderContent() {
        return `
            <div class="Loader">LOADING</div>
        `;
    }
};

export default Loader;
