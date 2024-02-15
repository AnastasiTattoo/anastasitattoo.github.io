export const getUrlParams = (param) => {
    const { location: { search = '' } = {} } = window;

    if (!search) {
        return null;
    }

    const paramValue = search.slice(search.indexOf(param) + param.length);

    return paramValue;
};
