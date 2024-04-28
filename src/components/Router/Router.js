import Component from "../../util/Component/Component.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";

import { createComponent } from "../../util/Common/createComponent.js";
import { getUrlParams } from "../../util/Common/Url.js";

export class Router extends Component {
    async renderContent() {
        let content = '';

        const pageCode = getUrlParams('page=');
        switch (pageCode) {
            case 'card':
                const { CardPage } = await import("../../routes/CardPage/CardPage.js");

                content += await createComponent(CardPage)
                break;

            case 'admin':
                const { AdminPage } = await import("../../routes/AdminPage/AdminPage.js");

                content += await createComponent(AdminPage);
                break;
        
            default:
                const { HomePage } = await import("../../routes/HomePage/HomePage.js");

                content = await createComponent(HomePage)
        }

        const fullContent = `
            ${ await createComponent(Header) }
            ${ content }
            ${ await createComponent(Footer) }
        `;

        return fullContent;
    }
};

export default Router;
