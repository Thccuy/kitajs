export default function mouseClickType(e) {
    const types = ['left','middle','right']

    if(e.which) {
        return types[e.which-1];
    }else {
        return types[e.button];
    }
}