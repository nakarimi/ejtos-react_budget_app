import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, currency, dispatch, remaining } = useContext(AppContext);
  const handleSetBudget = (e) => {
    if(e.target.value < budget - remaining){
      alert("You can not reduce the budget value lower than the spending")
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