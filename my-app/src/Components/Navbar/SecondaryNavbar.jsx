import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { NavItems } from "./Navitems"
import {JobsdropDown, JobSeekingDropDown, CoursesDropDown} from "./dropDown"

export default function Navbar() {
  const [jobdropDown, setjobDropdown] = React.useState(false)
  const [jobSeekingdropDown, setjobSeekingdropDown] = React.useState(false)
  const [coursesDropDown, setcoursesDropDown] = React.useState(false)
  return (
    <nav className='navbar' >
      <div style={{display:'flex',padding:'2px',justifyContent:'flex-end',gap:'10px',paddingRight:'50px',backgroundColor:'#f2f3f8',fontWeight:'bold',color:'gray'}} >
        <p>Download App</p>
        <p>For Employers</p>
        <p>Help</p>
      </div>
      <div className='navTop' >
        <div className='navTop1' >
          <img  style={{marginRight:'74%'}} src="https://www.shine.com/next/static/images/shine-logo.png" alt="" />
          
        </div>
        <div className='navTop2' >
         <Link to='/login' className='btn1' > <button>Login</button></Link>
          <Link to='register' ><button className='btn2' >Register</button></Link>
          <img src="https://iconape.com/wp-content/files/cy/368009/svg/notifications-outline-logo-icon-png-svg.png" alt="" />
          <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png" alt="" />
        </div>
      </div>
      <ul className='nav-items' >
        {
          NavItems.map((ele) => {
            if (ele.title === 'JOBS') {
              return (
                <li key={ele.id}
                  onMouseEnter={() => setjobDropdown(true)}
                  onMouseLeave={() => setjobDropdown(false)}
                > <Link to={ele.path} >{ele.title}</Link>
                  {jobdropDown && <JobsdropDown />}
                </li>
              )
            }
            if (ele.title === 'JOBS SEEKING ASSISTANCE') {
              return (
                <li key={ele.id}
                  onMouseEnter={() => setjobSeekingdropDown(true)}
                  onMouseLeave={() => setjobSeekingdropDown(false)}
                > <Link to={ele.path} >{ele.title}</Link>
                  {jobSeekingdropDown && <JobSeekingDropDown />}
                </li>
              )
            }
            if (ele.title === 'COURSES') {
              return (
                <li key={ele.id}
                  onMouseEnter={() => setcoursesDropDown(true)}
                  onMouseLeave={() => setcoursesDropDown(false)}
                > <Link to={ele.path} >{ele.title}</Link>
                  {coursesDropDown && <CoursesDropDown />}
                </li>
              )
            }
            return (
              <li key={ele.id} > <Link to={ele.path} >{ele.title}</Link></li>
            )
          })
        }
      </ul>
    </nav>
  )
}

