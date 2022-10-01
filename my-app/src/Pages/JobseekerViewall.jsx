import React from 'react'
import JobSeekerViewAllfirst, { JobSeekerViewAllsecond, JobSeekerViewAllthird , JobSeekerViewAllfourth,JobSeekerViewAllFifth } from '../Components/JobSeekerViewAll/JobSeekerViewAllCards'
import Navbar from "../Components/Navbar/SecondaryNavbar"
import HomeCardCrowser4 from "../Components/CardCrowsers/HomeCardCrowser4"
import Footer from '../Components/Footer/Footer';

export default function JobseekerViewall() {
    return (
        <div>
            <Navbar />
            <div className='speace' ></div>
            <h1 className='JobSeekerViewAllheading' >Get More Attention of Recruiters on Job Applications</h1>
            <JobSeekerViewAllfirst />
            <h1 className='JobSeekerViewAllheading'  >Get More Profile Views in Recruiter Searches</h1>
            <JobSeekerViewAllsecond />
            <h1 className='JobSeekerViewAllheading' >Impress Recruiters with a Professional Resume</h1>
            <JobSeekerViewAllthird />
            <div style={{display:'flex',alignItems:'center',margin:'20px 100px'}} >
                <img  width='70px' src="https://cdn3.vectorstock.com/i/thumb-large/16/62/time-watch-sign-logo-vector-23011662.jpg" alt="" />
                <p >Get a free review of your resume in just 60 <span style={{ color: '#9060ff',fontWeight: 'bold' }} >secondsCheck Resume Scrore</span></p>
            </div>
            <h1 className='JobSeekerViewAllheading' >Get Handpicked Jobs Customised for You</h1>
            <JobSeekerViewAllfourth/>
            <h1 className='JobSeekerViewAllheading' >Combos For You</h1>
            <JobSeekerViewAllFifth/>
            <h1 className='JobSeekerViewAllheading' >More Services to Help You Get a Dream Job</h1>
            <HomeCardCrowser4/>
            <Footer/>
        </div>
    )
}
