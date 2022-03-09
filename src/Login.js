import React, { useEffect, useState } from "react";
import axios from "axios";
  import {Link } from "react-router-dom";

 export function Login(){
      
    useEffect(()=>{

    },[])
  
  
      const [Email,setEmail]=useState(" ");
      const [Pass,setPass]=useState(" ");




   
         const handleLogin=async (e)=>{
               
          e.preventDefault();
           try{
          var response=await axios.post('http://localhost:5000/login',{
            Email,
            Pass
          }); 

          console.log(response.data) 
          

         }
        catch(e){
          console.log("error",e)
        }
         }
    




    return(
        <div className="wrapper fadeInDown">
        <div id="formContent">
        
      
      
          <div className="fadeIn first">
            <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon"  />
          </div>
      
        
          <form onSubmit={handleLogin}>
            <input type="text" id="login" className="fadeIn second"  placeholder="email" required={true} onChange={e=>setEmail(e.target.value)}  ></input>
            <input type="password" id="password" className="fadeIn third"  placeholder="password" required={true}  onChange={e=>setPass(e.target.value)}  ></input>
            <input type="submit" className="fadeIn fourth" value="Log In"></input>
          </form>
      
          
          <div id="formFooter">
            <Link to={"/ForgotPas"} >Forgot Password?</Link>
            <Link to={"/SignUp"} >SignUp</Link>
          </div>
      
        </div>
        </div>
    )
}