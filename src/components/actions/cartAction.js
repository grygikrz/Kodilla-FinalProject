
import { ADD_ITEM_TO_CART,ITEM_REMOVE,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING} from './action-types/cart-actions'

//add cart action
export const addToItemCart= (id)=>{
    return{
        type: ADD_ITEM_TO_CART,
        id
    }
}
//remove item action
export const itemRemove=(id)=>{
    return{
        type: ITEM_REMOVE,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}
