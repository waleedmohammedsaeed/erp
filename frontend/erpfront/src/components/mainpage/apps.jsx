import React from 'react'
import FontAwesomeIcon from './fontAweome'
import { Refe } from '../styled/styled'
import { Link } from 'react-router-dom'
import { TextItem } from '../styled/styled'
const items = ['الحسابات', 'المخزون', 'الموارد البشرية', 'المرتبات', 'المشتريات', 'المبيعات', 'العمليات', 'الخدمات', 'الاعدادات']
const images = ['acc.png', 'stock.png', 'hhr.png', 'pays.png', 'purchase.png', 'mySales.png', 'mySalse', 'setting']
const wraps = ['a', 'b', 's', 'd', 'e', 'e', 'f', 'g', 'h']
const Apps = () => {
  return (
    <>
        <div className='flex content-evenly flex-wrap w-full h-full bg-gray-50 py-3 shadow-sm border border-gray-200 px-12'>
            <Link to='accounting'>
                <Refe className='text-decoration-none hover:shadow-lg hover:cursor-pointer w-32 m-auto p-3 box-border hover:bg-white'>
                    <img src="../../../public/images/acc.png" alt="accounting" className='w-10 m-auto'/>
                    <h2 className='text-blue-500 text-md text-center fontmarari'>الحسابات</h2>
                </Refe>
            </Link>
            <Link to='inventory'>
                <Refe className='text-decoration-none hover:shadow-lg hover:cursor-pointer w-32 m-auto p-3 box-border hover:bg-white'>
                    <img src="../../../public/images/stock.png" alt="inventory" className='w-10 m-auto'/>
                    <h2 className='text-blue-500 text-md text-center fontmarari'>المخزون</h2>
                </Refe>
            </Link>
            <Link to='hr'>
                <Refe className='text-decoration-none hover:shadow-lg hover:cursor-pointer w-32 m-auto p-3 box-border hover:bg-white'>
                    <img src="../../../public/images/hhr.png" alt="hr" className='w-10 m-auto'/>
                    <h2 className='text-blue-500 text-md text-center fontmarari'>الموارد البشرية</h2>
                </Refe>
            </Link>
            <Link to='payroll'>
                <Refe className='text-decoration-none hover:shadow-lg hover:cursor-pointer w-32 m-auto p-3 box-border hover:bg-white'>
                    <img src="../../../public/images/pays.png" alt="Payroll" className='w-10 m-auto'/>
                    <h2 className='text-blue-500 text-md text-center fontmarari'>المرتبات</h2>
                </Refe>
            </Link>
            <Link to='purchase'>
                <Refe className='text-decoration-none hover:shadow-lg hover:cursor-pointer w-32 m-auto p-3 box-border hover:bg-white'>
                    <img src="../../../public\images\purchase..png" alt="purchase" className='w-10 m-auto'/>
                    <h2 className='text-blue-500 text-md text-center fontmarari'>المشتريات</h2>
                </Refe>
            </Link>
            <Link to='sales'>
                <Refe className='text-decoration-none hover:shadow-lg hover:cursor-pointer w-32 m-auto p-3 box-border hover:bg-white'>
                    <img src="../../../public/images/mySales.png" alt="sales" className='w-10 m-auto '/>
                    <h2 className='text-blue-500 text-md text-center fontmarari'>المبيعات</h2>
                </Refe>
            </Link>
            <Link to='operations'>
                <Refe className='text-decoration-none hover:shadow-lg hover:cursor-pointer w-32 m-auto p-3 box-border hover:bg-white'>
                    <img src="../../../public/images/operations.png" alt="operations" className='w-10 m-auto '/>
                    <h2 className='text-blue-500 text-md text-center fontmarari'>العمليات</h2>
                </Refe>
            </Link>
            <Link to='services'>
                <Refe className='text-decoration-none hover:shadow-lg  hover:cursor-pointer w-32 m-auto p-3 box-border hover:bg-white'>
                    <img src="../../../public/images/service.png" alt="services" className='w-10 m-auto '/>
                    <h2 className='text-blue-500 text-md text-center fontmarari'>الخدمات</h2>
                </Refe>
            </Link>
            <Link to='settings'>
                <Refe>
                    <img src="../../../public/images/CRM.png" alt="settings" className='w-10 m-auto '/>
                    <h2 className='text-blue-500 text-md text-center fontmarari'>علاقات العملاء</h2>
                </Refe>
            </Link>
        </div>
    </>

  )
}
<style>



</style>

export default Apps