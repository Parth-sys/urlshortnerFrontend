import React from "react";
import { useState } from "react";
import axios from 'axios';
export function ForgotPas(){


    const [Password,setPassword]=useState(" ");

    const handlePass=async(e)=>{
        e.preventDefault()
        try{
          var send=await axios.post("http://localhost:5000/verify",{
            Password,
            
          });
          console.log(send.data);
        
        
        }catch(err){
          console.log(err)
        }
      }
    

    return(
        <div className="wrapper fadeInDown">
        <div id="formContent">

           <form onSubmit={handlePass}>
            <input type="Password" id="login" className="fadeIn second" name="Email" placeholder="name" required={true} onChange={e=>setPassword(e.target.value)}></input>
            <input type="submit" className="fadeIn fourth" value="Verify"></input>
            </form>

            </div>
        </div>
    )
}