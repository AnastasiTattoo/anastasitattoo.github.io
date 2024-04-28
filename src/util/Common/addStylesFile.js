export const addStylesFile = async (stylesFile) => {
    const links = document.getElementsByTagName('link');

    for (const link of links) {
        if (link.getAttribute('href') === stylesFile) {
            return;
        }
    }

    const link = document.createElement('link');
    link.href = stylesFile;
    link.rel = 'stylesheet';

    document.head.appendChild(link);
};
