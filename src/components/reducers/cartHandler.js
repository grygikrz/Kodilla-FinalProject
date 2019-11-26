import { ADD_ITEM_TO_CART,ITEM_REMOVE,SUB_QUANTITY,ADD_DISCOUNT,ADD_QUANTITY,ADD_TRANSPORT } from '../actions/action-types/cart-actions'

// Handler for cart functionality - get data from components and compute / return data
const cartHandler = (state,action)=>{
console.log(state);

    if(action.type === ADD_ITEM_TO_CART){
      console.log('Here I am')
          let addedItem = state.items.find(item=> item.id === action.id)

         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1
             return{
                ...state,
                 total: parseFloat(state.total) + parseFloat(addedItem.price)
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = parseFloat(state.total) + parseFloat(addedItem.price)

            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }

        }
    }
    if(action.type === ITEM_REMOVE){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let newItems = state.addedItems.filter(item=> action.id !== item.id)

        let newTot = parseFloat(state.total) - (parseFloat(itemToRemove.price) * itemToRemove.quantity )

        return{
            ...state,
            addedItems: newItems,
            total: newTot
        }
    }

    if(action.type === ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1
          let newTot = parseFloat(state.total) + parseFloat(addedItem.price)
          return{
              ...state,
              total: newTot
          }
    }
    if(action.type === SUB_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)

        if(addedItem.quantity === 1){
            let newItems = state.addedItems.filter(item=>item.id !== action.id)
            let newTot = parseFloat(state.total) - parseFloat(addedItem.price)
            return{
                ...state,
                addedItems: newItems,
                total: newTot
            }
        }
        else {
            addedItem.quantity -= 1
            let newTot = parseFloat(state.total) - parseFloat(addedItem.price)
            return{
                ...state,
                total: newTot
            }
        }

    }

    if(action.type === ADD_TRANSPORT){
          return{
              ...state,
              total: parseFloat(state.total) + 5.00
          }
    }

    if(action.type === 'RMV_TRANSPORT'){
        return{
            ...state,
            total: parseFloat(state.total) - 5.00
        }
  }

  if(action.type === ADD_DISCOUNT){
        return{
            ...state,
            total: parseFloat(state.total) - 10.00
        }
  }

  if(action.type === 'RMV_DISCOUNT'){
      return{
          ...state,
          total: parseFloat(state.total) + 10.00
      }
}

  else{
    return state
    }

}

export default cartHandler
