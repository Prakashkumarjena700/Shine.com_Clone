import React from 'react'
import "./Footer.css"
import { SimpleGrid, Box } from '@chakra-ui/react'
import { JobSeekers, Employers, PartenerSites } from "./FooterItem"
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div style={{backgroundColor:'#fafaff',paddingBottom:'20px'}} >
            <SimpleGrid className='footer'  columns={5} spacing={10}>
                <Box height='230px'>
                    <img width="75px" src="https://www.shine.com/next/static/images/shine-logo.png" alt="" />
                    <p>Great career starts here!</p>
                    <br />
                    <p ><strong style={{ color: 'gray' }} >Download Shine App</strong></p>
                    <p className='footerMediLogo' >
                        <img width="20px" src="https://www.freepnglogos.com/uploads/google-play-png-logo/google-play-arrow-png-logo-8.png" alt="" />
                        <img width="25px" src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png" alt="" />
                    </p>
                </Box>
                <Box height='230px'>
                    <h1 style={{ marginBottom: '10px' }}><strong>JOB SEEKERS</strong></h1>
                    {
                        JobSeekers.map((ele) => <li key={ele.id} ><Link to={ele.path} >{ele.title}</Link></li>)
                    }
                </Box>
                <Box height='230px'>
                    <h1 style={{ marginBottom: '10px' }}><strong>EMPLOYERS</strong></h1>

                    {
                        Employers.map((ele) => <li key={ele.id} ><Link to={ele.path} >{ele.title}</Link></li>)
                    }
                </Box>
                <Box height='230px'>
                    <h1 style={{ marginBottom: '10px' }} ><strong>PARTNER SITES</strong></h1>
                    {
                        PartenerSites.map((ele) => <li key={ele.id} ><Link to={ele.path} >{ele.title}</Link></li>)
                    }
                </Box>
                <Box height='230px'>
                    <h1 style={{ marginBottom: '10px' }} ><strong>CONTACT US</strong></h1>
                    <li>080-1006 2222</li>
                    <li>contactus@shine.com</li>
                    <p className='footerMediLogo' >
                        <img width="13px" src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG39.png" alt="" />
                        <img width="13px" src="https://www.edigitalagency.com.au/wp-content/uploads/Twitter-logo-png.png" alt="" />
                        <img width="13px" src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png" alt="" />
                    </p>
                </Box>
            </SimpleGrid>
            <hr />
            <SimpleGrid  className='footerBottom' columns={2} spacing={0}>
                <Box bg='#fafaff' height='25px'>Feedback | FAQsAbout | UsContact | UsPrivacy | PolicyCookie | PolicyFraud | AlertBusiness | NewsEnglish | NewsTerms & Conditions | Disclaimer</Box>
                <Box bg='#fafaff' height='25px' style={{textAlign:'end'}} >© 2022 HT Media</Box>
                <Box bg='#fafaff' height='25px'>Report a Job Posting</Box>
                <Box bg='#fafaff' height='25px' style={{textAlign:'end'}} >Limited</Box>
            </SimpleGrid>
        </div>
    )
}
