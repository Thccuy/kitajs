export default function bfs(root,cb = (curNode) => {}) {
    const queue = [root];
    const visited = new Map();

    while (queue.length) {
        const curNode = queue.shift();
        const children = curNode.children;
        cb(curNode);

        if(children) {
            for (const child of children) {
                const isVisited = visited.get(child);

                if(!isVisited) {
                    visited.set(child,true);
                    queue.push(child);
                }
            }
        }

    }
}