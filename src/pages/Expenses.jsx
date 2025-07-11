import React from 'react'
import Sidebar from "../components/Sidebar";
import Top from "../components/Top";

const Expenses = () => {
  return (
    <main className="">
      <div className="md:flex">
        <div className="md:w-[325px]">
          <Sidebar />
        </div>
        <div className="-mt-14 md:mt-0 w-full">
        <Top />
        </div>
      </div>
    </main>
  )
}

export default Expenses