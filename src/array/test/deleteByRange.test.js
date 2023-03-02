import deleteByRange from "../deleteByRange";

describe("testSuite",() => {

    test("Over Bound Right",() => {
        const res = deleteByRange([[1,5],[6,7],[7,10]],[2,100]);

        expect(res).toEqual([[1,2]])
    })

    test("Over Bound Left",() => {
        const res = deleteByRange([[3,5],[6,7],[7,10]],[1,8]);

        expect(res).toEqual([[8,10]])
    })

    test("ranges include deleting range",() => {
        const res = deleteByRange([[1,5],[6,7],[7,10]],[2,8]);

        expect(res).toEqual([[1,2],[8,10]])
    })

    test("deletingRange includes ranges",() => {
        const res = deleteByRange([[1,5],[6,7],[7,10]],[0,11]);

        expect(res).toEqual([])
    })

    test("unSorted ranges",() => {
        const res = deleteByRange([[6,7],[1,5],[7,10]],[2,8]);

        expect(res).toEqual([[1,2],[8,10]])
    })
})

