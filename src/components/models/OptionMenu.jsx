import { Html } from '@react-three/drei'
import React, { useState } from 'react'

const OptionMenu = ({setComponentSelect,componentSelect}) => {

    // const[hello,setHello]=useState(-1);
    const handleClick1=(event)=>{
        event.preventDefault();
        // event.stopPropogation();
        setComponentSelect(0);
        console.log("OptionsMenu",componentSelect);
    }
    const handleClick2=(event)=>{
        event.preventDefault();
        // event.stopPropogation();

        setComponentSelect(1);
        console.log("OptionsMenu",componentSelect);
    }
    const handleClick3=(event)=>{
        event.preventDefault();
        // event.stopPropogation();

        setComponentSelect(2);
        console.log("OptionsMenu",componentSelect);
    }
    const handleClick4=(event)=>{
        event.preventDefault();
        // event.stopPropogation();

        setComponentSelect(3);
        console.log("OptionsMenu",componentSelect);
    }



 
  return (
    <Html position={[0,0,0]}>
        <div className='h-[180px] w-[100px] flex flex-col justify-center items-center border-[2px] border-black p-2'>
         <div>
           <button onClick={handleClick1}>Floor</button><br/>
           <button onClick={handleClick2}>Chair</button><br/>
           <button onClick={handleClick3}>Table</button><br/>
           <button onClick={handleClick4}>Cabinet</button>
         </div>
        </div>
    </Html>
  )
}

export default OptionMenu