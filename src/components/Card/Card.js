import Component from '../../util/Component/Component.js';
import CardSide from '../CardSide/CardSide.js';

import { createComponent } from '../../util/Common/createComponent.js';

export class Card extends Component {
    async renderContent() {
        return `
            ${ await createComponent(CardSide, {
                id: 'FrontCard',
                otherSideId: 'BackCard',
                imageName: 'front.png',
                isFrontCard: true
            }) }
            ${ await createComponent(CardSide, {
                id: 'BackCard',
                otherSideId: 'FrontCard',
                imageName: 'back.png',
                isFrontCard: false
            }) }
        `;
    }
};

export default Card;
