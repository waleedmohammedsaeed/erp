import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex content-between px-3 shadow py-3 bg-gray-50 h-24 gap-x-3'>
        <h1 className='text-green-600'>
            <img src="../public/images/logo.png" alt="logo" width={50} height={50} className='bg-white'/>
        </h1>
        <div className='flex flex-col flex-1 justify-between'>
          <div className='flex align-self-center'>
            <div className='flex m-auto gap-x-4 justify-self-auto'>
                <img src='../public/images/facebook.png' width={15} height={25} />
                <img src='../public/images/twitter.png' width={15} height={25} />
                <img src='../public/images/youtube.png' width={15} height={25} />
            </div>
            <div className='flex justify-self-end gap-x-3'>
                <img src='../public/images/emailus.png' width={15} height={25} />
                <img src='../public/images/setting.png' width={15} height={25} />
            </div>
          </div>
            <div className='flex justify-evenly gap-x-3 items-bottom'>
              <div className='flex content-center flex-1'>
                    <a href='#'>waleed</a>
              </div>
              <div className='flex justify-end flex-1'>
                    <a href='#' className='float-right text-blue-500'>تسجيل الدخول</a>
              </div>
            </div>
        </div>
    </nav>

  )
}

export default Navbar