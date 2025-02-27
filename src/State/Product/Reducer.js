// import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType"

// const initialState = {
//     products:[],
//     product:{ content: [], totalPages: 0 },
//     loading:false,
//     error:null,
// }
// export const customerProductReducer = (state=initialState,action)=>{

//     switch(action.type){
//         case FIND_PRODUCTS_REQUEST:
//         case FIND_PRODUCT_BY_ID_REQUEST:    
//             return {
//                 ...state,
//                 loading:true,
//                 error:null,
//             }
//         case FIND_PRODUCTS_SUCCESS:
//             console.log("Redux State Update: ", action.payload);
//             return {
//                 ...state,
//                 products:action.payload.content ,
//                 error:null,
//                 loading:false,
//             }
        
//         case FIND_PRODUCT_BY_ID_SUCCESS:
//             return {
//                 ...state,
//                 product:action.payload,
//                 error:null,
//                 loading:false,
//             }
        
//         case FIND_PRODUCTS_FAILURE:
//         case FIND_PRODUCT_BY_ID_FAILURE:    
//             return {
//                 ...state,
//                 error:action.payload,
//                 loading:false,
//             }
            

//         default:
//             return state;    
            
//     }

// }
import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType";

const initialState = {
    products: [],
    product: { content: [], totalPages: 0 },
    loading: false,
    error: null,
};

export const customerProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_PRODUCTS_REQUEST:
        case FIND_PRODUCT_BY_ID_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case FIND_PRODUCTS_SUCCESS:
            console.log("Redux State Update: ", action.payload);
            return {
                ...state,
                products: action.payload,
                error: null,
                loading: false,
            };

        case FIND_PRODUCT_BY_ID_SUCCESS:
            console.log("API Response:", action.payload);
            return {
                ...state,
                product: action.payload , // Ensuring default structure
                error: null,
                loading: false,
            };

        case FIND_PRODUCTS_FAILURE:
        case FIND_PRODUCT_BY_ID_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };

        default:
            return state;
    }
};
