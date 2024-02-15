import { WAITING_ATTEMPT_DELAY } from "./constants";

export const waitForRender = () => new Promise((resolve) => {
    const waitForRender = () => {
        if (window.isContentRendered) {
            resolve(null);
            return;
        }

        setTimeout(() => waitForRender(), WAITING_ATTEMPT_DELAY);
    }

    waitForRender();
});
