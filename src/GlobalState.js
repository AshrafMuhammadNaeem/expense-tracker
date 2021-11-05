import React from "react"
import { createContext, useReducer } from "react"

// Creating the Initial State
const initialState = {
    transactions:[
        {id:1, text:'Books', amount: -700},
        {id:2, text:'Salary', amount: 500000},
        {id:1, text:'Investments', amount: -200000},
        {id:1, text:'car', amount: -100000},
    ]
}
