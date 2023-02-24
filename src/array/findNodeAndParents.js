export default function findNodeAndParents(node,comparator) {
    const _recursive = (node,parents = []) => {
        if(comparator(node)) {
            return [...parents,node];
        }

        const children = node?.children;

        if(children) {
            for (const child of children) {
                const result = _recursive(child,[...parents,node])

                if (result) {
                    return result;
                }
            }
        }

        return null;
    }

    return _recursive(node)
}
