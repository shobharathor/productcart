import React, { useReducer } from 'react'
import Left from './Left'
import Right from './Right'
import Products from '../product.js'

const Main = () => {

  const reducer = (state,action) => {
    switch (action.type) {
        case 'SUBTRACT': {
        if (state.count === 0) return state;
            const arr = [...state];
            const filteredArr = arr.filter(obj=> {
                return obj.id === action.id
            })
            if (filteredArr[0].count === 0) return state;
            filteredArr[0].count -= 1
            return arr
        }
        case 'ADD': {
            const arr = [...state];
            const filteredArr = arr.filter(obj=> {
                return obj.id === action.id
            })
            filteredArr[0].count += 1
            return arr
        }
        default: {
            return state
        }
    }
  }

  const [state,dispatch] = useReducer(reducer,Products);

  return (
    <div id="main-container">

        <Left dispatch={dispatch} state={state}/>
        <Right state={state}/>
      
      </div>
  )
}

export default Main;