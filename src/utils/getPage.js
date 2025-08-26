export const getCurrentPage = () => {
  const { page } = LESCH.History.state || {};
  return page || 'home';
};

export default getCurrentPage;
