import React from 'react'
import Statusbar from './statusbar'
import {InventoryDash} from './InventoryPage/InventoryDash'
import InventoryHeader from './inventoryPage/inventoryHeader'

const Inventory = () => {
  return (
    <div>
        <Statusbar />
        <InventoryHeader />
        <InventoryDash />
        {/* <div className='h-20 bg-gray-500 text-white px-8 absolute bottom-0'>Footer</div> */}
    </div>
  )
}

export default Inventory