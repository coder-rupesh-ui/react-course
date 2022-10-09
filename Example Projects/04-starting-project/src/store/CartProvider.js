import CartContext from "./cart-context"
import { useReducer } from "react";
const defCartState = {
    items: [],
    amount: 0
}
const cartReducer = (state, action) => {
    if(action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        const updatedAmt = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedAmt
        }
    }
    return defCartState;
};

const CartProvider = props => {
    const [cartState, dispatchAction] = useReducer(cartReducer, defCartState);
    const addItemHandler = item => {
        dispatchAction({type: 'ADD', item})
     };
    const removeItemHandler = id => {
        dispatchAction({type: 'REMOVE', id})
     };
    const cartContext = {
        items: cartState.items,
        amount: cartState.amount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;