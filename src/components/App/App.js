import Component from '../../util/Component/Component.js';
import Card from '../Card/Card.js';

import { createComponent } from '../../util/Common/createComponent.js';

export class App extends Component {
    async renderContent() {
        return `
            <div class="ContentWrapper">
                ${ await createComponent(Card) }
                <p class="FlipText">Click on card to flip it</p>
            </div>
        `;
    }
};

export default App;
