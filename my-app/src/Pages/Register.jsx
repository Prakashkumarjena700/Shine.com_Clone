import React from 'react'
import './Register.css'
import { Navigate } from "react-router-dom";

export default function Register() {
  const [gologinPage, setGologinPage] = React.useState(false)



  if (gologinPage) {
    alert('Register successful')
    return <Navigate to="/login" />
  }

  return (
    <div>
      <div >
        <div className='RegnavTop' >
          <p>Download App</p>
          <p>For Employers</p>
          <p>Help</p>
        </div>
        <div className='RegnavBot' >
          <img width='70px' src="https://www.shine.com/next/static/images/shine-logo.png" alt="" />
        </div>
      </div>
      <div className='formDiv' >
        <div className='formDiv1' >
          <h1>Register Now</h1>
          <p>Autofill by Resume  <span style={{ marginLeft: '66px', color: '#9060ff', fontWeight: '600', fontSize: '15px' }} >Upload</span></p>
          <p style={{ fontSize: '10px', color: 'gray', textAlign: 'center', marginTop: '5px' }} >File Supported: pdf, doc, docx, rtf, txt - Max. 5 MB</p>
          <p style={{ color: 'gray', textAlign: 'center', margin: '10px 0px', fontSize: '14px' }} >----------------- <span style={{ color: 'black' }} >or Register Manually</span> --------------</p>
          <div className='inputDiv'>
            <input type="text" placeholder='Name*' />
            <input type="text" placeholder='Mobile*' />
            <input type="text" placeholder='Email*' />
            <input type="Email" placeholder='Location*' />
            <p className='extraInfo'>*Password link will be sent to this email</p>
            <input type="text" placeholder='Experience/Fresher*' />
            <input type="text" placeholder='highest Qualification' />
            <input style={{ width: '96%' }} type="text" placeholder='Skills*' />
            <p className='extraInfo'>*Add atleast 3 relevant skills</p>
          </div>
          <p style={{ border: '1px solid #9060ff', display: 'inline-block', marginLeft: '37%', padding: '3px 20px', borderRadius: '3px',marginTop:'20px' }} >Upload Resume</p>
          <p style={{ fontSize: '10px', color: 'gray', textAlign: 'center', margin: '5px 0px' }} >File Supported: pdf, doc, docx, rtf, txt - Max. 5 MB</p>
          <p style={{ fontSize: '12px', marginLeft: '10%' }} > <input type="checkbox" /> I agree to <span style={{ color: '#9060ff' }} >Terms & Conditions</span> and <span style={{ color: '#9060ff' }} >Privacy policy </span>& Receive jobs notifications</p>
          <button style={{ backgroundColor: '#9060ff', color: 'white', padding: '5px 15px', fontWeight: 'bold', margin: '10px 0px 10px 42%', borderRadius: '3px' }} onClick={() => setGologinPage(true)} >Register</button>
        </div>
        <div className='formDiv2'>
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
    </div>
  )
}
