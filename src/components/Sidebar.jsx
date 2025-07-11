import { CiBarcode } from "react-icons/ci";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbPigMoney } from "react-icons/tb";
import { IoMdListBox } from "react-icons/io";
import { RiAiGenerate2 } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className='bg-neutral-100 md:min-h-screen'>
        <div className="p-4"><IoMenu className="text-3xl md:hidden" 
        onClick={()=> setIsMenuOpen(!isMenuOpen)}
        />
          {/*Mobile version */}
        {isMenuOpen && 
        <div className="md:hidden transform bg-neutral-100 z-50">
          <div className=''> 
              <Link to="/"><button className='flex items-center gap-1 p-5 text-lg text-neutral-600 font-semibold hover:text-blue-700 hover:bg-blue-100 rounded-lg w-full'><LuLayoutDashboard /> Dashboard</button></Link>
              <Link to="/budgets"><button className='flex items-center gap-1 p-5 text-lg text-neutral-600 font-semibold hover:text-blue-700 hover:bg-blue-100 rounded-lg w-full'><TbPigMoney /> Budgets</button></Link>
              <Link to="/expenses"><button className='flex items-center gap-1 p-5 text-lg text-neutral-600 font-semibold hover:text-blue-700 hover:bg-blue-100 rounded-lg w-full'><IoMdListBox /> Expenses</button></Link>
              <Link to="/finai"><button className='flex items-center gap-1 p-5 text-lg text-neutral-600 font-semibold hover:text-blue-700 hover:bg-blue-100 rounded-lg w-full'><RiAiGenerate2 /> FinAI</button></Link>
            </div>
        </div>}

          {/*Desktop version */}
          <div className='hidden md:block px-6 py-10'>
            <h1 className='flex justify-start items-center text-xl font-semibold text-blue-700 gap-1'>
              <CiBarcode />SpendLens</h1>

            <div className='my-8'> 
              <Link to="/"><button className='flex items-center gap-1 p-5 text-lg text-neutral-600 font-semibold hover:text-blue-700 hover:bg-blue-100 rounded-lg w-full'><LuLayoutDashboard /> Dashboard</button></Link>
              <Link to="/budgets"><button className='flex items-center gap-1 p-5 text-lg text-neutral-600 font-semibold hover:text-blue-700 hover:bg-blue-100 rounded-lg w-full'><TbPigMoney /> Budgets</button></Link>
              <Link to="/expenses"><button className='flex items-center gap-1 p-5 text-lg text-neutral-600 font-semibold hover:text-blue-700 hover:bg-blue-100 rounded-lg w-full'><IoMdListBox /> Expenses</button></Link>
              <Link to="/finai"><button className='flex items-center gap-1 p-5 text-lg text-neutral-600 font-semibold hover:text-blue-700 hover:bg-blue-100 rounded-lg w-full'><RiAiGenerate2 /> FinAI</button></Link>
            </div>

            <button className='mt-[140px] flex items-center gap-1 p-5 1pb-1 text-lg text-neutral-600 font-semibold hover:text-gray-800'><IoSettingsOutline />Settings</button>
            <button className='flex items-center gap-1 pl-5 -mt-2 text-lg text-red-600 font-semibold hover:text-red-900'><LuLogOut />Log out</button>
        </div>
        </div>
    </main>
  )
}

export default Sidebar