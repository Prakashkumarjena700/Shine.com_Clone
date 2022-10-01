import React from 'react'
import "./Courses.css"

export default function SalesAnsMarketingCard({ img, title, com, dur, price, rating }) {
    return (
        <div className='Courses_Card' >
            <div>
                <div>
                    <img src={img} width='100px' alt="" />
                    <div style={{display:'flex',fontWeight:'bold',marginLeft:'10px',gap:'10px'}} >{rating} <img width='20px' src="https://previews.123rf.com/images/cgdeaw/cgdeaw1904/cgdeaw190400488/121629472-gold-star-shape-isolated-on-white-background-golden-star-icon-gold-star-logo-image-of-golden-star-sy.jpg" alt="" /></div>
                </div>
                <div>
                    <h1 style={{fontSize:'20px',marginBottom:'10px'}} >{title}</h1>
                    <p>{com}</p>
                    <p>{dur}</p>
                    <h1  style={{margin:'10px 0px'}}>₹{price}</h1>
                </div>
            </div>
            <div>
                <button>Explore</button>
                <button>Buy Now</button>
            </div>
        </div>
    )
}
