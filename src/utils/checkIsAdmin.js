import { ADMIN_SAVE_NAME } from "/src/utils/constants.js";

export const checkIsAdmin = async () => {
  const savedPassword = window.sessionStorage.getItem(ADMIN_SAVE_NAME);
  const correctPassword = await LESCH.DataBaseController.getPassword();
  const { pwd } = LESCH.History.state || {};

  return (savedPassword === correctPassword) || (!!pwd && correctPassword === pwd);
};

export default checkIsAdmin;
