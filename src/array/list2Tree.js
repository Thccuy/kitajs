/**
 * 将扁平的数组转化为树
 * @param {*} list 目标数组
 * @param {*} itemKey 数组成员的key
 * @param {*} parentKey 表示数组成员的父节点的key
 * @param {*} childrenKey 表示数组成员的子节点列表的key
 * @returns 转化为树的数组
 */
export default function list2Tree(list, itemKey, parentKey, childrenKey) {
    const res = [];
    const fullMap = new Map(list.map((item) => [item[itemKey], item]));
    const length = list.length;

    if (length <= 1) {
        return list;
    }

    for (const item of list) {
        const parent = fullMap.get(item[parentKey]);

        if (parent) {
            const children = parent[childrenKey] || [];

            parent[childrenKey] = children.concat(item);
        } else {
            res.push(item);
        }
    }

    return res;
}
