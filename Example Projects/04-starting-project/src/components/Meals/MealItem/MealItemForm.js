import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
const MealItemForm = props => {
    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);
    const submitHandler = event => {
        event.preventDefault();
        const enteredAmt = amountInputRef.current.value;
        const enteredAmtNo = +enteredAmt;
        if(enteredAmt.trim().length === 0 || enteredAmtNo < 1 || enteredAmtNo > 5) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmtNo);
    }
    return <form className={classes.form} onSubmit={submitHandler}>
        <Input label="Amount"
            ref={amountInputRef}
            input={{
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount.</p>}
    </form>
}
export default MealItemForm;