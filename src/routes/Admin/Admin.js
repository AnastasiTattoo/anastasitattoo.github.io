import Button from '/src/components/Button/Button';
import RouteComponent from '/src/routes/RouteComponent/RouteComponent';
import renderComponent from '/src/utils/renderComponent';
import elementFromHTML from '/src/utils/elementFromHTML';
import { ADMIN_SAVE_NAME } from '/src/utils/constants';

export class Admin extends RouteComponent {
  saveAdminSession() {
    const { pwd = '' } = LESCH.History.state || {};
    const savedPassword = window.sessionStorage.getItem(ADMIN_SAVE_NAME);

    window.sessionStorage.setItem(ADMIN_SAVE_NAME, savedPassword || pwd);
  }

  async updateAdminPage() {
    const parent = document.getElementById('AdminPage');
    parent.replaceWith(elementFromHTML(await this.render()));
  }

  async updateCard(index) {
    const currentRow = document.querySelectorAll('#AdminPage .card-row')[index + 1];
    const currentRowCode = currentRow.getElementsByClassName('card-row-code')[0];
    const currentRowPrice = currentRow.getElementsByClassName('card-row-price')[0];

    if (!currentRowCode.value || isNaN(+currentRowCode.value)) return;
    if (!currentRowPrice.value || isNaN(+currentRowPrice.value)) return;

    const newCard = {};
    newCard[currentRowCode.value] = { price: currentRowPrice.value };

    const newCards = { ...this.cards, ...newCard };
    await LESCH.DataBaseController.saveCards(newCards);
    this.updateAdminPage();
  }

  async removeCard(index) {
    const currentRow = document.querySelectorAll('#AdminPage .card-row')[index + 1];
    const currentRowCode = currentRow.getElementsByClassName('card-row-code')[0];

    if (!currentRowCode.value || isNaN(+currentRowCode.value)) return;

    const newCards = this.cards;
    delete newCards[currentRowCode.value];

    await LESCH.DataBaseController.saveCards(newCards);
    this.updateAdminPage();
  }

  async renderCards() {
    this.cards = await LESCH.DataBaseController.getCards();
    const codes = Object.keys(this.cards);

    for (let i = 0; i < codes.length; i++) {
      const code = codes[i];
      const { price } = this.cards[code];

      codes[i] = `
        <div class="card-row">
          <input name="card-code-${code}" class="card-row-code" value="${code}" type="number" />
          <input name="card-price-${code}" class="card-row-price" value="${price}" type="number" />
          ${await renderComponent(Button, {
            mix: { className: 'update-row' },
            text: 'Update',
            onClick: () => this.updateCard(i),
          })}
          ${await renderComponent(Button, {
            mix: { className: 'remove-row' },
            text: 'Remove',
            onClick: () => this.removeCard(i),
          })}
        </div>
      `;
    }

    return codes.join('\n');
  }

  async addNewCard() {
    const lastRow = document.querySelector('#AdminPage .card-row:last-child');
    const lastRowCode = lastRow.getElementsByClassName('card-row-code')[0];
    const lastRowPrice = lastRow.getElementsByClassName('card-row-price')[0];

    if (!lastRowCode.value || isNaN(+lastRowCode.value)) return;
    if (!lastRowPrice.value || isNaN(+lastRowPrice.value)) return;

    const newCard = {};
    newCard[lastRowCode.value] = { price: lastRowPrice.value };

    const newCards = { ...this.cards, ...newCard };
    await LESCH.DataBaseController.saveCards(newCards);
    this.updateAdminPage();
  }

  async renderNewCardFields() {
    return `
      <div class="card-row">
        <input name="card-code-new" class="card-row-code" value="" type="number" />
        <input name="card-price-new" class="card-row-price" value="" type="number" />
        ${await renderComponent(Button, {
          mix: { className: 'add-new-row' },
          text: 'Add',
          onClick: this.addNewCard.bind(this),
        })}
      </div>
    `;
  }

  async render() {
    this.saveAdminSession();

    return `
      <div id="AdminPage">
        <div class="cards-table">
          <div class="card-row">
            <div class="card-row-code">Code</div>
            <div class="card-row-price">Price</div>
          </div>
          ${await this.renderCards()}
          ${await this.renderNewCardFields()}
        </div>
      </div>
    `;
  }
};

export default Admin;
