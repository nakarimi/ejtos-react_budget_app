import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {/* Add Budget component here under */}
                        {/* Add Remaining component here under */}        
                        <div className='row'>
                            <div className='col'>
                                <Budget />
                            </div>
                            <div className='col'>
                                <Remaining />
                            </div>
                            <div className='col'>
                                <ExpenseTotal />
                            </div>
                        </div>

                        <div className='row'>
                            <ExpenseList />
                        </div>
                        <div className='row'>
                            <AllocationForm />
                        </div>
                        {/* Add ExpenseTotal component here under */}        
                       
                        {/* Add ExpenseList component here under */}         

                        {/* Add ExpenseItem component here under */}        

                        {/* Add AllocationForm component here under */}        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
