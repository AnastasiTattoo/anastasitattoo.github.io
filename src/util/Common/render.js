import App from '/src/components/App/App.js';

import { createRootComponent } from '/src/util/Common/createComponent.js';

export const pageRender = async () => {
    window.isContentRendered = false;

    createRootComponent(App);
};

export const pageRerender = async () => {
    pageRender();
};