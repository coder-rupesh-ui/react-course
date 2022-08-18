import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';
import Card from "../UI/Card";
import { useState } from "react";

function Expenses(props) {
    const [curYear, setCurYear] = useState("2020");
    const filterChangeHandler = (year) => {
        setCurYear(year);
    }
    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === curYear
    })

    let expensesContent = <p>No expenses found.</p>;
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                date={expense.date}
                amount={expense.amount} />)
        )
    }

    return (

        <Card className="expenses">
            <ExpensesFilter selectedYear={curYear} onFilterChange={filterChangeHandler} />
            {expensesContent}
        </Card>
    )
}

export default Expenses;