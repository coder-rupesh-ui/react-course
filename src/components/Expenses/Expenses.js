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
    return (

        <Card className="expenses">
            <ExpensesFilter selectedYear={curYear} onFilterChange={filterChangeHandler} />
            {filteredExpenses.length === 0 && (<p>No expenses found.</p>)}
            {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    date={expense.date}
                    amount={expense.amount} />)
            )}
        </Card>
    )
}

export default Expenses;