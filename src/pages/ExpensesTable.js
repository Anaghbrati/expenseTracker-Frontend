import React from 'react'

function ExpensesTable( {expenses , handleDeleteExpense} ) {
    console.log('ExpensesTable-->', expenses)
    return (
        <div className="expense-List">
            {
                expenses?.map((expenses, index) => (
                    <div key={index} className='expense-item'>
                        <button className='delete-button' onClick={() => handleDeleteExpense(expenses._id)}>X</button>
                        <div className='expense-description'>{expenses.text}</div>
                        <div className='expense-amount'
                            style = {{
                                color: expenses.amount > 0 ? '#27ae60' : '#e74c3c'
                            }}
                            >{expenses.amount}
                        </div>

                        <div className="time">
                            {new Date(expenses.createdAt).toLocaleDateString("en-IN", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                                timeZone: "Asia/Kolkata"
                            })}
                            &nbsp;&nbsp;
                            {new Date(expenses.createdAt).toLocaleTimeString("en-IN", {
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: true,
                                timeZone: "Asia/Kolkata"
                            })}
                        </div>
                        
                    </div>
                    
                )
                )}
                
        </div>
    
    )
}

export default ExpensesTable;