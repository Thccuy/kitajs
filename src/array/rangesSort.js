export default function rangesSort(ranges) {
    const clone = ranges.map(range => [...range]);

    clone.sort((a,b) => a[0] - b[0])

    return clone;
}