export default function isArrayLike(item) {
    return (
        Array.isArray(item) ||
        (!!item &&
            typeof item === "object" &&
            typeof (item.length) === "number" &&
            (item.length === 0 ||
                (item.length > 0 &&
                    (item.length - 1) in item)
            )
        )
    );
}