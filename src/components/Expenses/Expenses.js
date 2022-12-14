import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

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
            <ExpenseChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    )
}

export default Expenses;