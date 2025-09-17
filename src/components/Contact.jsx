import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='contact'>

      <h1>Get in Touch</h1>
      <div className="data">
        <label >Name</label>
        <input type="text" placeholder='Enter your name'/>
        <label >Email</label>
        <input type="email" placeholder='Enter your Email'/>
        
        <label >Contact</label>
        <input type="text" placeholder='Enter your Contact Number'/>
        <label >Message</label>
        <textarea rows={5}></textarea>
        <button>Send Message</button>

      </div>
      
    </div>
  )
}

export default Contact
