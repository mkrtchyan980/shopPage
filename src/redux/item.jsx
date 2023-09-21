export const addToCart = (product) => {
    return {
        type: "AddToCart",
        payload: product,
    };
};
export const deleteToCart = (product) => {
    return {
        type: "DeleteToCart",
        payload: product,
    };
};
