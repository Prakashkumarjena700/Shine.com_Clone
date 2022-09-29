import React from 'react'
import Apps from "../Components/Crowser/Crowser"
import HomeCardCrowser1 from "../Components/CardCrowsers/HomeCardCrowser1"
import "./Home.css"
import HomeCoolPlace from "../Components/HomeCoolPlace"
import HomeTopCompanies from "../Components/HomeTopCompanies"
import HomeCardCrowser2 from "../Components/CardCrowsers/HomeCardCrowser2"
import HomeCardCrowser3 from "../Components/CardCrowsers/HomeCardCrowser3"
import { SimpleGrid, Box } from '@chakra-ui/react'
import HomeCardCrowser4 from "../Components/CardCrowsers/HomeCardCrowser4"
import HomeCardCrowser5 from "../Components/CardCrowsers/HomeCardCrowser5"
import HomeCardCrowser6 from "../Components/CardCrowsers/HomeCardCrowser6"

export default function Home() {
  const [TopCompanies, setTopCompanies] = React.useState(false)
  return (
    <div>
      <div className='speace' ></div>
      <Apps />
      <div className='first3flex' >
        <div>
          <img src="https://png.pngtree.com/png-vector/20190411/ourlarge/pngtree-vector-assignment-icon-png-image_924510.jpg" alt="" />
          <strong>Assessment</strong>
        </div>
        <div>
          <img src="https://blog.edmentum.com/sites/blog.edmentum.com/files/styles/blog_image/public/images/CareerPathways.png?itok=ttlvVMjG" alt="" />
          <strong>Career Path</strong>
        </div>
        <div>
          <img src="https://thumbs.dreamstime.com/b/concept-dream-job-icon-modern-flat-thin-line-design-vector-illustration-concept-dream-job-icon-modern-flat-thin-line-design-212037333.jpg" alt="" />
          <strong>Dream Job</strong>
        </div>
      </div>
      <div className='opt' >
        <button onClick={() => setTopCompanies(false)} >COOL PLACES TO WORK</button>
        <button onClick={() => setTopCompanies(true)} >TOP COMPANIES HIRING</button>
        {TopCompanies ? <HomeTopCompanies /> : <HomeCoolPlace />}
        <h1 className='heading' >Be An Early Applicant</h1>
      </div>
      <HomeCardCrowser1 />
      <p className='butHeading' >14460+ More Jobs</p>
      <h1 className='heading'>Remote Jobs</h1>
      <HomeCardCrowser2 />
      <p className='butHeading' >738+ More Jobs</p>
      <h1 className='heading' >Walkin Jobs</h1>
      <HomeCardCrowser3 />
      <p className='butHeading' >View All</p>
      <div className='flex2'>
        <div  >
          <img src="https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-16.png" alt="" />
          <p>Search Your Dream Carrer</p>
        </div>
        <div>
          <img src="https://static.thenounproject.com/png/561473-200.png" alt="" />
          <p>Create Your Profile</p>
        </div>
      </div>
      <div className='flex3again' >
        <h1 >Are You an Employer?</h1>
        <button className='btny' >Search Your Hire</button>
        <button className='btnv' >Post a job</button>
      </div>
      <h1 className='heading' >Aspire to Senior Roles in Career</h1>
      <div className='firstGrid' >
        <SimpleGrid columns={2} spacingX='35px' spacingY='30px'>
          <Box className='box' bg='' height='80px'>
            <img src="https://www.kindpng.com/picc/m/4-41409_developer-png-png-download-developer-png-no-background.png" alt="" />
            <p>Chief Technology Officer</p>
          </Box>
          <Box className='box' bg='' height='80px'>
            <img src="https://cdn0.iconfinder.com/data/icons/female-professionals-flat/48/Female-37-512.png" alt="" />
            <p>Data Science Head</p>
          </Box>
          <Box className='box' bg='' height='80px'>
            <img src="https://t3.ftcdn.net/jpg/05/25/27/10/360_F_525271068_8p0eH1EQNLKyFG9KYBLdf30JRvaHlcu7.jpg" alt="" />
            <p>Chief Marketing Officer</p>
          </Box>
          <Box className='box' bg='' height='80px'>
            <img src="https://png.pngtree.com/png-vector/20200121/ourmid/pngtree-financial-consulting-logo-vector-template-png-image_2132677.jpg" alt="" />
            <p>Chief Product Officer</p>
          </Box>
        </SimpleGrid>
      </div>
      <p className='butHeading' >View All</p>
      <h1 style={{ color: 'gray', textAlign: 'center', fontSize: '20px', marginBottom: '10px' }} >-OR-</h1>
      <div className='flex02' >
        <div>
          <h1 className='heading' >Explore Dream Career of Your Choice</h1>
          <br />
          <button className='btny' >Search Your Hire</button>
        </div>
        <div>
          <img src="https://www.shine.com/next/static/images/explore-dream-career.png" alt="" />
        </div>
      </div>
      <h1 className='heading' >Explore Our Premium Services</h1>
      <HomeCardCrowser4 />
      <p className='butHeading' >View All</p>
      <h1 className='heading' >Popular Courses</h1>
      <div className='flex3' >
        <p style={{ borderBottom: '3px solid blue', color: 'black' }} >All</p>
        <p>Sales and Marketing</p>
        <p>Banking Finance</p>
        <p>Personal Development</p>
        <p>IT- Information Technology</p>
        <p>HR - Human Resource</p>
        <p>Management</p>
      </div>
      <HomeCardCrowser5 />
      <p className='butHeading' >View All</p>
      <div style={{ backgroundColor: '#f0f0f0',padding:'20px 0px' }} >
        <h1 className='heading' >Latest from Blog</h1>
        <HomeCardCrowser6 />
        <p className='butHeading' >View All</p>
      </div>
    </div>
  )
}

