import React from 'react'

const InventoryHeader = () => {
  return (
    <div className='py-4 flex justify-center font-Almarai'>
        <div className='text-secondary w-32 border border-gray-200 px-5 py-2 rounded-s-md hover:bg-gray-100 hover:text-secondary hover:cursor-pointer text-center'>المخزون</div>
        <div className='text-secondary w-32 border border-gray-200 px-5 py-2 hover:bg-gray-100 hover:text-secondary hover:cursor-pointer border-x-0 text-center'>المستودعات</div>
        <div className='text-secondary w-32 border border-gray-200 px-5 py-2 hover:bg-gray-100 hover:text-secondary hover:cursor-pointer border-e-0 text-center'>العمليات</div>
        <div className='text-secondary w-32 border border-gray-200 px-5 py-2 rounded-e-md hover:bg-gray-100 hover:text-secondary hover:cursor-pointer text-center'>الاعدادات</div>
    </div>
  )
}

export default InventoryHeader