import React from 'react'
import './login.css'
import teaser from './square_teaser.mp4'
import ccslogo from "./ccs.png"

export default function Login() {


  return (
    <div className='d-flex logincont'>
      
      <div className="videocont">
        <video loop autoPlay muted>
          <source src={teaser} type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="caption">
          <img src={ccslogo} alt="CCS" width={'100px'} />
          <h6 className='mt-1 tag'>PRESENTS</h6>
          <h1 className='title mt-2'>RAPTUS</h1>
        </div>
      </div>
      <div className="login">
        <div className='d-flex flex-column w-100 justify-content-center align-items-center h-100'>

          <h1 className='audio'>LOGIN</h1>
          <hr className='seperator' />

          <form action="" className='d-flex flex-column align-items-center mt-3'>
            <input type="text" placeholder='EMAIL' />
            <input type="password" placeholder='TEAM PASSWORD' />
            <div className='mt-5'>
              <label htmlFor="">Got a hidden code?</label>
              <input type="checkbox" name="" className='cb'/>
            </div>
            <input type="text" placeholder='HIDDEN CODE' />
            <button type="submit" className='w-100 mt-5'>SUBMIT</button>
          </form>

        </div>
      </div>
    </div>
  )

  
}
