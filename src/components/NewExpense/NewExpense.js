import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);
    const saveExpenseHandler = (expense) => {
        const expenseData = {
            ...expense,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        resetAddNewHandler();
    }
    const addNewExpenseHandler = () => {
        setShowForm(true);
    }
    const resetAddNewHandler = () => {
        setShowForm(false);
    }
    let formContent = (
        <button onClick={addNewExpenseHandler}>Add new expense</button>
    )
    if(showForm) {
        formContent = (
            <ExpenseForm onReset={resetAddNewHandler} onSaveExpenseData={saveExpenseHandler}/>
        )
    }
    return (
        <div className="new-expense">
            {formContent}
        </div>
    )
}

export default NewExpense;