import React from 'react'
import SecondaryNavbar from "../Components/Navbar/SecondaryNavbar"

export default function Jobalert() {
  return (
    <div>
      <div className='jobalertBody' >
        <SecondaryNavbar />
        <div className='speace' ></div>
        <div className='jobalertHeading' >
          <h1 >Create a Free Job Alert 2022</h1>
          <p>You can create upto 5 alerts</p>
          <div className='jobFirstFlex' >
            <div>
              <p className='smletter' >Let us know what kind of job you are looking for and we'll send them to your Inbox.</p>
              <div className='JobalertinputDiv' >
                <label className='jobalertlable' >Keywords <input type="text" placeholder='Search Keywords' /> </label>
                <label className='jobalertlable' >Salary <input type="text" placeholder='-Any-' /> </label>
                <label className='jobalertlable' >Experience <input type="text" placeholder='-Any-' /> </label>
                <label className='jobalertlable' >Locations <input type="text" placeholder='Locations' /> </label>
                <label className='jobalertlable' >Department <input type="text" placeholder='Department' /> </label>
                <label className='jobalertlable' >Industry* <input type="text" placeholder='Industry' /> </label>
                <label className='jobalertlable' >Email ID* <input type="text" placeholder='Your Email ID' /> </label>
              </div>
              <button>Create job alert</button>
              <p>or</p>
              <div style={{ display: 'flex', textAlign: 'left', marginLeft: '25%', color: 'black', boxShadow: '6px 6px 28px -6px rgba(0,0,0,0.55)', width: '55%', alignItems: 'center', padding: '10px', borderRadius: '5px', gap: '20px' }} >
                <div >
                  <p>Get calls from Recruiters</p>
                  <p>Show them your education, experience and skills</p>
                </div>
                <button style={{ height: '28px', display: 'flex', alignItems: 'center' }} >Register</button>
              </div>
            </div>
            <div>
              <h1 style={{ borderBottom: '1px solid gray' }} >FAQs</h1>
              <details className='smletter' >
                <summary className='smletter' >Why set up a free job alert?</summary>
                Our free to job alert service helps you to get notified for jobs suiting your career goals and makes it easier for you to respond to job openings directly from your inbox. Besides, it helps you to stay updated with the current job market and career opportunities, along with information about salary trends. It is highly beneficial for active as well as passive job seekers. By opting for free job alert service, we make sure you do not miss any openings based on your highly targeted and specific job matches.
              </details>
              <details className='smletter'  >
                <summary className='smletter'  >How do I get a job alert on my email ID?</summary>
                To get job notifications on your inbox, you need to sign in to shine.com or register with us. You will find a new tab ‘Create Job Alert’ on the top right side of the website. Fill out the details based on your profile and work area. You will start receiving job alerts when a recruiter will start posting vacancies on our job portal. You can create as many job alerts you wish to.
              </details>
              <details className='smletter' >
                <summary className='smletter' >How to get the best out of free job alert?</summary>
                You can fetch some of the best job opportunities by providing targeted and detailed information. The system is an automated mechanism which operates and generates matched jobs based on the details you provide. To narrow your feeds, you must provide specific keywords, salary details, experience, location, department and industry. If you do not fill out information for these fields, you will receive job notifications for all job openings. We highly recommend providing specific details while creating a free job alert.
              </details>
              <details className='smletter'>
                <summary className='smletter'>Who can see my information provided to set up a job alert?</summary>
                We have a strict privacy policy of protecting personal information from being misused. Your data is kept safe in our databases. Manual access to your information is strictly prohibited, but the data may be used without your name and other personal information to study and develop better systems. It is also used with identifiers for manual job feeds and notifications without disclosing your personal information. You can view our privacy policy for more details on the subject.
              </details>
            </div>
          </div>

        </div>
        <div className='jobalertLastBox' >
          <p>Shine.com free job alert 2020 is the perfect place to get quick updates for the most relevant jobs matching your job profile and requirements. We offer free job alert notifications for all kind of jobs. These jobs are delivered straight to your mailbox, and also you can also access them on your mobile. We send you customized job alert based on your preferred location, CTC expectations, job field, industry type, experience level and different organization. Our free job alert notifies you about the trending jobs which are posted on our portal and gives you a chance to be the first applicant to apply.</p>
          <p>The most useful part is that you can create your unique job alert on various industries and locations at the same time. For instance; you can create a job alert for digital marketing jobs or IT jobs and another job alert for banking jobs or government jobs. The benefit of creating job alerts is that you can be the first to apply to the vacancies, which creates an opportunity to be selected from recruiter early.</p>
          <p>To create a job alert, you have to fill out our form, and you will start receiving push notifications once you create a job alert.</p>
        </div>
        <br />
      </div>
      <div className='jobsFooter' >
        <div>
          <p><strong>Job seekers</strong><span> Browse Jobs| Job Search | Register Now | Login | Create Free Job Alert</span></p>
          <p><strong>Employers </strong><span> Recruiter India | Post Jobs</span></p>
          <p><strong>Partner Sites</strong><span> English Mate | Study Mate | Hindustantimes.com | Livemint.com | Livehindustan.com | OTTplay.com</span></p>
          <p>Feedback | FAQs | About Us | Contact Us | Privacy Policy | Cookie Policy | Fraud Alert | Business News | English News | Terms & Conditions | Disclaimer | Report a Job Posting</p>
        </div>
        <div>
          <p>Contact us 080-10062222</p>
          <span>contactus@shine.com</span>
          <div style={{display:'flex',gap:'10px',margin:'20px 0px'}} >
            <p>Follow us</p>
            <img width='19px' src="https://png.pngitem.com/pimgs/s/106-1069530_linkedin-logo-png-linkedin-logo-transparent-png.png" alt="" />
            <img width='19px' src="https://www.edigitalagency.com.au/wp-content/uploads/Twitter-logo-png.png" alt="" />
            <img width='19px' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEU7WZj///8mS5Hf4+3w8vcqTpM2VpcnTJLS1+X09vmzvNMzVJYvUZQeR4/j5u/K0OBEYJyOnL95irSHlrt0hrGossyfq8iNm75Sa6JbcqY+XJpvgq+YpcSstc6AkLdnfKzFy91NZ6DEy9wAPIsPQY2Bl4GkAAAEZUlEQVR4nO3dW3eiMBQFYIglQiEgVK127HXm///GoRentmtVNoZDOMzeT30pJ99aBiQ3o/gzWbmYR8rsRBUd/6iayJm5xEVN9U2YrkwezSm5WaWnwtrZ0E0aPNbVn8J1Ero5IknWR2E9T2BLrN+FqQvdErG49E24ml8fPMauXoWVCd0OwZiqFTbzekx8Td60wtCNEE4cZfO9z7zGZVE5527YdsQyWsxcuKBQeyjUHwr1h0L9oVB/KNQfCvWHQv2hUH8oDB2b58VJ8jy3tt8I/XSFtkhMcrdvbg/bzf39ZrPZHurbm4f14/45yhNjTJK04m7tNIW2MMvH7dOXueovybKrRfW0OTS7TuIUhYXbbRc/2b7lunNecHJCu7TbEuRpFFqzf8F5+oStL+3l0yYsoqeePmVCd9Pbp0poi74fUGXCYvfjs28ewveFLzMWLi/pgpqEycVAJcKiuRioQ5jvLweqENr8sruoHqG76DmoSFjUPkAFQnvnBVQgNFW3QrXQPvoBpy906GiFVmH+yxM4eaHfk0KB0O58gVMXJtdzFzqf72sahNb7PjN14QAf0okLzdXMhfbZHzhtoedbxYew6CoTUJj0GOEurw+/dqvX+dJvmfT8oUGnmLLtnUuKvnO//8oE/JSCwM2y8Nl5Fk5owQGo/dKvTjhh/oABO28lHQknLLYI8NZ7d2s4IfSNpvTfdRZQiIzQPPhvjQwnXCJvvwNsHAwnNMAQTeV5H32vE0wIfO/e+t5Io6kLh9ihPG1h95ouoM6khUMcFDBt4RAnIUxbOMCNZuLCIQ4koVAuFFII16FQLBRSCNehUCwUUgjXoVAsFFII16FQLBTqFzpAOMCgvrDQngkkPHcBi83siwqTboNngNk35cJ94NUm8kKgEbqFGdB03ULk6FXdwgp4YOoWdq9M1C48AJNTuoVrYBZctxCZBdctRFquWgidRK5aCLVctfAFeX9ULbxHVjKoFtazFz7O/g34efZCaEGRZuEVtL5WszCFGq5Z+AQNp2oWbmbfD2+gFcSahdDjULUQW1+rWYhtxlAsBH/FSbEwxWamFAuRoUTdQmQoUbcQ3NemWAjMrIkLi/RcAMTZ/7/DGiE7y708k9/ALPcfc+YCYBu4FkMuFFII16FQLBRSCNehUCwUUgjXoVAsFFII16FQLBRSCNehUCwUUgjXoVAsFFII16FQLBRSCNehUCwUUgjXoVAsFFII16FQLBRSCNehUCwUUgjXoVAsFFII16FQLBRSCNehUCwUUgjXoVAsFFII16FQLBRSCNehUCwUUgjX+R+E4Ek2Q2c0YRlBJ7kOn7GELouQw+kFMpaw9Q3yy8n9M5Iwb1phFaQjjiQ0VSsc5KeT+5ceRWhX8aswDXGvGUfo0jdhXA/SpftlFGFSx+/CeD0+cQxhso6Pwrh2Y/dFeaF1dfwpjNOVGfehIS3MzerjsK3oeLmqiZwZL9hJWJfGRU11vEp0csWsXIyXrDsXX7vMTlR/AYn9VbN6VB0TAAAAAElFTkSuQmCC" alt="" />
          </div>
          <p>© 2022 HT Media Limited</p>
        </div>
      </div>
    </div>
  )
}

