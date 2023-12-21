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
    </div>
  )
}

export default Inventory