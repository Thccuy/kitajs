function chunk(arr,size=1) {
    const length = arr.length;
    const chunksCount = Math.round(length / size);
    const res = []

    if(length <= 1) {
        return arr;
    }

    for (let i = 0; i < chunksCount; i++) {
        const start = i*size;
        const end = start + size;

        res.push(arr.slice(start,end));
    }

    return res;
}