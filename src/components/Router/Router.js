import Component from '/src/components/Component/Component';
import Home from '/src/routes/Home/Home';
import Card from '/src/routes/Card/Card';
import Admin from '/src/routes/Admin/Admin';
import renderComponent from '/src/utils/renderComponent';
import getCurrentPage from '/src/utils/getPage';
import redirect from '/src/utils/redirect';
import checkIsAdmin from '/src/utils/checkIsAdmin';
import { PAGE } from '/src/utils/constants';

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
