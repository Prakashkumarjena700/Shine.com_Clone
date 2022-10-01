import React from 'react'
import {Div1, Div2} from "./SalesAndMarketingData"
import SalesAnsMarketingCard from "./SalesAnsMarketingCard"
import "./Courses.css"

export default function SalesAnsMarketingCards1() {
  return (
    <div className='Courses_Container' >
        {
         Div1.map((ele)=> <SalesAnsMarketingCard img={ele.img} title={ele.title} com={ele.com} rating={ele.rating} price={ele.price} dur={ele.dur} />)   
        }
    </div>
  )
}

function SalesAnsMarketingCards2(){
    return (
        <div className='Courses_Container' >
            {
             Div2.map((ele)=> <SalesAnsMarketingCard img={ele.img} title={ele.title} com={ele.com} rating={ele.rating} price={ele.price} dur={ele.dur} />)   
            }
        </div>
      )
}

export {SalesAnsMarketingCards2}