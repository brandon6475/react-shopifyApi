export const brands = ['Takeuchi', 'Kubota', 'Caterpillar', 'Link-Belt', 'John Deere', 'Komatsu', 'Case', 'Hitachi', 'Volvo', 'Hyundai', 'Kobelco', 'Bobcat'];


const initialState = {
    search: {
        brand: '',
        model: '',
        criteria: ''
    },
    loading: true,
    currItem: null,
    showFilters: true,
    cartItems: [],
};

export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export const SET_LOADING = 'SET_LOADING';
export const SEARCH_CLEAR_FILTERS = 'SEARCH_CLEAR_FILTERS;'
export const TOOGLE_SEARCH_VIEW = 'TOOGLE_SEARCH_VIEW'

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SEARCH:
            return { ...state, search: action.payload };
        case SET_LOADING:
            return { ...state, loading: action.payload };
        case SEARCH_CLEAR_FILTERS:
            return { ...initialState };
        default:
            return state;
    }
};