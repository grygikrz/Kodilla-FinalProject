
import { ADD_ITEM_TO_CART,ITEM_REMOVE,ADD_DISCOUNT,SUB_QUANTITY,ADD_QUANTITY,ADD_TRANSPORT } from './action-types/cart-actions'


export const addDiscountToCart = (id)=>{
    return{
        type: ADD_DISCOUNT,
        id
    }
}

export const addToItemCart = (id) =>{
    return{
        type: ADD_ITEM_TO_CART,
        id
    }
}

export const itemRemove = (id) =>{
    return{
        type: ITEM_REMOVE,
        id
    }
}

export const subtractQuantity = (id) =>{
    return{
        type: SUB_QUANTITY,
        id
    }
}

export const addQuantity = (id) =>{
    return{
        type: ADD_QUANTITY,
        id
    }
}
