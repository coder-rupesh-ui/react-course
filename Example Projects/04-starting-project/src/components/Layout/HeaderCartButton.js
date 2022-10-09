import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);
    const noOfItems = cartCtx.items.reduce((acc, item) => {
        return acc+ item.amount;
    }, 0)
    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{noOfItems}</span>
    </button>
}

export default HeaderCartButton;