import Loader from '../../components/Loader/Loader.js';

import { LOADER_HIDE_DELAY, WAITING_ATTEMPT_DELAY } from './constants.js';

export const createComponent = async (component, props) => {
    const componentObj = new component(props);
    const componentRender = await componentObj.render();

    return componentRender;
};

export const createRootComponent = async (component) => {
    const root = document.getElementById('root');
    root.innerHTML = await createComponent(Loader);
    
    let content = '';
    let contentReady = false;

    new Promise((resolve) => {
        const waitForReady = () => {
            if (content) {
                setTimeout(() => {
                    root.innerHTML = content;
        
                    window.isContentRendered = true;
                }, LOADER_HIDE_DELAY);

                resolve(null);
                return;
            }

            setTimeout(() => waitForReady(), WAITING_ATTEMPT_DELAY);
        }

        waitForReady();
    });

    content = await createComponent(component);

    contentReady = true;
}
