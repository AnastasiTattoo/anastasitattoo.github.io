import Component from '/src/components/Component/Component.js';
import Home from '/src/routes/Home/Home.js';
import Card from '/src/routes/Card/Card.js';
import Admin from '/src/routes/Admin/Admin.js';
import renderComponent from '/src/utils/renderComponent.js';
import getCurrentPage from '/src/utils/getPage.js';
import redirect from '/src/utils/redirect.js';
import checkIsAdmin from '/src/utils/checkIsAdmin.js';
import { PAGE } from '/src/utils/constants.js';

export class Router extends Component {
  constructor(props = {}) {
    super({ ...props, noStyles: true })
  }

  async render() {
    const page = getCurrentPage();
    switch (page) {
      default:
      case PAGE.HOME:
        return await renderComponent(Home);
      case PAGE.CARD:
        return await renderComponent(Card);
      case PAGE.ADMIN:
        const isAdmin = await checkIsAdmin();
        return (isAdmin ? await renderComponent(Admin) : redirect());
    }
  }
};

export default Router;
