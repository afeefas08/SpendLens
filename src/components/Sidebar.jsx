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
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";


const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isActive, setIsActive] = useState('/')

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', path: '/', icon: <LuLayoutDashboard />  },
    { id: 'budgets', label: 'Budgets', path: '/budgets', icon: <TbPigMoney /> },
    { id: 'expenses', label: 'Expenses', path: '/expenses', icon:<IoMdListBox />  },
    { id: 'finance', label: 'FinAI', path: '/finai', icon: <RiAiGenerate2 /> },
  ]


  return (
    <main className='bg-neutral-100 md:min-h-screen'>
        <div className="pt-5 ml-5 md:hidden">
          {/*Mobile version */}
          {!isMenuOpen ? 
            (<IoMenu className="text-3xl cursor-pointer" 
            onClick={()=> setIsMenuOpen(true)} /> ):null
          }
        </div>
        
        {isMenuOpen && 
        <div className="fixed inset-0 z-[9999] w-full md:hidden transform bg-neutral-100 overflow-auto ">

          <div className="absolute top-5 right-5">
            <IoClose className="text-2xl cursor-pointer "
            onClick={()=> setIsMenuOpen(false)} />
          </div>
          
          <div className='pt-10 px-5'> 

              {navItems.map((item)=> (
              <NavLink 
              key={item.id}
              to={item.path} 
              onClick={()=>setIsMenuOpen(false)}
              className={({isActive}) => `flex items-center gap-1 p-5 text-lg  font-semibold rounded-lg w-full transition-all hover:text-blue-700 hover:bg-blue-100 text-neutral-600`}
              >
              {item.icon}{item.label}
              </NavLink>
            ))}

            </div>
        </div>}

          {/*Desktop version */}
          <div className='hidden md:block px-6 py-7 '>
            <h1 className='flex justify-start items-center text-xl font-semibold text-blue-700 gap-1 mb-5'>
              <CiBarcode />SpendLens</h1>

            {navItems.map((item)=> (
              <NavLink 
              key={item.id}
              to={item.path} 
              className={({isActive}) => `flex items-center gap-1 p-5 text-lg  font-semibold rounded-lg w-full transition-all ${isActive ? 'text-blue-700 bg-blue-100':'text-neutral-600 ' }`}
              >
              {item.icon}{item.label}
              </NavLink>
            ))}

            <button className='mt-[140px] flex items-center gap-1 p-5 1pb-1 text-lg text-neutral-600 font-semibold hover:text-gray-800'><IoSettingsOutline />Settings</button>
            <button className='flex items-center gap-1 pl-5 -mt-2 text-lg text-red-600 font-semibold hover:text-red-900'><LuLogOut />Log out</button>
        </div>
        
    </main>
  )
}

export default Sidebar