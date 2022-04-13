import { applyMiddleware, combineReducers, createStore } from "redux";

import authReducer from "./reducers/auth.reducer";
import cartReducer from "./reducers/cart.reducer";
import categoryReducer from "./reducers/category.reducer";
import orderReducer from "./reducers/order.reducer";
import productReducer from "./reducers/product.reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    categories: categoryReducer,
    products: productReducer,
    cart: cartReducer,
    auth: authReducer,
    order: orderReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
