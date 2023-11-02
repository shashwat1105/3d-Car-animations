import React from 'react'
import Navbar from '../components/HomeComponents/Navbar'
import Hero from '../components/HomeComponents/Hero'
import Mid from '../components/HomeComponents/Mid'
import Gallery from '../components/HomeComponents/Gallery'
import LastSec from '../components/HomeComponents/LastSec'

const Home = () => {
  return (
    <div className='home-first w-[100%] h-[100%] '>
<Navbar/>
<Hero/>
<Mid/>
<Gallery/>
<LastSec/>
    </div>
  )
}

export default Home