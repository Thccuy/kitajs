export default function dfs(root,cb,childrenProp="children") {
    const stack = [root];

    while(stack.length) {
        const curNode = stack.pop();
        cb(curNode);

        const children = curNode[childrenProp];
        if(children) {
            for (const child of children) {
                stack.push(child)
            }
        }
    }

}