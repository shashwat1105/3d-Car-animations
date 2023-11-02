import React from 'react'
// import img from '/models/dinning_room/secondary_materials/Table/natural-wooden-background.jpg'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/motion'
import { Link } from 'react-router-dom'
import landscape from './images/landscape'

const cardObj=[
{
    room:'Dinning Room',
    img:`${landscape[13]}`,
    link:'/dinning',
    desc:'Dine in Style and Comfort: Create memorable dining experiences with our dining room designs. Explore layouts that combine elegance and coziness, making each meal a special occasion.'
},{
    room:'Bedroom',
    img:`${landscape[3]}`,
    link:'/dinning',
    desc:'Your Serene Sanctuary Awaits: Unwind and rejuvenate in our bedroom designs. Experience the perfect blend of tranquility and style, where every night sleep is a dream'
},{
    room:'Kitchen',
    img:`${landscape[14]}`,
    link:'/dinning',
    desc:'Culinary Excellence Begins Here: Step into our kitchens designed for creativity and convenience. Where culinary adventures and family gatherings thrive.'
},{
    room:'Bathroom',
    img:`${landscape[18]}`,
    link:'/dinning',
    desc:'Indulge in Luxury and Relaxation: Experience the pinnacle of comfort and elegance in our bathroom designs. Elevate your self-care routine in spaces that redefine relaxation.'
},

]
    

const Cards=({index,room,img,link,desc})=>{
    return (
<Tilt options={{
  max:45,
  scale:1,
  speed:450
}} className='w-[300px] h-[400px] mt-4 glass-container rounded-2xl '>
<motion.div variants={fadeIn("up","spring",index*0.5,0.75)} className='p-5' >
<Link to={link}>

<div className='w-full h-[50%] rounded-xl overflow-hidden'>
    <img src={img} className='w-full h-full object-cover '/>


</div>

<div className='w-full h-[50%] '>
    <div className='flex flex-row'>
    <h1 className='dm-sans text-[30px] text-white'>{room}</h1>

    <div className='w-[40px] mt-2 h-[40px] flex border-1 border-black rounded-full ml-6 justify-center items-center text-white  text-[20px] bg-yellow-400 text-center'>
    <i className="fa-solid fa-arrow-right"></i>
    </div>

   </div>
    <p className='mukta text-gray-400 mt-5 '>{desc}</p>
</div>
</Link>

</motion.div>

</Tilt>

    )
}

const Gallery = () => {
  return (
<div className='p-4'>
<div className='pl-5'>
    <h1 className='dm-sans text-[90px]'><span className='text-white'>G</span>alle<span className='text-white'>r</span>y</h1>
<p className='lg:w-[690px] ml-[80px]'> Dive into a world of design possibilities with our gallery of meticulously crafted 3D room models. From cozy bedrooms to modern kitchens, find inspiration for every corner of your dream home</p>
</div>

    <div className='p-3 mt-8 flex justify-evenly flex-wrap gap-3'>
{
    cardObj.map((map,index)=>(

        
        <Cards key={`card-${index}`} index={index} {...map}/>
        )
    )
}
    </div>

</div>

  )
}

export default Gallery