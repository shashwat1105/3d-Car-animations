 
 import axios from 'axios';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import validator from 'validator'

 
 const Login = () => {

const [userMail,setUserMail]=useState('');
const [userPassword,setUserPassword]=useState('');
const navigate=useNavigate();

const getMail=(event)=>{
  const data=event.target.value;
  setUserMail(data)
  console.log(data);
}
const getPassword=(event)=>{
  const data=event.target.value;
  setUserPassword(data)
  console.log(data);
}

const checkMailAndPassword=(e)=>{
  e.preventDefault();

if(validator.isEmail(userMail) && userPassword){

  axios.post('http://localhost:8000/',{userMail,userPassword})
  .then((res)=>{
    console.log(res);

    if(res.data==='exist'){
      toast.success("Welcome Back!");
      navigate('/home');
    }
    else if(res.data==='notexist'){
      toast.error("User doesn't exist.Regsiter first!");
      console.log("errrorr!!!");
    }
  })
  .catch((err)=>{
    toast.error("Some error occured!");
    console.log(err);
  })

}
else if(!validator.isEmail(userMail)){
  toast.error("Enter valid Email...");
}
else if(userPassword.length<4){
  toast.error("Password too short!");
}
else if(userMail===''&& userPassword===''){
  toast.error("Enter valid data!")
}

}

   return (
    
     <div className='w-[100%] h-[100vh] border-black border-2 flex justify-center items-center home-first'>
<Toaster
  position="top-center"
  reverseOrder={false}
/>
<div className='h-[85vh] w-[375px]  flex justify-center items-center text-center glass2 rounded-[2.5rem] p-1 flex-col  '>


<div className=' h-[25%] text-14 w-full mt-[70px]'>
<h1 className='text-[#89a494] text-[55px] text-bold' style={{fontFamily:'Anton,sans-serif',gap:'5px'}} > Login here  </h1>
</div>
<div className=' h-[75%] p-4 w-[100%] mb-3'>
  <form className='w-[100%]'>
<input type='email' value={userMail} onChange={getMail} placeholder='Enter Email' className='login' style={{border:'none',outline:'none',fontSize:'20px'}}/>
<input type='password ' value={userPassword} onChange={getPassword} placeholder='Enter password' className='login' style={{border:'none',outline:'none',fontSize:'20px'}}/>
<br/>
<button className='border-1 w-[160px] h-[50px]  border-black button bg-[#89a494]' onClick={checkMailAndPassword}>Login</button>
  </form>

  <div className='textbox mt-4'>
New User ?<Link to='/register' style={{textDecoration: 'none'}}> <span>Register</span></Link>
  </div>
</div>
</div>

     </div>
   )
 }
 
 export default Login