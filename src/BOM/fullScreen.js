export function fullScreen(el) {
    let rfs =
        el.requestFullScreen ||
        el.webkitRequestFullScreen ||
        el.mozRequestFullScreen ||
        el.msRequestFullscreen;

    if(rfs) {
        rfs.call(el)
    }
}

export function exitFullScreen() {
    let el = document;
    let rfs =
        el.cancelFullScreen ||
        el.webkitCancelFullScreen ||
        el.mozCancelFullScreen ||
        el.exitFullScreen;
    if (typeof rfs != "undefined" && rfs) {
        rfs.call(el);
    }
}

export function isFullScreen() {
    let isFull =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement;

    return !!isFull;
}