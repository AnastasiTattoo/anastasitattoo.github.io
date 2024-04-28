export const getUrlParams = (param) => {
    const { location: { search = '' } = {} } = window;

    if (!search) {
        return null;
    }

    const searchArray = search.split('&');

    for (const searchParam in searchArray) {
        if (searchArray[searchParam].indexOf(param) !== -1) {
            const paramValueIndex = searchArray[searchParam].indexOf(param);
            const paramValue = searchArray[searchParam].slice(paramValueIndex + param.length);

            return paramValue;
        }
    }

    return '';
};
