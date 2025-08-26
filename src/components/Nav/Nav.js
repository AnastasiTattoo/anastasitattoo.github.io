import Component from '/src/components/Component/Component.js';
import Button from '/src/components/Button/Button.js';
import renderComponent from '/src/utils/renderComponent.js';
import redirect from '/src/utils/redirect.js';
import checkIsAdmin from '/src/utils/checkIsAdmin.js';

export class Nav extends Component {
  async render() {
    const isAdmin = await checkIsAdmin();

    return `
      <nav>
        <div class="nav-links">
          ${await renderComponent(Button, { text: 'Home', mix: { className: 'nav-button home-nav-button' }, onClick: () => redirect('') })}
          ${await renderComponent(Button, { text: 'Card', mix: { className: 'nav-button card-nav-button' }, onClick: () => redirect('page=card') })}
          ${isAdmin
            ? await renderComponent(Button, { text: 'Admin', mix: { className: 'nav-button admin-nav-button' }, onClick: () => redirect('page=admin') })
            : ''
          }
        </div>
        <div class="nav-underline"></div>
      </nav>
    `;
  }
};

export default Nav;
