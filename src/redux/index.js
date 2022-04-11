import { applyMiddleware, combineReducers, createStore } from "redux";

import categoryReducer from "./reducers/category.reducer";
import productReducer from "./reducers/product.reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    categories: categoryReducer,
    products: productReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
