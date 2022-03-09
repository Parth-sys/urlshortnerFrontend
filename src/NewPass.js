import React from "react";
import { useState } from "react";
import axios from 'axios';


export function Newpass(){


    const [Password,setPassword]=useState(" ");

    const handlePass=async(e)=>{
        e.preventDefault()
        try{
          var send=await axios.put("http://localhost:5000/activate",{
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
            <input type="Password" id="login" className="fadeIn second" name="Email" placeholder="new password" required={true} onChange={e=>setPassword(e.target.value)}></input>
            <input type="submit" className="fadeIn fourth" value="set"></input>
            </form>

            </div>
        </div>
    )
}

export default Newpass;