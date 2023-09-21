import { createStore } from "redux";

const initialState = {
    items: [],
};

function cartReducer(state = initialState, action) {
    if (action.type === "AddToCart") {
        if (!state.items.some((item) => item.id === action.payload.id)) {
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        }
    } else if (action.type === "DeleteToCart") {
        return {
            ...state,
            items: state.items.filter((item) => item.id !== action.payload.id),
        };
    }
    return state;
}

const store = createStore(cartReducer);

export default store;
