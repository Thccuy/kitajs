export default function debounce(fn,timeout = 0) {
    let timer = null;

    return (...args) => {
        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(fn.apply(this,args),timeout);
    }
}