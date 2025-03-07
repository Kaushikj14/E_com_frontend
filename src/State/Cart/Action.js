import { api } from "../../config/apiConfig"
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_ITEM_FROM_CART_FAILURE, REMOVE_ITEM_FROM_CART_REQUEST, REMOVE_ITEM_FROM_CART_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"


// export const getCart = () => async (dispatch) => {
//     dispatch({type: GET_CART_REQUEST})

//     try {
//         const {data}= await api.get("/api/cart")
//         dispatch({type: GET_CART_SUCCESS, payload:data})
//         console.log("cart",data);
        
//     } catch (error) {
//         dispatch({type: GET_CART_FAILURE, payload:error.message})
//     }
// }

export const getCart = () => async (dispatch) => {
    dispatch({ type: GET_CART_REQUEST });
  
    try {
      console.log("Fetching cart from API...");
      const { data } = await api.get("/api/cart/");
      console.log("Cart data received:", data);
      dispatch({ type: GET_CART_SUCCESS, payload: data });
    } catch (error) {
      console.error("Error fetching cart:", error.response?.data || error.message);
      dispatch({ type: GET_CART_FAILURE, payload: error.message });
    }
  };
  


export const addItemToCart = (reqData) => async (dispatch) => {

    console.log("Data from action file",reqData);
    dispatch({type: ADD_ITEM_TO_CART_REQUEST})
    try {
        const {data}= await api.put("/api/cart/add", reqData);
        dispatch({type: ADD_ITEM_TO_CART_SUCCESS, payload:data});
        console.log("add item to cart -->",data);
        console.log(data);
        
      } catch (error) {
        dispatch({type: ADD_ITEM_TO_CART_FAILURE, payload:error.message})
      }
}


export const removeCartItem = (cartItemId) => async (dispatch) => {

    dispatch({type: REMOVE_ITEM_FROM_CART_REQUEST,})
    
    try {
        const { data } = await api.delete(`api/cart-items/${cartItemId}`);
        dispatch({type: REMOVE_ITEM_FROM_CART_SUCCESS,payload: cartItemId,})
    } catch (error) {
        dispatch({type: REMOVE_ITEM_FROM_CART_FAILURE,payload: error.message,})
    }
}


export const updateCartItem = (reqData) => async (dispatch) => {
    dispatch({type: UPDATE_CART_ITEM_REQUEST,})
    try {
        const { data } = await api.put(`api/cart-items/${reqData.cartItemId}`,reqData.data);
        dispatch({type: UPDATE_CART_ITEM_SUCCESS,payload: data,})
    } catch (error) {
        dispatch({type: UPDATE_CART_ITEM_FAILURE,payload: error.message,})
    }
}
