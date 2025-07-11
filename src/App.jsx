import { useState } from 'react'
import Dashboard from "../src/pages/Dashboard"
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Budgets from "../src/pages/Budgets"
import Expenses from "../src/pages/Expenses"
import FinAi from "../src/pages/FinAi"
import { DataProvider } from './context/DataContext'


function App() {


  return (
    <main className='bg-stone-200'>
   
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/budgets" element={<Budgets />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/finai" element={<FinAi />} />
      </Routes>
      
    </main>
  )
}

export default App
