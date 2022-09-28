import React from 'react'
import {Jobs, JobSeekingAssistance, Courses} from './Navitems'
import { Link } from 'react-router-dom'
import "./Dropdown.css"

export const JobsdropDown=()=> {
    const[dropDown, setDropdown]=React.useState(false)
    return (
        <>
            <ul className={dropDown ? 'jobs-submenue clicked' : 'jobs-submenue'} onClick={()=> setDropdown(!dropDown)} >
                {
                    Jobs.map((ele) => <li key={ele.id} style={{fontWeight:'normal', fontSize:'13px'}} ><Link to={ele.path} className="jonssub-menue" >{ele.title}</Link></li>)
                }
            </ul>
        </>
    )
}

export const JobSeekingDropDown=()=>{
    const[dropDown, setDropdown]=React.useState(false)
    return (
        <>
            <ul className={dropDown ? 'jobs-submenue clicked' : 'jobs-submenue'} onClick={()=> setDropdown(!dropDown)} >
                {
                    JobSeekingAssistance.map((ele) => <li key={ele.id} style={{fontWeight:'normal', fontSize:'13px'}} ><Link to={ele.path} className="jonssub-menue" >{ele.title}</Link></li>)
                }
            </ul>
        </>
    )
}

export const CoursesDropDown=()=>{
    const[dropDown, setDropdown]=React.useState(false)
    return (
        <>
            <ul className={dropDown ? 'jobs-submenue clicked' : 'jobs-submenue'} onClick={()=> setDropdown(!dropDown)} >
                {
                    Courses.map((ele) => <li key={ele.id} style={{fontWeight:'normal', fontSize:'13px'}} ><Link to={ele.path} className="jonssub-menue" >{ele.title}</Link></li>)
                }
            </ul>
        </>
    )
}