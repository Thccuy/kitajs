export function siftUp(heap,node,index,comparator = (a,b) => a > b) {
    let i = index;

    while (i > 0) {
        const parentIndex = i >>> 1;
        const parent = heap[parentIndex];
        if(comparator(parent,heap[i])) {
            heap[parentIndex] = node;
            heap[i] = parent;
            i= parentIndex;
        }else {
            return;
        }
    }
}

export function siftDown(heap,node,index,comparator = (a,b) => a > b) {

}