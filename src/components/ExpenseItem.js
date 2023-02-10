import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { TiDelete, TiPlus, TiMinus } from "react-icons/ti";

const ExpenseItem = (props) => {
  const {dispatch} = useContext(AppContext);
  const handleDeleteExpense = () =>{

    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.expense.id,
    })
  }
  const increaseAllocation = (name) => {
    const expense = {
      name: name, 
      cost: 500
    }
  
    dispatch({
      type: "ADD_EXPENSE", 
      payload: expense
    });
  }

  const reduceAllocation = (name) => {
    const expense = {
      name: name, 
      cost: 500
    }
  
    dispatch({
      type: "RED_EXPENSE", 
      payload: expense
    });
  }

  return (
    <tr>
      <td>{ props.expense.name }</td>
      <td>£{ props.expense.cost }</td>
        <td className='expense-add'><TiPlus onClick={(e) => increaseAllocation(props.expense.name)} style={{ "cursor": "pointer" }} /></td>
        <td className='expense-reduce'><TiMinus onClick={(e) => reduceAllocation(props.expense.name)} style={{ "cursor": "pointer" }} /></td>
        <td><TiDelete onClick={e => handleDeleteExpense()} style={{ "cursor": "pointer" }} /></td>
    </tr>
  )
}
export default ExpenseItem;