import {PRODUCTS} from '../../constants/products';

const initialState = {
    categories: PRODUCTS,
    selected:null
};

const  categoryReducer = (state = initialState, action) => {
    return state;
};

export default categoryReducer;