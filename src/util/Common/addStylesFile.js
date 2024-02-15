import { isFileExists } from './isFileExists.js';

export const addStylesFile = async (stylesFile) => {
    return new Promise(async (resolve) => {
        const fileExists = await isFileExists(stylesFile);

        if (fileExists) {
            const links = document.getElementsByTagName('link');

            for (const link of links) {
                if (link.getAttribute('href') === stylesFile) {
                    resolve(null);
                    return;
                }
            }

            document.getElementsByTagName('head')[0].innerHTML += `<link rel="stylesheet" href="${ stylesFile }">`;
        }

        resolve(null);
    });
};
