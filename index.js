import { createRootComponent } from './src/util/Common/createComponent';
import App from '/src/components/App/App.js';

window.isContentRendered = false;

createRootComponent(App);
