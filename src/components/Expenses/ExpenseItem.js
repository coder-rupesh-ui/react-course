import {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title)

    const clickHdlr = () => {
        setTitle('Updated');
        console.log(title); // it is not updated here, as setTitle schedules update and not immediately update
    }
    return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHdlr}>Click me</button>
    </Card>
    )
}
export default ExpenseItem;