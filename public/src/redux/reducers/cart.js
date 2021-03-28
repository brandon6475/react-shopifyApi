const initialState = {
    checkout : null
};

export const UPDATE_CHECKOUT = 'UPDATE_CHECKOUT';

export const saveCheckout = (checkout) => ({
    type: UPDATE_CHECKOUT,
    payload: checkout
});

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CHECKOUT:
            return { ...state, checkout: action.payload };
        default:
            return state;
    }
};

