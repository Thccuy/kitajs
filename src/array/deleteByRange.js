import rangesSort from "./rangesSort";

export default function deleteByRange(ranges,deletingRange = [0,0]) {
    const clone = rangesSort(ranges.map(range => [...range]));
    const length = clone.length;
    const [delStart,delEnd] = deletingRange;
    let startIndex,endIndex;

    for (let i = 0; i < length; i++) {
        const curRange = clone[i];
        const [curStart,curEnd] = curRange;

        if(startIndex === undefined && curStart <= delStart) {
            startIndex = i;
            if(curStart !== delStart) {

                startIndex += 1;
                curRange[1] = delStart;
            }
        }

        if(endIndex === undefined && curEnd >= delEnd) {
            endIndex = i;

            if(curEnd !== delEnd) {
                curRange[0] = delEnd;
            }
        }

        if(i === length-1) {
            if(endIndex === undefined) {
                endIndex = length;
            }
            if(startIndex === undefined) {
                startIndex = 0;
            }
        }
    }
    clone.splice(startIndex,endIndex-startIndex);

    return clone;
}

