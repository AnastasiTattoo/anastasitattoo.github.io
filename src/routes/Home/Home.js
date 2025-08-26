import Link from '/src/components/Link/Link';
import RouteComponent from '/src/routes/RouteComponent/RouteComponent';
import renderComponent from '/src/utils/renderComponent';

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
