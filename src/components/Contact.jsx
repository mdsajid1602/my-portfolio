import React, { useState } from 'react'
import './contact.css'

const Contact = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [contact,setContact]=useState("");
  const [message,setMessage]=useState("");

  const handleData=()=>{
    alert("Thank You");
   

  }

  return (
    <div className='contact'>

      <h1>Get in Touch</h1>
      <div className="data" >
        <label >Name</label>
        <input type="text" placeholder='Enter your name' required/>
        <label >Email</label>
        <input type="email" placeholder='Enter your Email'required/>
        
        <label >Contact</label>
        <input type="text" placeholder='Enter your Contact Number' required/>
        <label >Message</label>
        <textarea rows={5} required></textarea>
        <button onClick={()=>{handleData()}}>Send Message</button>

      </div>
      
    </div>
  )
}

export default Contact
