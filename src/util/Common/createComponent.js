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
    
    root.innerHTML = await createComponent(component);
    window.isContentRendered = true;
};
