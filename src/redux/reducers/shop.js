const initialState = {
    productHandle : null
};

export const UPDATE_PRODUCT_HANDLE = 'UPDATE_PRODUCT_HANDLE';

export const updateProduct = handle => ({
    type: UPDATE_PRODUCT_HANDLE,
    payload: handle
});

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PRODUCT_HANDLE:
            return { ...state, productHandle: action.payload };
        default:
            return state;
    }
};

