import Item1 from '../../images/img1.jpg'
import Item2 from '../../images/img2.jpg'
import Item3 from '../../images/img3.jpg'
import Item4 from '../../images/img4.jpg'
import Item5 from '../../images/img5.jpg'
import Item6 from '../../images/img6.jpg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        {id:1,title:'Airpods', price:18400,img:Item1},
        {id:2,title:'JBL', price:3200,img: Item2},
        {id:3,title:'boAt', price:899,img: Item3},
        {id:4,title:'Sony', price:789,img:Item4},
        {id:5,title:'realme', price:1200,img: Item5},
        {id:6,title:'Sennheiser', price:13099,img: Item6}
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    //Add to cart
    if(action.type === ADD_TO_CART){
        //check if dispatched id is same as item id
          let addedItem = state.items.find(item=> item.id === action.id) // 5===5

          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id) //if existed increment else add 1
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    return state
}

export default cartReducer