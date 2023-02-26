export default function dfs(root,cb) {
    const stack = [root];

    while(stack.length) {
        const curNode = stack.pop();
        const children = curNode.children;
        cb(curNode);

        if(children) {
            for (const child of children) {
                stack.push(child)
            }
        }
    }

}