import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import MainPage from './components/MainPage'
import Inventory from './components/inventory'
import Accounting from './components/accounting'
import Hr from './components/hr'
import Payroll from './components/payroll'
import Purchase from './components/purchase'
import Sales from './components/sales'
import Operations from './components/operations'
import Services from './components/services'
import Settings from './components/settings'


function App() {
  const [count, setCount] = useState(0)
  return (
      <div style={{direction: 'rtl'}}>
        <Navbar />
          <Routes className='flex flex-wrap m-auto'>
            <Route path='/'            element={<MainPage />}></Route>
            <Route path='inventory/'   element={<Inventory />}></Route>
            <Route path='accounting/'  element={<Accounting />}></Route>
            <Route path='hr'           element={<Hr />}></Route>
            <Route path='payroll'      element={<Payroll />}></Route>
            <Route path='purchase'     element={<Purchase />}></Route>
            <Route path='sales'        element={<Sales />}></Route>
            <Route path='operations'   element={<Operations />}></Route>
            <Route path='services'     element={<Services />}></Route>
            <Route path='settings'     element={<Settings />}></Route>
          </Routes>
      </div>
 
  )
}

export default App
