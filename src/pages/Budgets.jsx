import React from 'react'
import Sidebar from "../components/Sidebar";
import Top from "../components/Top";
import BudgetList from '../components/BudgetList';

const Budgets = () => {
  return (
    <main className="">
      <div className="md:flex">
        <div className="md:w-[325px]">
          <Sidebar />
        </div>

        {/* Main section */}
        <div className="-mt-14 md:mt-0 w-full">
        <Top />
        <BudgetList />

        
        </div>
      </div>
    </main>
  )
}

export default Budgets