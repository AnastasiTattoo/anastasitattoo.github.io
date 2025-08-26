import getParamsFromPath from "./getParamsFromPath";

export function redirect(path, params = {}) {
  const pathParams = getParamsFromPath(path);
  const newPath = path ? `?${path}` : '/';
  LESCH.History.pushState(newPath, { ...pathParams, ...params });
};

export default redirect;
