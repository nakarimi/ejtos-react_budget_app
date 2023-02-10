import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, currency, dispatch, remaining } = useContext(AppContext);
  const handleSetBudget = (e) => {
    if(remaining > e.target.value){
      alert("The value should not exceed the remaining budget.")
    }else{
      dispatch({
        type: 'SET_BUDGET',
        payload: e.target.value
      })
    }
  }
  
  return (
    <div className='alert alert-secondary'>
      <span>Budget: {currency}
        <input type="number" step='10' value={budget} onChange={e => handleSetBudget(e)} />
      </span>
    </div>
  );
};

export default Budget;