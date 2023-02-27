import isArrayLike from "../utils/isArrayLike";

export default function arrayLike2Array(arrLike) {
    const res = [];

    if(Array.isArray(arrLike)) {
        return arrLike;
    }

    if(isArrayLike(arrLike)) {
        for (let i = 0; i < arrLike.length; i++) {
            res[i] = arrLike[i];
        }
    }else {
        throw new Error(`bad parameter type: ${typeof arrLike}`)
    }

    return res;
}