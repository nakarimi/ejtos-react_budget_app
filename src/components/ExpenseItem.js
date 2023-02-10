import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { TiDelete, TiPlus } from "react-icons/ti";

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
    console.log(expense);
  }
  return (
    <tr>
      <td>{ props.expense.name }</td>
      <td>£{ props.expense.cost }</td>
        <td><TiPlus onClick={(e) => increaseAllocation(props.expense.name)} style={{ "cursor": "pointer" }} /></td>
        <td><TiDelete onClick={e => handleDeleteExpense()} style={{ "cursor": "pointer" }} /></td>
    </tr>
  )
}
export default ExpenseItem;