import { createStore, combineReducers } from "redux";
import cartReducer from "./reducers/reducer";
const rootreducer = combineReducers({
    cart: cartReducer
});

const store = createStore(rootreducer);

export default store;