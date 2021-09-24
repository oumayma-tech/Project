import { GET_PRODUCT, GET_PRODUCTS, TOGGLE_FALSE, TOGGLE_TRUE } from "../constants/product"

const initState={
    products:[],
    edit:false,
    product:{}
}

const productReducer=(state=initState,action)=>{
    switch(action.type){
        case GET_PRODUCTS:
            return {...state,products:action.payload}
        case GET_PRODUCT:
                 return {...state,product:action.payload}
        case TOGGLE_TRUE:
                return {...state,edit:true}
        case TOGGLE_FALSE:
                    return {...state,edit:false}
        case GET_PRODUCT:
                     return {...state,contact:action.payload}
    }


    return state
}

export default productReducer