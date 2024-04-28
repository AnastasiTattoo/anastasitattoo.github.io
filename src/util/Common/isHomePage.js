export const HOMEPAGE_NAME = 'home';

export const isHomePage = () => {
    const { state } = history;
    let { page = '' } = state || {};

    if (!page) {
        const { search = '' } = location;

        if (!search) {
            page = HOMEPAGE_NAME;
        }
    }

    return page !== HOMEPAGE_NAME;
};
