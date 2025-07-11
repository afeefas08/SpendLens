import React from 'react'
import { TbMoneybag } from "react-icons/tb";
import { IoMdListBox } from "react-icons/io";
import { IoWalletOutline } from "react-icons/io5";

const BudgetSummary = () => {
  return (
    <div className='m-5 md:flex md:justify-between gap-2'>

        <div className='w-[325px] h-[100px] bg-stone-100 rounded-xl p-5 flex justify-between'>
           <div>
             <h1 className='text-md'>Total Budget</h1>
            <h1 className='text-xl'>Rs.30,000</h1>
           </div>
           <h1 className='w-[40px] h-[40px] bg-blue-600 rounded-full mt-2'><TbMoneybag className='text-3xl ml-1 mt-1 text-gray-200'/></h1>
        </div>

        <div className='w-[325px] h-[100px] bg-stone-100 rounded-xl p-5 flex justify-between'>
           <div>
             <h1 className='text-md'>Total Spend</h1>
            <h1 className='text-xl'>Rs.30,000</h1>
           </div>
           <h1 className='w-[40px] h-[40px] bg-blue-600 rounded-full mt-2'><IoMdListBox
            className='text-3xl ml-1 mt-1 text-gray-200'/></h1>
        </div>

        <div className='w-[325px] h-[100px] bg-stone-100 rounded-xl p-5 flex justify-between'>
           <div>
             <h1 className='text-md'>No of Budget</h1>
            <h1 className='text-xl'>5</h1>
           </div>
           <h1 className='w-[40px] h-[40px] bg-blue-600 rounded-full mt-2'><IoWalletOutline className='text-3xl ml-1 mt-1 text-gray-200'/></h1>
        </div>

    </div>
  )
}

export default BudgetSummary