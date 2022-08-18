import {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const titleChangeHandler = (event) => {
        console.log(event);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });
        // this is bcoz react schedules state update maybe someone has already updated but you worked on
        // old state as it was not updated in userInput state yet
        setUserInput((prevState) => {
            return {
                    ...prevState,
                    enteredTitle: event.target.value
                }
        })
    }
    const amountChangeHandler = (event) => {
        console.log(event);
        setUserInput((prevState) => {
            return {
                    ...prevState,
                    enteredAmount: event.target.value
                }
        })
    }
    const dateChangeHandler = (event) => {
        console.log(event);
        setUserInput((prevState) => {
            return {
                    ...prevState,
                    enteredDate: event.target.value
                }
        })
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const formData = {
            ...userInput,
            enteredDate: new Date(userInput.enteredDate)
        }
        console.log(formData);
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        })
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={userInput.enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={userInput.enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;