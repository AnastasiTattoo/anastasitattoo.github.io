import Component from '../../util/Component/Component.js';
import Image from '../Image/Image.js';
import Button from '../Button/Button.js';

import { addClass, removeClass } from '../../util/Common/htmlClasses.js';
import {
    FLIPPED_CARD_CLASS,
    FLIP_OTHER_SIDE_DELAY,
    HIDDEN_BUTTON_CLASS
} from './CardSide.config.js';
import { createComponent } from '../../util/Common/createComponent.js';
import { getUrlParams } from '../../util/Common/Url.js';
import Cards from '../../config/cards.js';
import { isIOS } from '../../util/Common/isIOS.js';

export class CardSide extends Component {
    setButtonEvent() {
        const {
            currentCardButton
        } = this.state;

        currentCardButton.addEventListener("click", this.rotateCard.bind(this));
    }

    initCardSide() {
        const {
            id = '',
            otherSideId = ''
        } = this.props;

        this.setState({
            currentCard: document.getElementById(id),
            currentCardButton: document.getElementById(`${ id }Button`),
            currentCardContent: document.getElementById(`${ id }Content`),
            otherCard: document.getElementById(otherSideId),
            otherCardButton: document.getElementById(`${ otherSideId }Button`),
            otherCardContent: document.getElementById(`${ otherSideId }Content`),
        });
    }

    rotateCard() {
        const {
            currentCard,
            currentCardButton,
            currentCardContent
        } = this.state;

        addClass(currentCard, FLIPPED_CARD_CLASS);
        addClass(currentCardButton, HIDDEN_BUTTON_CLASS);

        if (currentCardContent) {
            addClass(currentCardContent, HIDDEN_BUTTON_CLASS);
        }

        this.rotateOtherCard();
    }

    rotateOtherCard() {
        setTimeout(() => {
            const {
                otherCard,
                otherCardButton,
                otherCardContent
            } = this.state;

            removeClass(otherCard, FLIPPED_CARD_CLASS);
            removeClass(otherCardButton, HIDDEN_BUTTON_CLASS);

            if (otherCardContent) {
                removeClass(otherCardContent, HIDDEN_BUTTON_CLASS);
            }
        }, FLIP_OTHER_SIDE_DELAY);
    }

    getCardPathFromSearch() {
        const cardCode = getUrlParams('code=');

        if (cardCode && Cards[cardCode]) {
            return { cardCode, ...Cards[cardCode] };
        }

        return {};
    }

    async renderContent() {
        const {
            id = '',
            imageName = '',
            isFrontCard = true
        } = this.props;
        const { cardCode, amount } = this.getCardPathFromSearch();

        const iosClass = isIOS() ? 'iOS' : '';

        return `
            <div class="CardSideWrapper">
                ${ await createComponent(Image, {
                    name: id,
                    mix: {
                        id,
                        className: `Card ${ isFrontCard ? '' : FLIPPED_CARD_CLASS }`
                    },
                    src: `/assets/card/${ imageName }`,
                    hasStyles: false
                }) }
                ${ await createComponent(Button, {
                    mix: {
                        id: `${ id }Button`,
                        className: `CardButton ${ isFrontCard ? '' : HIDDEN_BUTTON_CLASS }`
                    },
                    hasStyles: false
                }) }
                ${!isFrontCard && amount 
                    ? `
                        <div id="${id}Content" class="CardContent ${HIDDEN_BUTTON_CLASS}">
                            <div class="CardContentPrice ${iosClass}">€${amount}</div>
                            <div class="CardContentCode ${iosClass}">${cardCode}</div>
                        </div>
                    `
                    : ''
                }
            </div>
        `;
    }

    afterRender() {
        const {
            isFrontCard = true
        } = this.props;

        this.initCardSide();
        this.setButtonEvent();

        if (!isFrontCard) {
            this.rotateCard();
        }
    }
};

export default CardSide;
