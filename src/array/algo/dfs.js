export default function dfs(root,childrenProp="children",cb) {
    const stack = [root];

    while(stack.length) {
        const curNode = stack.pop();
        const children = curNode[childrenProp];
        cb(curNode);

        if(children) {
            for (const child of children) {
                stack.push(child)
            }
        }
    }

}