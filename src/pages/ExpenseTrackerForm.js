import React from 'react'
import { useState } from 'react';

import { handleError } from '../utils';


function ExpenseTrackerForm({ addExpenses }) {

    const[expenseInfo, setExpenseInfo] = useState({text: '', amount: '' });

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
        const {text,amount} = expenseInfo;
        if(!text || !amount){
            handleError("All fields are required");
            return;
        }

        // Convert amount to number before sending
        const data = { ...expenseInfo, amount: Number(amount) };
        
        addExpenses(data);
        setExpenseInfo({ text: '', amount: '' });
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
                        <button type='submit'>Add Expense</button>
                        
                    </form>
                    {/* <ToastContainer /> */}
                    <footer></footer>
                </div>
    )
}

export default ExpenseTrackerForm