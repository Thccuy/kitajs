export default function rangesMerge(ranges) {
    const result = [];
    let last;

    ranges.forEach(function (r) {
        if (!last || r[0] > last[1]) {
            result.push(last = [...r]);
        } else if (r[1] > last[1]) {
            last[1] = r[1];
        }

    });

    return result;
}