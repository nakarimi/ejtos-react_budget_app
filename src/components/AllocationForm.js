import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const AllocationForm = () => {
  const { expenses, dispatch, currency } = useContext(AppContext);
  const [name, setName] = useState('');
  const [allocation, setAllocation] = useState('');
  const [cost, setCost] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const expense = {
      name: name,
      cost: parseInt(cost)
    };

    if (allocation === 'add') {
      dispatch({
        type: "ADD_EXPENSE",
        payload: expense
      });

    } else {
      dispatch({
        type: "RED_EXPENSE",
        payload: expense
      });

    }
  };

  return (
    <div>
      <h3>Change Allocation</h3>
      <form>
        <div className="row">
          <div className="col-3">
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
              <select id="inputGroupSelect01" value={name} onChange={e => setName(e.target.value)} className="form-select" aria-label="Default select example">
                <option value="">Choose a Department</option>
                {
                  expenses.map(expense => {
                    return <option key={expense.id} value={expense.id}>{expense.name}</option>;
                  })
                }
              </select>
            </div>
          </div>
          <div className="col-3">
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="inputGroupSelect02">Department</label>

              <select id="inputGroupSelect02" value={allocation} onChange={e => setAllocation(e.target.value)} className="form-select" aria-label="Default select example">
                <option value="">Choose a Allocation</option>
                <option value="add">Add</option>
                <option value="reduce">Reduce</option>
              </select>
            </div>
          </div>
          <div className="col-3">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">{currency}</span>
              <input aria-describedby="basic-addon1" name="cost" value={cost} onChange={e => setCost(e.target.value)} className="form-control" type="number" placeholder="Allocation amount" aria-label="default input example" />
            </div>
          </div>
          <div className="col-3">
            <button className="btn btn-primary" onClick={e => handleSubmit(e)}>Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default AllocationForm;