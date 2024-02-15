import Component from '../../util/Component/Component.js';
import Image from '../Image/Image.js';
import Button from '../Button/Button.js';

import { isFileExists } from '../../util/Common/isFileExists.js';
import { addClass, removeClass } from '../../util/Common/htmlClasses.js';
import {
    FLIPPED_CARD_CLASS,
    FLIP_OTHER_SIDE_DELAY,
    HIDDEN_BUTTON_CLASS } from './CardSide.config.js';
import { createComponent } from '../../util/Common/createComponent.js';
import { getUrlParams } from '../../util/Common/getUrlParams.js';

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
            otherCard: document.getElementById(otherSideId),
            otherCardButton: document.getElementById(`${ otherSideId }Button`)
        });
    }

    rotateCard() {
        const {
            currentCard,
            currentCardButton
        } = this.state;

        addClass(currentCard, FLIPPED_CARD_CLASS);
        addClass(currentCardButton, HIDDEN_BUTTON_CLASS);

        this.rotateOtherCard();
    }

    rotateOtherCard() {
        setTimeout(() => {
            const {
                otherCard,
                otherCardButton
            } = this.state;

            removeClass(otherCard, FLIPPED_CARD_CLASS);
            removeClass(otherCardButton, HIDDEN_BUTTON_CLASS);
        }, FLIP_OTHER_SIDE_DELAY);
    }

    async getCardPathFromSearch() {
        const {
            id = '',
            imageName = ''
        } = this.props;
    
        const cardCode = getUrlParams('code=');
        const imageSrc = `/cards/${ cardCode }/${ imageName }`;
    
        const cardCodeExists = await isFileExists(imageSrc);
        if (!cardCodeExists){
            return;
        }
    
        document.getElementById(id).setAttribute('src', imageSrc);
    }

    async renderContent() {
        const {
            id = '',
            imageName = '',
            isFrontCard = true
        } = this.props;

        return `
            <div class="CardSideWrapper">
                ${ await createComponent(Image, {
                    name: id,
                    mix: {
                        id,
                        className: `Card ${ isFrontCard ? '' : FLIPPED_CARD_CLASS }`
                    },
                    src: `/cards/default/${ imageName }`
                }) }
                ${ await createComponent(Button, {
                    mix: {
                        id: `${ id }Button`,
                        className: `CardButton ${ isFrontCard ? '' : HIDDEN_BUTTON_CLASS }`
                    }
                }) }
            </div>
        `;
    }

    afterRender() {
        const {
            isFrontCard = true
        } = this.props;

        this.initCardSide();
        this.setButtonEvent();
        this.getCardPathFromSearch();

        if (!isFrontCard) {
            this.rotateCard();
        }
    }
};

export default CardSide;
