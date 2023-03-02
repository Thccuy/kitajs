import rangesMerge from "../rangesMerge";

describe("testSuite",() => {

    test('It should work', () => {
        const res = rangesMerge([[1,4],[2,8]]);

        expect(res).toEqual([[1,8]]);
    });

})