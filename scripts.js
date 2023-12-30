function setButtonsEvents() {
    document.getElementById("FrontCardButton").addEventListener("click", rotateFrontCard);
    document.getElementById("BackCardButton").addEventListener("click", rotateBackCard);
}

function rotateFrontCard () {
    const frontCard = document.getElementById("FrontCard");
    addClass(frontCard, "Flipped");

    const frontCardButton = document.getElementById("FrontCardButton");
    addClass(frontCardButton, "Hidden");

    setTimeout(() => {
        const backCard = document.getElementById("BackCard");
        removeClass(backCard, "Flipped");

        const backCardButton = document.getElementById("BackCardButton");
        removeClass(backCardButton, "Hidden");
    }, 250);
};

function rotateBackCard () {
    const backCard = document.getElementById("BackCard");
    addClass(backCard, "Flipped");

    const backCardButton = document.getElementById("BackCardButton");
    addClass(backCardButton, "Hidden");

    setTimeout(() => {
        const frontCard = document.getElementById("FrontCard");
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

async function getCardPathFromSearch() {
    const { location: { search = '' } = {} } = window;

    if (!search) {
        return;
    }

    const cardCodeSearchCode = 'code=';
    const cardCode = search.slice(search.indexOf(cardCodeSearchCode) + cardCodeSearchCode.length);

    const cardCodeExists = await isFileExists(`./cards/${cardCode}/front.png`);
    if (!cardCodeExists){
        return;
    }

    document.getElementById("FrontCard").setAttribute('src', `./cards/${cardCode}/front.png`);
    document.getElementById("BackCard").setAttribute('src', `./cards/${cardCode}/back.png`);
}

async function isFileExists(path) {
    return await fetch(path, { method: "HEAD" })
        .then(response => {
            if (response.ok) {
                return true;
            } else {
                return false;
            } 
        })
        .catch(error => {
            return false;
        });
}