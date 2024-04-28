import RouteComponent from "../../util/Component/RouteComponent.js";
import Link from '../../components/Link/Link.js';

import { createComponent } from '../../util/Common/createComponent.js';

export class HomePage extends RouteComponent {
    async renderContent() {
        return `
            <div class="HomePage ContentWrapper">
                ${ await createComponent(Link, {
                    text: 'Anastasi.Tattoo',
                    href: 'https://www.instagram.com/anastasi.tatto',
                    className: 'Title',
                    inNewTab: true
                }) }
            </div>
        `;
    }
};

export default HomePage;
