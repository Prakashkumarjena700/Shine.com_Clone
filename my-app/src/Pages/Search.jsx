import React from 'react'
import './jobs.css'
import Navbar from '../Components/Navbar/SecondaryNavbar'
import Footer from "../Components/Footer/Footer"

export default function Search() {
  return (
    <div>
      <Navbar />
      <div className='speace' ></div>
      <div>
        <h1 className='SearchH1' >Search Your Dream Job</h1>
        <div className='searchInputBox' >
          <input type="text" placeholder='Job title,skills' />
          <input type="text" placeholder='Location' />
          <input type="text" placeholder='Experience' />
          <input type="number" placeholder='Salary(Lakh/Year)' />
          <input type="text" placeholder='Department' />
          <input type="text" placeholder='Industry' />
          <button>Search jobs</button>
        </div>
      </div>
      <div className='SearchFirstFlex' >
        <div  >
          <img width='90px' src="https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg" alt="" />
          <p>Create Job  Profile</p>
        </div>
        <div>
          <img width='90px' src="https://thumbs.dreamstime.com/b/laptop-job-notification-outline-icon-laptop-job-notification-outline-icon-linear-style-sign-mobile-concept-web-120759198.jpg" alt="" />
          <p>Create Job Alert</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
