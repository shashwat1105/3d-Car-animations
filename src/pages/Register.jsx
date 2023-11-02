 import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bcrypt from 'bcrypt';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
 
const salt=bcrypt.genSalt(10);

 const Register = () => {

  const [userEmail,setUserEmail]=useState();
  const [userPassword,setUserPassword]=useState();
  const [confirmPassword,setConfirmPassword]=useState();
  const navigate=useNavigate();

const getEmail=(event)=>{
  const data=event.target.value;
  setUserEmail(data);
  console.log(data);
}

const getPassword=(event)=>{
  const data=event.target.value;
  setUserPassword(data);
  console.log(data);
}

const getConfirmPassword=(event)=>{
  const data=event.target.value;
  setConfirmPassword(data);
}

const checkEmailAndPassword=(e)=>{
  e.preventDefault();

  if(userEmail && userPassword===confirmPassword){

    const hashedPassword=bcrypt.hashSync(userPassword,salt);
    console.log("hash: ",hashedPassword);

    axios.post('http://localhost:8000/register',{userEmail,hashedPassword})
    .then((res)=>{
      console.log(res);
      if(res.data==='exist'){
        toast.error('User already exists.Try login!');
      }
      else if(res.data==='notexist'){
        toast.success("Successfully Registered!");
        navigate('/home');
      }
    })
  }
  else if(userEmail===''){
    toast.error("Enter the email");
    console.log("error occureed.");
  }
  else if(userEmail=='' || userPassword.length<4){
    toast.error("Password must be atleast 4 charachter!")
  }
  else if(userPassword!==confirmPassword){
    toast.error("Password doesn't match!")
  }
}

   return (
    <div className='w-[100%] h-[100vh] border-black border-2 flex justify-center items-center bg-[#88a593] '>
    
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    
    <div className='h-[85vh] w-[330px]  flex justify-center items-center text-center  rounded-[18px] p-1 flex-col bg-[#afbab3]'>
    
    
    <div className=' h-[25%] text-14 w-full mt-[20px]'>
    <h1 className='text-[#89a494] text-[40px] text-bold' style={{fontFamily:'Anton,sans-serif',gap:'5px'}} > Register here  </h1>
    </div>
    <div className=' h-[75%] p-4 w-[100%] mb-3'>
      <form className='w-[100%]'>
    <input type='email' value={userEmail} onChange={getEmail} placeholder='Enter Email' className='login' style={{border:'none',outline:'none'}}/>
    <input type='password' value={userPassword} onChange={getPassword} placeholder='Enter Password' className='login' style={{border:'none',outline:'none'}}/>
    <input type='password ' value={confirmPassword} onChange={getConfirmPassword} placeholder='Confirm Password' className='login' style={{border:'none',outline:'none'}}/>
    <br/>
    <button className='border-1 border-black button bg-[#89a494]' onClick={checkEmailAndPassword}>Register</button>
      </form>
    
      <div className='textbox mt-4'>
    New User ?<Link to='/register' style={{textDecoration: 'none'}}> <span>Register</span></Link>
      </div>
    </div>
    </div>
    
         </div>
   )
 }
 
 export default Register