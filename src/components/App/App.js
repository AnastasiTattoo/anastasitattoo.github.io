import Component from '../../util/Component/Component.js';
import Router from '../Router/Router.js';

import { createComponent } from '../../util/Common/createComponent.js';

export class App extends Component {
    async renderContent() {
        return await createComponent(Router, {
            hasStyles: false
        });
    }
};

export default App;
