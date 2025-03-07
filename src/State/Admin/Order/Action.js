import { api } from "../../../config/apiConfig";
import { GET_CART_FAILURE } from "../../Cart/ActionType";
import { CANCELED_ORDER_FAILURE, CANCELED_ORDER_REQUEST, CANCELED_ORDER_SUCCESS, CONFIRMED_ORDER_FAILURE, CONFIRMED_ORDER_REQUEST, CONFIRMED_ORDER_SUCCESS, DELETE_ORDER_REQUEST, DELIVERED_ORDER_FAILURE, DELIVERED_ORDER_REQUEST, DELIVERED_ORDER_SUCCESS, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, SHIP_ORDER_FAILURE, SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS } from "./ActionType";

export const getOrders = () => {
    console.log("get all orders ", );
    return async (dispatch) => {
        dispatch({type:GET_ORDERS_REQUEST});
        try {
            const response = await api.get(`/api/admin/orders/`);
            console.log("get all orders ", response.data);
            dispatch({type:GET_ORDERS_SUCCESS,payload:response.data});
        } catch (error) {
            console.log("catch error ", error);
            dispatch({type:GET_CART_FAILURE,error:error.message});
        }
    };
};

export const confirmOrder = (orderId) => async (dispatch) => {
    dispatch({type:CONFIRMED_ORDER_REQUEST});

    try {
        const response = await api.put(
            `/api/admin/orders/${orderId}/confirmed`
        );
        const data = response.data;
        console.log("confirm_order ", data);
        dispatch({type:CONFIRMED_ORDER_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:CONFIRMED_ORDER_FAILURE,error:error.message});
    }
};


export const shipOrder = (orderId) => {
    return async (dispatch) => {
        try {
            dispatch({type:SHIP_ORDER_REQUEST});
            const { data } = await api.put(`/api/admin/orders/${orderId}/ship`);
            console.log("shipped order", data);
            dispatch({type:SHIP_ORDER_SUCCESS,payload:data});
        } catch (error) {
            dispatch({type:SHIP_ORDER_FAILURE,error:error.message});
        }
    };
};



export const deliveredOrder = (orderId) => async (dispatch) => {
    dispatch({type:DELIVERED_ORDER_REQUEST});

    try {
        const response = await api.put(
            `/api/admin/orders/${orderId}/deliver`
        );
        const data = response.data;
        console.log("delivered order", data);
        dispatch({type:DELIVERED_ORDER_SUCCESS,payload:data});
    } catch (error) {
        dispatch({typeof:DELIVERED_ORDER_FAILURE,error:error.message});
    }
};

export const cancelOrder = (orderId) => async (dispatch) => {
    dispatch({type:CANCELED_ORDER_REQUEST});

    try {
        const response = await api.put(
            `/api/admin/orders/${orderId}/cancel`
        );
        const data = response.data;
        dispatch({type:CANCELED_ORDER_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:CANCELED_ORDER_FAILURE,error:error.message});
    }
};


// Async action creator for deleting an order
export const deleteOrder = (orderId) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_ORDER_REQUEST });

        try {
            const { data } = await api.delete(`/api/admin/orders/${orderId}/delete`);
            console.log("delete order ", data);
            dispatch({ type: DELETE_ORDER_REQUEST ,payload:data});
        } catch (error) {
            console.log("catch error ", error);
            dispatch({ type: DELETE_ORDER_REQUEST ,error:error.message});
        }
    };
};

