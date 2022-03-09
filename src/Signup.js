import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
export function Signup(){


const[firstname ,setfirstname]=useState(" ");
const[lastname,setlastname]=useState(" ");
const [Email,setEmail]=useState(" ");
const [password,setpassword]=useState(" ")

let navigate=useNavigate();

useEffect(()=>{

},[])

  const handle=async(e)=>{
    e.preventDefault()
    try{
      var send=await axios.post("http://localhost:5000/createuser",{
        Email,
        firstname,
        lastname,
        password
      });
      console.log(send.data);
      alert('Registration Success ,Please Check ur email')
       navigate('/');
       
    
    }catch(err){
      alert('User Exist')
      console.log(err)
      
    }
  }



return(
    <div className="wrapper fadeInDown">
    <div id="formContent">
    
  
  
      <div className="fadeIn first">
        <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon"  />
      </div>
  
    
      <form onSubmit={handle}>
        
      <input type="text" id="login" className="fadeIn second" name="Email" placeholder="email" required={true} onChange={e=>setEmail(e.target.value)} ></input>
      <input type="text" id="login" className="fadeIn second" placeholder="FirstName" required={true} onChange={e=>setfirstname( e.target.value)}></input>
      <input type="text" id="login" className="fadeIn second"  placeholder="LastName" required={true}  onChange={e=>setlastname(e.target.value)} ></input>
        <input type="password" id="password" className="fadeIn third" name="login" placeholder="password" required={true} onChange={e=>setpassword(e.target.value)}></input>
        
        
        <input type="submit" className="fadeIn fourth" value="Log In"></input>
      </form>
  
      
      <div id="formFooter">
        <Link to={"/ForgotPas"} >Have already an account?</Link>
        <Link to={"/"} >LogIn</Link>
      </div>
  
    </div>
    </div>

)
}