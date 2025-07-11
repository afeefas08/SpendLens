import React from 'react'
import Sidebar from "../components/Sidebar";
import Top from "../components/Top";

const FinAi = () => {
  return (
    <main className="">
      <div className="md:flex">
        <div className="md:w-[325px]">
          <Sidebar />
        </div>
        <div className="-mt-14 md:mt-0 w-full">
        <Top />
        <h1>finance</h1>
        </div>
      </div>
    </main>
  )
}

export default FinAi