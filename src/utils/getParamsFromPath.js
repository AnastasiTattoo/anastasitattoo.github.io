export const getParamsFromPath = (path) => {
  if (!path) return {};

  const pathParams = {};
  const pathStr = path[0] === '?' ? path.slice(1) : path;

  pathStr.split('&')
    .forEach((paramStr) => {
      const [key, value] = paramStr.split('=');
      pathParams[key] = value;
    });

  return pathParams;
}

export default getParamsFromPath;
