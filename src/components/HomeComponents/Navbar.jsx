import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[60px] border-1 border-black flex flex-row justify-between items-center px-4'>
<div className=''>
    <h2 className='lobster text-[36px]'>Enterior</h2>
</div>
<div className='flex flex-row gap-7 varela text-[20px] text-gray-500'>
    <div>
        <p>Home</p>
    </div>
    <div>
        <p>About</p>
    </div>
    <div>
        <p>Our Gallery</p>
    </div>
    <div>
        <p>Services</p>
    </div>
</div>
<div className='h-[35px]'>
    <button className='h-[45px] bg-[#000000] text-white text-[18px] rounded-[2.5rem] px-4'>Contact Us</button>
</div>

    </div>

    
  )
}

export default Navbar