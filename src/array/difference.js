export default function difference(arr,values = [],comparator = (a,b) => a === b) {
    if(!values.length) {
        return arr;
    }

    return arr.filter(item => !values.some(target => comparator(item,target)))
}