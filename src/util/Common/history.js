import { pageRerender } from './render.js';

export const setHistoryState = (data, url) => {
    history.replaceState(data, null, url);

    pageRerender();
};
