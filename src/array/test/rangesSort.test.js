import rangesSort from "../rangesSort";

test("It should work",() => {
    const sorted = rangesSort([[2,3],[1,2],[5,4],[3,6]]);

    console.log(sorted);

    expect(1).toBe(1);
})