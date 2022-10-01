import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import SalesAnsMarketingCards1,{SalesAnsMarketingCards2} from "../Components/Courses/SalesAnsMarketingCards"
import Footer from '../Components/Footer/Footer';


export default function SalseandMarketing() {
  return (
    <div>
        <Navbar/>
        <div className='speace' ></div>
        <h1 style={{fontSize:'19px',fontWeight:'500',margin:'20px 80px'}} >151 Courses Found</h1>
        <SalesAnsMarketingCards1/>
        <h1 style={{fontSize:'35px',marginLeft:'70px',fontWeight:'500',margin:'30px 0px 30px 70px'}} >Shine Advantage</h1>
        <div style={{display:'flex',width:'85%',margin:'auto',gap:'30px',marginBottom:'30px'}} >
          <img width='50%' src="https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fimages%2Fhomepage%2Fbanner%2FFanatical_support_for_outcome.png&w=1080&q=75" alt="" />
          <img width='50%' src="https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fimages%2Fhomepage%2Fbanner%2FJob_Assistance.png&w=1080&q=75" alt="" />
        </div>
        <SalesAnsMarketingCards2/>
        <Footer/>
    </div>
  )
}
