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
      <div className='navTop' >
        <div className='navTop1' >
          <Link to='/' ><img width='80px' src="https://www.shine.com/next/static/images/shine-logo.png" alt="" /></Link>
          <div className='searchBox' >
            <span>job title, skills</span>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/1200px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png" alt="" />
          </div>
        </div>
        <div className='navTop2' >
         <Link to='/login' className='btn1' > <button>Login</button></Link>
          <Link to='register' ><button className='btn2' >Register</button></Link>
          <img src="https://iconape.com/wp-content/files/cy/368009/svg/notifications-outline-logo-icon-png-svg.png" alt="" />
          <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png" alt="" />
        </div>
      </div>
      <div className='navMid' >
        <span style={{color:'gray'}} ><b>Trending:</b></span> | React Js | Android |  Marketing | Finance | HR
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

