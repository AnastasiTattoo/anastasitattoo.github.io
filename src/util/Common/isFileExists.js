export const isFileExists = async (path) => {
    return await fetch(path, { method: "HEAD" })
        .then((response) => {
            if (response.ok) {
                return true;
            } else {
                throw new Error();
            } 
        })
        .catch(() => {
            return false;
        });
};
