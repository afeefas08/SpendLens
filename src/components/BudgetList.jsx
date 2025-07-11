import { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const BudgetList = () => {
    const [showInput,setShowInput] = useState(false)
    const [name,setName] = useState("")
    const [amount,setAmount] = useState("")
    const [budgets,setBudgets] = useState([])

    function handleSubmit(e){
        e.preventDefault()

        const newBudget ={
            name,
            amount
        }

        setBudgets(prev => [...prev, newBudget])
        setName("")
        setAmount("")
        setShowInput(false)
    }

  return (
    <div>
        <h1 className='m-5 font-semibold text-2xl'>My Budget</h1>

        <div>
            <button className='w-[250px] h-[130px] border border-gray-500 rounded-xl mx-8 bg-stone-300' 
            onClick={()=> setShowInput(true)}
            ><FaPlus className='mx-auto my-1' />Create New Budget</button>
        </div>

        
         {showInput && <div className="fixed inset-0 bg-black/70 z-10">
            <div className='w-[450px] h-[330px] bg-white mx-auto mt-[150px] rounded-lg'>
            <form className='p-5' onSubmit={handleSubmit}>
                <div className='flex justify-between '>
                    <h1 className='font-semibold text-lg my-2 mb-6'>Create New Budget</h1>
                    <p><IoMdClose className='cursor-pointer'
                    onClick={()=> setShowInput(!showInput)}
                    /></p>
                </div>
                <label className='font-semibold '>Budget Name</label><br />
                <input type='text' placeholder='eg.Home Decor'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className='w-full px-3 py-2 my-2 border border-gray-300 rounded-lg'/><br />
                <label className='font-semibold'>Budget Amount</label><br />
                <input type='text' placeholder='eg.1500rs'
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
                className='w-full px-3 py-2 my-2 border border-gray-300 rounded-lg'/><br />

                <button className='bg-violet-600 text-white w-full p-2 rounded-lg my-5'
                type='submit'>Create Budget</button>
            </form>
        </div>
        </div>}

        <div>
            <ul>
                {budgets.map((budget,index)=>(
                    <li key={index} className='w-[250px] h-[130px] border border-gray-500 rounded-xl mx-8 bg-stone-100'>
                        <div className='flex justify-between m-4'>
                            <h1 className='font-semibold text-lg'>{budget.name}</h1>
                            <h1 className='font-semibold text-lg text-blue-700'>Rs.{budget.amount}</h1>
                        </div>
                        <div className='flex justify-between mx-8 py-'>
                            <h2 className='text-gray-600 text-sm'>spend</h2>
                            <h2 className='text-gray-600 text-sm'>Remaining</h2>
                        </div>
                    </li>
                    ))}
            </ul>
        </div>
        
    </div>
  )
}

export default BudgetList