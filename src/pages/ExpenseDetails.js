import React from 'react'

function ExpenseDetails({ incomeAmt , expenseAmt }) {
    return (
        <div>
            <div className="balence">
                Your Balence : {incomeAmt - expenseAmt}
            </div>

            <div className='amounts-container' >
                <div className='income'>
                    Income :
                    &nbsp; &nbsp;
                    <span className='income-amount'>{incomeAmt}</span>
                </div>
                <div className='expense'>
                    Expense :
                    &nbsp; &nbsp;
                    <span className='expense-amount'>{expenseAmt}</span>
                </div>
            </div>
        </div>
    )
}

export default ExpenseDetails;