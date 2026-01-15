import { ADD_TO_CART,REMOVE_FROM_CART,UPDATE_CART_QUANTITY,CLEAR_CART} from "../actionstype";

const initalState = {
    items:[]
}
const cartReducer = (state = initalState, action)=>{
    switch(action.type){
        case ADD_TO_CART:
            return{
                ...state,
                items: [...state.items, action.payload]
            };
        case REMOVE_FROM_CART:
            return{
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        case UPDATE_CART_QUANTITY:
            return{
                ...state,
                items: state.items.map(items =>
                    items.id === action.payload.itemId ? {...items, quantity: action.payload.quantity }: items
                )
            };
        case CLEAR_CART:
            return{
                ...state,
                items: []
            };
        default:
            return state; 
    }
}
export default cartReducer;