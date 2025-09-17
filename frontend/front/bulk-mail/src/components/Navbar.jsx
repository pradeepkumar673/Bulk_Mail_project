import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='w-full h-12 shadow-black shadow-2xl bg-black fixed top-0 left-0 backdrop-blur-lg'>
        <div className='text-white text-2xl font-bold flex items-center mx-4 justify-between mt-1'>
          <img src='/light.svg' alt='logo' className='w-10 h-auto mr-2' />
          <p className='text-white text-xl' style={{ fontFamily: "Shadows Into Light Two" }}>PradeepMails</p>
        
        </div>
      </div>
    </>
  )
}

export default Navbar