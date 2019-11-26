
import { GET_ITEM,SORT_ITEMS_AZ,SORT_ITEMS_ZA,SORT_ITEMS_PRICEI,SORT_ITEMS_PRICED } from './action-types/items-actions'

//add items action
export const sortItems = (items, type) => {
    return{
        type: type,
        items
    }
}
export const getProduct = (id) => {
    return{
        type: GET_ITEM,
        id
    }
}