import Link from '/src/components/Link/Link.js';
import RouteComponent from '/src/routes/RouteComponent/RouteComponent.js';
import renderComponent from '/src/utils/renderComponent.js';

export class Home extends RouteComponent {
  async render() {
    return `
      <div id="Home">
        ${await renderComponent(Link, {
          text: 'anastasi.tattoo',
          mix: { className: 'author-link' },
          href: 'https://www.instagram.com/anastasi.tattoo',
        })}
      </div>
    `;
  }
};

export default Home;
