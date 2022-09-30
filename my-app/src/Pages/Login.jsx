import React from 'react'
import './Login.css'
import { Link, Navigate } from 'react-router-dom'

export default function Login() {
  const[gotoHome, setGotoHome]=React.useState(false)

  if(gotoHome){
    alert('Login Successful')
    return (
      <Navigate to='/' />
    )
  }

  return (
    <div className='loginBody' >
      <div className='loginDiv' >
        <Link to='/' style={{ float: 'right', marginRight: '20px', marginTop: '10px' }} > <img width='10px' src="https://www.pngitem.com/pimgs/m/73-736652_multiplication-sign-png-hd-cross-symbol-png-transparent.png" alt="" /></Link>
        <div className='loginTopDiv'>
          <div>
            <h1 >Sign-in</h1>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <p><span>Keep me signed in</span><span style={{ color: '#9060ff', marginLeft: '50px' }} >Forgot Password</span></p>
            <button className='li' onClick={()=>setGotoHome(true)} >Login</button>
            <p style={{margin:'20px 0px',textAlign:'center'}} >-or-</p>
            <button className='lio' >Login via OTP</button>
          </div>
          <div className='loginDiv2'>
          <div>
            <div>
              <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" />
              <span> Google</span>
            </div>
            <div>
              <img src="https://png.pngitem.com/pimgs/s/106-1069530_linkedin-logo-png-linkedin-logo-transparent-png.png" alt="" />
              <span> Linkedin</span>
            </div>
            <div>
              <img src="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_640.png" alt="" />
              <span>Facebook</span>
            </div>
          </div>
        </div>
        </div>
        <div className='loginBotDiv'>
          <h2>Don't have Shine account? </h2>
          <Link to="/register" className='registerBtn' >Register now</Link>
        </div>
      </div>
    </div>
  )
}
