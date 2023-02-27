import isObject from "../utils/isObject";

function deepClone(obj) {
    const res = Array.isArray(obj) ? []:{};

    if(isObject(obj)) {
        for (const [k,v] of Object.entries(obj)) {
            if(v && isObject(v)) {
                res[k] = deepClone(v);
            }else {
                res[k] = obj[k];
            }
        }
    }

    return res;
}