import React from 'react'
import Statusbar from './statusbar'
import {SalesChart} from './SalesPage/SalesDash'
 
const Sales = () => {
  return (
    <div>
        <Statusbar />
        <div className='grid sm:grid-cols-2 px-8 py-3'>          
          <div className='text-primary font-Almarai'>المبيعات</div>
          <SalesChart />
        </div>
    </div>
  )

}      
export default Sales