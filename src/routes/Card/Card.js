import Link from '/src/components/Link/Link';
import Image from '/src/components/Image/Image';
import RouteComponent from '/src/routes/RouteComponent/RouteComponent';
import renderComponent from '/src/utils/renderComponent';
import { CARD_CODE_SAVE_NAME } from '/src/utils/constants';

export class Card extends RouteComponent {
  async getCardData() {
    const savedCards = await LESCH.DataBaseController.getCards();
    if (!savedCards) return null;

    const { code: cardCodeFromUrl = null } = LESCH.History.state || {};
    const cardFromSessionStorage = window.sessionStorage.getItem(CARD_CODE_SAVE_NAME);

    let cardCode = cardCodeFromUrl || cardFromSessionStorage;
    if (!cardCode || !savedCards[cardCode]) return null;

    window.sessionStorage.setItem(CARD_CODE_SAVE_NAME, cardCode);

    return { code: cardCode, ...savedCards[cardCode] };
  }

  async renderEmptyPage() {
    return `
      <div id="CardPage">
        <p class="empty-title">There is no Gift Card for you :(</p>
        <div class="empty-subtitle">
          <p class="empty-subtitle-front">Order one by contacting</p>
          ${await renderComponent(Link, {
            text: 'anastasi.tattoo',
            mix: { className: 'empty-subtitle-link' },
            href: 'https://www.instagram.com/anastasi.tattoo',
          })}
        </div>
      </div>
    `;
  }

  async render() {
    const cardData = await this.getCardData();
    if (!cardData) {
      return await this.renderEmptyPage();
    }

    const {
      code: cardCode,
      price: cardPrice,
    } = cardData;

    return `
      <div id="CardPage">
        <div class="card" data-side="front">
          ${await renderComponent(Image, { src: '/assets/images/back.png', alt: 'BackCardSide', mix: { className: 'card-side card-side-back' } })}
          ${await renderComponent(Image, { src: '/assets/images/front.png', alt: 'FrontCardSide', mix: { className: 'card-side card-side-front' } })}
          <div class="card-side card-side-back card-data">
            <div class="card-data-price">€${cardPrice}</div>
            <div class="card-data-code">${cardCode}</div>
          </div>
        </div>
        <p class="card-subtext">Click on card to flip it</p>
      </div>
    `;
  }

  async afterRender() {
    const card = document.querySelector('#CardPage .card');
    card?.addEventListener('click', () => {
      const nextSide = card.getAttribute('data-side') === 'front' ? 'back' : 'front';
      card.setAttribute('data-side', nextSide);
    });
  }
};

export default Card;
