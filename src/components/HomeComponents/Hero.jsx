import React from 'react'
import  img from '/models/dinning_room/secondary_materials/Floor/floor_tiles_04_diff_4k.png'
import img2 from '/models/dinning_room/secondary_materials/Floor/old-ceramic-tiles-with-classic-pattern-laid-background-texture-wallpaper-presentation-splash-screen-advertising.jpg'
import portrait from './images/portrait'
import landscape from './images/landscape'
const Hero = () => {
  return (
    <div className='flex lg:flex-row flex-col px-3 pt-12 justify-center gap-2'>

<div className='w-full flex flex-col pl-12 '>
<div className='text-left mb-4'>
    <p className='mukta text-[20px] font-500  w-[430px] leading-0 '>Make the most of compact spaces with 
        space saving furniture that are 
        ingenuous and innovative  </p>
</div>


<div className='flex flex-row px-3'>

    <div className='w-[300px] text-white h-[300px] rounded-full overflow-hidden'>
        <img className='w-full h-full object-cover' src={landscape[3]} alt='photo1'/>
    </div>
    <div className=' semicircle w-[300px] h-[300px] relative overflow-hidden right-[100px]'>
        <img className='w-[200px] h-full  object-cover ml-[110px]' src={portrait[5]} alt='photo1'/>
    </div>
</div>

<div className='ml-[30px]'>
    <h1 className='dm-sans gap-0 p-0 text-[90px] text-white relative bottom-[70px] leading-1 w-[300px]'>Interior </h1>
    <h1 className='dm-sans gap-0 p-0 text-[90px] relative bottom-[70px] leading-1 w-[300px]'>Design</h1>
    <p className=' text-gray-500  ml-9 font-medium text-[20px] mukta mt-0 relative bottom-[70px] '>Luxury interior collection with premium 
        quality products and better prices. All this for u at one
        place to customize your dream home the way you want. </p>
</div>

</div>
<div className='w-full'>
<div className=''>
<h1 className='lg:text-gray-400 sm:text-gray-500 text-[90px] lobster'>01</h1>
<h3 className='font-semibold mukta text-[26px] mb-2'>Our description</h3>
<p className='dm-sans  text-[30px] '>We will make your dreams
    comes to life!
</p>
</div>

<div className='flex felx-row pt-5 justify-center items-center gap-5'>
<div className='mt-0 pt-0'>

<div className='w-[170px] h-[400px] rounded-full border-2 overflow-hidden'>
<img src={portrait[10]} className=' w-full h-full object-cover'/>
</div>
</div>

<div className='pt-[100px]'>

<div className='w-[170px] overflow-hidden h-[400px] rounded-full border-2'>
<img src={portrait[7]} className='w-full h-full object-cover'/>
</div>
</div>

</div>
</div>
    </div>
  )
}

export default Hero