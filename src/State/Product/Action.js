import { api, API_BASE_URL } from "../../config/apiConfig";
import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType";

export const findProducts = (reqData) => async(dispatch)=>{

    dispatch({type:FIND_PRODUCTS_REQUEST});
    console.log("reqdata ---------->",reqData);
    
    const {colors,sizes,minPrice,maxPrice,minDiscount,category,stock,sort,pageNumber,pageSize} = reqData;
    
    try{

        const {data} = await api.get(`/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
        // const {data}=await api.get(`/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)

        console.log("product data ------------------->",data);
        
        dispatch({type:FIND_PRODUCTS_SUCCESS,payload:data});
        }catch(error){
            console.log("error",error);
            dispatch({type:FIND_PRODUCTS_FAILURE,payload:error.message})
        }
}


// export const findProductsById = (reqData) => async(dispatch)=>{

//     dispatch({type:FIND_PRODUCT_BY_ID_REQUEST});
    
//     const {productId} = reqData;
    
//     try{

//         const {data} = await api.get(`/api/products/${productId}`);

//         dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload:data});
//         }catch(error){

//             dispatch({type:FIND_PRODUCT_BY_ID_FAILURE,payload:error.message})
//         }
// }

export const findProductsById = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });

    const { productId } = reqData;
    console.log("Fetching product with ID:", productId); // Check if function is being called

    try {
        const { data } = await api.get(`/api/products/id/${productId}`);
        console.log("API Response for product details:", data); // Check if API returns data

        dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
    } catch (error) {
        console.error("Error fetching product details:", error);
        dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
    }
};


export const createProduct = (product)=>async (dispatch)=>{

    try {
        dispatch({type:CREATE_PRODUCT_REQUEST})

        const {data}= await api.post(`/api/admin/products/`,product.data);
        dispatch({
            type:CREATE_PRODUCT_SUCCESS,
            payload:data,
        })

        console.log("Product created", data);
    } catch (error) {
        dispatch({ type: CREATE_PRODUCT_FAILURE, payload: error.message });
    }
}


export const deleteProduct = (productId)=>async (dispatch)=>{

    try {
        dispatch({type:DELETE_PRODUCT_REQUEST})

        const {data}= await api.delete(`${API_BASE_URL}/api/admin/products/${productId}/delete`);

        console.log("delete product",data);
        
        dispatch({
            type:DELETE_PRODUCT_SUCCESS,
            payload:productId,
        })
    } catch (error) {
        dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message });
    }
}