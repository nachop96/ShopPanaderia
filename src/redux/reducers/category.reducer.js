import {CATEGORIES} from '../../constants/categories';

const initialState = {
    categories: CATEGORIES,
    selected:null
};

const  categoryReducer = (state = initialState, action) => {
    return state;
};

export default categoryReducer;