import getParamsFromPath from "/src/utils/getParamsFromPath.js";

export function redirect(path, params = {}) {
  const pathParams = getParamsFromPath(path);
  const newPath = path ? `?${path}` : '/';
  LESCH.History.pushState(newPath, { ...pathParams, ...params });
};

export default redirect;
