import React, { useContext } from 'react'
// anything from GlobalContext can be pulled by useContext hook
// pull GlobalState in to access transactions
import { GlobalContext } from '../Context/GlobalState'
export const TransactionList = () => {
  const {transactions} = useContext(GlobalContext);
  
    return (
        <>
            <h3>Transaction History</h3>
      <ul className="list">
         <li className="minus">
          Cash <span>-$900</span><button className="delete-btn">remove</button>
        </li> 
      </ul>
            
        </>
    )
}
