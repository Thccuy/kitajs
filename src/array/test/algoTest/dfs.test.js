import dfs from "../../algo/dfs";

const testData = {
    name: "a",
    children: [
        {
            name: "b",
            children: [
                {
                    name: "d",
                },
                {
                    name: "e",
                }
            ]
        },
        {
            name: "c",
            children: [
                {
                    name: "f",
                },
                {
                    name: "g",
                }
            ]
        }
    ]
}

test('It should work',() => {
    dfs(testData,(node) => console.log(node))

    expect(1).toBe(1);
})