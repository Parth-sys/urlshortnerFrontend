import React from "react";
import { useState } from "react";
import axios from 'axios';
export function ForgotPas(){


    const [Email,setEmail]=useState(" ");

    const handleEmail=async(e)=>{
        e.preventDefault()
        try{
          var send=await axios.post("http://localhost:5000/verify",{
            Email,
            
          });
          console.log(send.data);
        
        
        
        
        }catch(err){
          console.log(err)
        }
      }
    

    return(
        <div className="wrapper fadeInDown">
        <div id="formContent">

           <form onSubmit={handleEmail}>
            <input type="email" id="login" className="fadeIn second" name="Email" placeholder="name" required={true} onChange={e=>setEmail(e.target.value)}></input>
            <input type="submit" className="fadeIn fourth" value="Verify"></input>
            </form>

            </div>
        </div>
    )
}