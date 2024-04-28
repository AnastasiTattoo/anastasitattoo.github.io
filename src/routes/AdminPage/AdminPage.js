import RouteComponent from "../../util/Component/RouteComponent.js";
import Link from '../../components/Link/Link.js';

import { createComponent } from '../../util/Common/createComponent.js';

export class AdminPage extends RouteComponent {
    async renderContent() {
        return `
            <div class="AdminPage ContentWrapper">
            
            </div>
        `;
    }
};

export default AdminPage;
