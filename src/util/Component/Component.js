import { addStylesFile } from '../Common/addStylesFile.js';
import { COMPONENTS_PATH, WAITING_ATTEMPT_DELAY } from '../Common/constants.js';
import { waitForRender } from '../Common/waitForRender.js';

export class Component {
    name = '';
    props = null;
    state = {};

    #isStylesLinked = false;

    constructor(props = {}) {
        this.name = this.constructor.name;
        this.props = props;

        this.#linkStyles();

        waitForRender().then(() => {
            this.afterRender();
        });
    }

    #linkStyles() {
        const {
            hasStyles = true
        } = this.props;

        if (!hasStyles) {
            this.#isStylesLinked = true;
            return;
        }

        const stylePath = `${ COMPONENTS_PATH }${ this.name }/${ this.name }.css`;
        addStylesFile(stylePath).then(() => {
            this.#isStylesLinked = true;
        });
    }

    #waitForStyles() {
        return new Promise((resolve) => {
            const waitForStyles = () => {
                if (this.#isStylesLinked) {
                    resolve(null);
                    return;
                }

                setTimeout(() => waitForStyles(), WAITING_ATTEMPT_DELAY);
            }

            waitForStyles();
        });
    }

    async render() {
        const content = await this.#waitForStyles()
            .then(() => {
                return this.renderContent();
            });

        return content;
    }

    setState(newState) {
        this.state = {
            ...this.state,
            ...newState
        }
    }

    // Can be overriden
    async renderContent() {
        return `
            <div class="Component"></div>
        `;
    }

    // Can be overriden
    afterRender() {}
};

export default Component;
