import { createRootComponent } from '/src/util/Common/createComponent.js';
import App from '/src/components/App/App.js';

window.isContentRendered = false;

createRootComponent(App);
