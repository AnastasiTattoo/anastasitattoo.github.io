import RouteComponent from "../../util/Component/RouteComponent.js";
import Card from '../../components/Card/Card.js';
import Text from '../../components/Text/Text.js';

import { createComponent } from '../../util/Common/createComponent.js';

export class CardPage extends RouteComponent {
    async renderContent() {
        return `
            <div class="ContentWrapper">
                ${ await createComponent(Card, {
                    hasStyles: false
                }) }
                ${ await createComponent(Text, {
                    text: 'Click on card to flip it',
                    className: 'FlipText'
                }) }
            </div>
        `;
    }
};

export default CardPage;
