import Component from '../../util/Component/Component.js';
import Button from '../Button/Button.js';
import Image from '../Image/Image.js';

import { createComponent } from '../../util/Common/createComponent.js';
import { HOMEPAGE_NAME, isHomePage } from '../../util/Common/isHomePage.js';
import { setHistoryState } from '../../util/Common/history.js';

export class NavBar extends Component {
    async renderHomeButton() {
        const homePageButton = await createComponent(Button, {
            text: 'Home',
            onClick: () => { setHistoryState({ page: HOMEPAGE_NAME }, "/"); }
        });

        const homePageLogo = await createComponent(Image, {
            name: 'HomePageLogo',
            mix: {
                id: '',
                className: 'HomePageLogo',
            },
            src: ''
        });

        return isHomePage() ? homePageButton : homePageLogo;
    }

    async renderContent() {
        return `
            ${await this.renderHomeButton()}
            ${await createComponent(Button, {
                text: 'Card2303',
                onClick: () => { setHistoryState({page: 'card', code: 2303}, "?page=card&code=2303"); }
            })}
        `;
    }
};

export default NavBar;
