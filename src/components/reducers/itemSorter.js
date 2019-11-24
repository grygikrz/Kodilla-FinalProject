import { SORT_ITEMS_AZ,SORT_ITEMS_ZA,SORT_ITEMS_PRICEI,SORT_ITEMS_PRICED } from '../actions/action-types/items-actions'


const itemSorter = (state, action)=>{

  if(action.type === SORT_ITEMS_AZ){
        let newItems = state.items.slice().sort((a,b) => ((a.name > b.name) - (a.name < b.name)))
        return {
            ...state,
            sorted: newItems
        }

     }

     if(action.type === SORT_ITEMS_ZA){
           let newItems = state.items.slice().sort((a,b) => ((a.name < b.name) - (a.name > b.name)))
           return {
               ...state,
               sorted: newItems
           }

        }

        if(action.type === SORT_ITEMS_PRICEI){
              let newItems = state.items.slice().sort((a,b) => (parseFloat(a.price) - parseFloat(b.price)))
              return {
                  ...state,
                  sorted: newItems
              }

           }

  if(action.type === SORT_ITEMS_PRICED){
        let newItems = state.items.slice().sort((a,b) => (parseFloat(b.price) - parseFloat(a.price)))
        return {
            ...state,
            sorted: newItems
        }

     }else{

    return state;

  }
}
export default itemSorter;
