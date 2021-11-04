import React from 'react'

export const IncomeExpense = () => {
    return (
        <div className="incExp-container">
            <div>
            <h4>Income </h4>
            <p id="plus" className = "plus"> +0.00$ </p>

            </div>
            
            <div>
                <h4> Expenses </h4>
                <p id="minus" className="minus">-0.00$ </p>
            </div>
        </div>
        
    )
}
