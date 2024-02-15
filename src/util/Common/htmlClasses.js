export const addClass = (element, className) => {
    if (!element.classList.contains(className)) {
        element.classList.add(className);
    }
}

export const removeClass = (element, className) => {
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    }
}
