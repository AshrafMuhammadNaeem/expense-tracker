import React, { useContext } from 'react';
// anything from GlobalContext can be pulled by useContext hook
import { Transaction } from './Transaction';

// pull GlobalState in to access transactions
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const {transactions}  = useContext(GlobalContext);

  console.log(transactions);

  
  
    return (
        <>
            <h3>Transaction History</h3>
      <ul className="list">
         {transactions.map(transaction => ( <Transaction key={transaction.id} transaction={transaction}/>
          ))}
      </ul>
            
        </>
    )
}
