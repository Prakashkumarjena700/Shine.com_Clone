import React from 'react'
import './CurrerGuidance.css'

export default function CurrerGuidance() {
  return (
    <div>
      <div className='navBar' >
        <div className='navBarfirst' >
          <img src="https://static1.shine.com/l/m/vendor/1/1565168164_5076.jpg" alt="" />
        </div>
        <div className='navBarsecond' >
          <div className='inputBox' >
            <input type="text" placeholder='Search Courses' />
            <img src="data:image/png;base64,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" alt="" />
          </div>
          <p>Job assistance</p>
          <p>Practice test</p>
          <p>Free resources</p>
          <p>Blog</p>
          <img src="https://www.pngitem.com/pimgs/m/87-877270_logo-icon-profile-png-transparent-png.png" alt="" />
          <img src="https://thumbs.dreamstime.com/b/call-icon-vector-noisy-phone-flat-calling-symbol-isolated-white-background-illustration-171294117.jpg" alt="" />
          <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png" alt="" />
        </div>
      </div>
      <div className='CurrerDiv2' >
        <p>Catagory</p>
        <p>Digital Marketing</p>
        <p>Six Sigma</p>
        <p>Project Management</p>
        <p>Big Data</p>
        <p>IT Software</p>
        <p>Data Science</p>
        <p>Analytic Vidya</p>
      </div>
      <div className='CurrerDiv3' > </div>
    </div>
  )
}
