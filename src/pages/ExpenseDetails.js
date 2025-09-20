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

            {/* Alert when expenses > income */}
            {expenseAmt > incomeAmt && (
                <div className="mt-4 bg-red-600 text-white p-2 rounded-md text-center font-semibold shadow-md">
                    ⚠️ Warning: Your expenses are higher than your income!
                </div>
            )}
        </div>
    )
}

export default ExpenseDetails;