import React from 'react'
import  img from '/models/dinning_room/secondary_materials/Floor/floor_tiles_04_diff_4k.png'
import img2 from '/models/dinning_room/secondary_materials/Floor/old-ceramic-tiles-with-classic-pattern-laid-background-texture-wallpaper-presentation-splash-screen-advertising.jpg'
import landscape from './images/landscape'
import portrait from './images/portrait'

const Mid = () => {
  return (
    <div className='flex lg:flex-row flex-col px-3 pt-12 justify-center gap-2'>
<div className='w-full flex flex-col pl-12 '>
<div className='text-left mb-4'>
    <p className='mukta text-[22px] font-500  w-[500px] leading-0 '>
    <span className='text-white '>Transform Your Space:</span> Discover a world of possibilities for your home with our interior decor website.  </p>
</div>


<div className='flex flex-row px-3'>

    <div className='w-[700px] text-white h-[400px] second-img  overflow-hidden'>
        <img className='w-full h-full object-cover ' src={landscape[0]} alt='photo1'/>
    </div>
    
</div>

<div className='ml-[30px]'>
    <h1 className='dm-sans gap-0 p-0 text-[100px] relative bottom-[230px] text-white left-[-190px] leading-1 w-[320px] circus'>Interior</h1>
    <h1 className='dm-sans gap-0 p-0 text-[100px] relative bottom-[180px] leading-1 w-[300px]'> Design</h1>
    <p className=' text-gray-500  ml-9 font-medium text-[20px] mukta mt-0 relative bottom-[70px] '>
    Create a personalized, stylish sanctuary by customizing every detail, from furniture to color schemes, with our easy-to-use 3D design tools
 </p>
</div>

</div>

<div className='w-full'>
<div className=''>
<h1 className='lg:text-gray-300 sm:text-gray-500 text-[90px] lobster'>02</h1>
<h3 className='font-semibold mukta text-[26px] mb-2'>Our description</h3>
<p className='dm-sans  text-[30px] '>Realize Your Unique Style at Your Fingertips!
    
</p>
</div>

<div className='flex flex-row pt-5 justify-center items-center gap-5'>
<div className='mt-0 pt-0'>

<div className='w-[170px] h-[400px] overflow-hidden border-2 left-set'>
<img src={portrait[7]} className=' w-full h-full object-cover '/>
</div>
</div>

<div className='pt-[100px]'>

<div className='w-[170px] h-[400px] overflow-hidden left-set  border-2'>
<img src={portrait[1]} className='w-full left-set h-full object-cover '/>
</div>
</div>

</div>
</div>



    </div>
  )
}

export default Mid