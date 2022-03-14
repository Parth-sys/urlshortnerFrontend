import React, { useState,useEffect } from "react";
import axios  from "axios";

function Urlshort(){

const [url,seturl]=useState(" ");
const [small,setsmall]=useState([]);


useEffect(()=>{
getshorturl()
},[])


const  handlesub= async(e)=>{
      e.preventDefault();
      try {
          var response= await axios.post("http://localhost:5000/short",{
              url
          })
          
         console.log(response) ;
      } catch (error) {
          console.log(error);
      }
   
      getshorturl()
  }



const getshorturl=async()=>{
    try {
        fetch('http://localhost:5000/url')
        .then(response => response.json())
        .then((data) => setsmall(data));

    } catch (error) {
        
    }
}





  
    return(
        <div className="container">

          <h3>URl Shortner</h3>   
         <form onSubmit={handlesub} className="my-4 form-inline"> 

        <input type="url"  placeholder="url" className="form-control" onChange={e=>seturl(e.target.value)}></input>

       <button type="submit"  id="submit" className="btn btn-success" >Shrink </button>
        </form>

          <table className="table table-striped table-responsive" >
             <thead>
                 <tr>
                     <th>
                         Full url
                     </th>
                     <th>Short url</th>
                    <th>Count</th> 
                 </tr>

             </thead>
        <tbody>
                {small.map((s,index)=>(
                  console.log(s),
            <tr key={index}>
                <td >
                  <a href={s.url}>{s.url}</a>  
                </td>
                <td>
                  <a href={s.url} > {s.smallurl}</a>  
                </td>
                <td>
                {s.click}
                </td>
            </tr>
                ))}

        </tbody>

          </table>

        </div>
    )
}
export default Urlshort