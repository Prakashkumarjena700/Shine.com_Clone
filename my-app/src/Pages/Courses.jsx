import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Apps from "../Components/Crowser/Crowser"
import "../Components/Courses/Courses.css"
import HomeCardCrowser5 from "../Components/CardCrowsers/HomeCardCrowser5"
import SalesAnsMarketingCards1 from "../Components/Courses/SalesAnsMarketingCards"
import HomeCardCrowser6 from "../Components/CardCrowsers/HomeCardCrowser6"
import Footer from '../Components/Footer/Footer';


export default function Courses() {
    return (
        <div>
            <Navbar />
            <div className='speace' ></div>
            <Apps />
            <div className='coursesFirstFlex' >
                <div style={{ backgroundColor: '#9cece0' }} >
                    <img src="https://icon-library.com/images/skill-icon/skill-icon-3.jpg" alt="" />
                    <p>Explore By <strong>Skills</strong></p>
                </div>
                <div style={{ backgroundColor: '#ffced7' }} >
                    <img src="https://icon-library.com/images/category-icon-png/category-icon-png-14.jpg" alt="" />
                    <p>Explore By <strong>Category</strong></p>
                </div>
                <div style={{ backgroundColor: '#99e1ff' }} >
                    <img src="https://www.pinclipart.com/picdir/big/540-5407680_call-logo-png-file-face-clipart.png" alt="" />
                    <p>Talk to <strong>Expert</strong></p>
                </div>
            </div>
            <h1 className='heading' >Aspire to Senior Roles in Career</h1>
            <h1 style={{ textAlign: 'center', fontSize: '20px' }} >Explore how to reach there</h1>
            <div style={{ width: '80%', margin: 'auto' }} >
                <div className='coursesGrid'>
                    <div height='80px'>
                        <img width='30px' src="https://www.pngitem.com/pimgs/m/642-6422887_manager-manager-icon-png-transparent-png.png" alt="" />
                        <p>Chief Technology Officer</p>
                    </div>
                    <div height='80px'>
                        <img width='30px' src="https://cdn-icons-png.flaticon.com/512/76/76828.png" alt="" />
                        <p>Data Science Head</p>
                    </div>
                    <div height='80px'>
                        <img width='30px' src="https://icons.veryicon.com/png/o/system/dan_system/manager-1.png" alt="" />
                        <p>Chief Marketing Officer</p>
                    </div>
                    <div height='80px'>
                        <img width='30px' src="https://cdn2.iconfinder.com/data/icons/person-gender-hairstyle-clothes-variations/48/Female-Bangs-Suit-512.png" alt="" />
                        <p>Chief Product Officer</p>
                    </div>
                    <div height='80px'>
                        <img width='30px' src="https://cdn-icons-png.flaticon.com/512/2422/2422760.png" alt="" />
                        <p>Chief Revenue Officer</p>
                    </div>
                    <div height='80px'>
                        <img width='30px' src="https://t3.ftcdn.net/jpg/01/87/68/52/360_F_187685268_rBij3TI5BrcE1zRiyfWLJZEhXMRHEaRv.jpg" alt="" />
                        <p>Cloud Architect</p>
                    </div>

                </div>
            </div>
            <h1 style={{ textAlign: 'center', fontSize: '20px' }} >-OR-</h1>
            <div className='CoursessecondFlex' >
                <div>
                    <h1  >Explore Dream Career of Your Choice</h1>
                    <p>Explore alternate career paths and skills you need <br /> to reach your dream job</p>
                    <br />
                    <button className='btny' ><strong>Carrer Planner</strong></button> <span> &nbsp; &nbsp;</span>
                    <button className='btnv' >Talk to Expert</button>
                </div>
                <div>
                    <img src="https://learning.shine.com/_next/image?url=%2Fimages%2Fexplore-dream-career.png&w=1920&q=75" alt="" />
                </div>
            </div>
            <div className='coursesecondFlex' >
                <div><img src="https://learning.shine.com/_next/image?url=%2Fimages%2Frecruiters-not-noticing.png&w=1920&q=75" alt="" /></div>
                <div>
                    <br />
                    <br />
                    <h1>Recruiters Not Noticing your Skills?</h1>
                    <p>Take assessment now and showcase your skills to recruiters</p>
                    <button className='btny' ><strong>Take Assessment</strong></button> <span> &nbsp; </span>
                    <button className='btnv' >Talk to Expert</button>
                </div>
            </div>
            <h1 className='heading' >Popular Courses</h1>
            <p style={{ textAlign: 'center' }} ><strong>All</strong>  &nbsp; Sales and Marketing  Banking Finance &nbsp; Personal Development &nbsp; IT- Information Technology &nbsp; HR - Human Resource &nbsp;  Management</p>
            <HomeCardCrowser5 />
            <p className='butHeading' >View All</p>
            <div style={{ backgroundColor: '#f9f9f9', paddingTop: '10px', paddingBottom: '5px' }} >
                <h1 className='heading' >Popular Assessments</h1>
                <p style={{ margin: '20px 0px 10px 80px' }} ><strong>All</strong> &nbsp; Sales and Marketing &nbsp; Operation Management &nbsp; Banking Finance</p>
                <SalesAnsMarketingCards1 />
                <br />
                <br />
                <p className='butHeading' >View All</p>
            </div>
            <br />
            <h1 className='heading' >Latest from Blog</h1>
            <HomeCardCrowser6 />
            <p className='butHeading' >View All</p>
            <div style={{backgroundColor:'#f9f9f9'}} >
                <br />
                <h1 className='heading' >Success Stories</h1>
                <br />
                <SalesAnsMarketingCards1 />
                <br />
            </div>
            <Footer/>
        </div>
    )
}

