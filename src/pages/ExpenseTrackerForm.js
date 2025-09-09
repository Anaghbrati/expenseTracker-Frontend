import React from 'react'
import { useState } from 'react';

import { handleError } from '../utils';


const categories = [
        "Salary",        
        "Bonus",        
        "Freelance",
        "Housing",
        "Food & Groceries",
        "Transportation",
        "Education / Work",
        "Health & Fitness",
        "Entertainment",
        "Shopping / Personal",
        "Savings & Investments",
        "Miscellaneous"
    ];


function ExpenseTrackerForm({ addExpenses }) {

    const[expenseInfo, setExpenseInfo] = useState({text: '', amount: '', category: 'Miscellaneous' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log(name, value); //it will print the name and value of the input field in the console
        const copyExpenseInfo = { ...expenseInfo };
        copyExpenseInfo[name] = value;
        setExpenseInfo(copyExpenseInfo);
    }

    const handleExpense = (e) => {
        e.preventDefault();
        // console.log(expenseInfo); // it will print the expenseInfo object in the console
        const {text,amount,category} = expenseInfo;
        if(!text || !amount || !category){
            handleError("All fields are required");
            return;
        }

        // Convert amount to number before sending
        const data = { ...expenseInfo, amount: Number(amount) };
        
        addExpenses(data);
        setExpenseInfo({ text: '', amount: '', category: 'Miscellaneous' });
    }

    return (
         <div className='container'>
                    <h1>Expense Tracker</h1>
                    <form onSubmit={handleExpense}>
                        <div>
                            <label htmlFor='text'>Description</label>
                            <input
                                id='text'
                                onChange={handleChange}
                                type='text'
                                name='text'
                                placeholder='Enter your Expense Description...'
                                value={expenseInfo.text}
                            />
                        </div>
                        <div>
                            <label htmlFor='amount'>Amount</label>
                            <input
                                id='amount'
                                onChange={handleChange}
                                type='number'
                                name='amount'
                                placeholder='Enter your Amount, Expense(-ve) Income(+ve)...'
                                value={expenseInfo.amount}
                            />
                        </div>
                        <div>
                            <label htmlFor='category'>Category</label>
                            <br></br>
                            <select
                                id='category'
                                name='category'
                                value={expenseInfo.category}
                                onChange={handleChange}>
                                {categories.map((cat, idx) => (
                                <option key={idx} value={cat}>
                                    {cat}
                                </option>
                                ))}
                            </select>
                        </div>
                        <button type='submit'>Add Expense</button>
                        
                    </form>
                    {/* <ToastContainer /> */}
                    <footer></footer>
                </div>
    )
}

export default ExpenseTrackerForm