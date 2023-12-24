function rotateFrontCard () {
    const frontCard = document.getElementById("FrontImage");
    addClass(frontCard, "Flipped");

    const frontCardButton = document.getElementById("FrontCardButton");
    addClass(frontCardButton, "Hidden");

    setTimeout(() => {
        const backCard = document.getElementById("BackImage");
        removeClass(backCard, "Flipped");

        const backCardButton = document.getElementById("BackCardButton");
        removeClass(backCardButton, "Hidden");
    }, 250);
};

function rotateBackCard () {
    const backCard = document.getElementById("BackImage");
    addClass(backCard, "Flipped");

    const backCardButton = document.getElementById("BackCardButton");
    addClass(backCardButton, "Hidden");

    setTimeout(() => {
        const frontCard = document.getElementById("FrontImage");
        removeClass(frontCard, "Flipped");

        const frontCardButton = document.getElementById("FrontCardButton");
        removeClass(frontCardButton, "Hidden");
    }, 250);
};

function addClass (element, className) {
    if (!element.classList.contains(className)) {
        element.classList.add(className);
    }
};

function removeClass (element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    }
};
