import { updateCartItem } from "./Action"
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_ITEM_FROM_CART_FAILURE, REMOVE_ITEM_FROM_CART_REQUEST, REMOVE_ITEM_FROM_CART_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"

const initialState = {
    cart: null,
    loading: false,
    error: null,
    cartItems: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART_REQUEST:
            return { ...state, loading: true, error: null }
        case ADD_ITEM_TO_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: [...state.cartItems, action.payload.cartItems],
            }
        case ADD_ITEM_TO_CART_FAILURE:
            return { ...state, loading: false, error: action.payload }
        case GET_CART_REQUEST:
            return { ...state, loading: true, error: null }
        case GET_CART_SUCCESS:
            // return {...state,cartItems:action.payload.cartItems,loading:false,cart:action.payload}
            console.log("Cart API Response:", action.payload);  // ✅ Debugging Log
            return {
                ...state,
                cartItems: action.payload.items || action.payload,  // ✅ Handle missing cartItems field
                loading: false,
                cart: action.payload
            };
        case GET_CART_FAILURE:
            return { ...state, loading: false, error: action.payload }
        case REMOVE_ITEM_FROM_CART_REQUEST:
        case UPDATE_CART_ITEM_REQUEST:
            return { ...state, loading: true, error: null }
        case REMOVE_ITEM_FROM_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                deleteCartItem:action.payload,
                // cartItems: state.cartItems.filter((item) => item.id !== action.payload.id)
            }
        case UPDATE_CART_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                updateCartItem:action.payload,
                // cartItems: state.cartItems.map((item) => item.id === action.payload.id ? action.payload : item)
            }
        case REMOVE_ITEM_FROM_CART_FAILURE:
        case UPDATE_CART_ITEM_FAILURE:
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}
