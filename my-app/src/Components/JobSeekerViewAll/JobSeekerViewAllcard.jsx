import React from 'react'
import './JobseekerViewAll.css'

export default function JobSeekerViewAllcard(props) {
    return (
        <div className='jonseekerViewAllCard' >
            <img src={props.img} alt="" />
            <div>
                <h1><strong>{props.title}</strong></h1>
                <p>{props.dis}</p>
                <p><strong>₹ {props.price}</strong></p>
                <br />
                <span className='btn1' >Explore</span><span className='btn2' >Talk to Export</span>
            </div>
        </div>
    )
}
