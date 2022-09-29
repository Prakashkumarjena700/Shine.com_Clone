import React from 'react'
import MyCard from '../CardCrowsers/MyCard'
import './MyCard.css'
import {remoteJobs} from "./HomeCardCrowserData"

export default function HomeCardCrowser2() {
    var box2 = document.querySelector('.product-container2');

    const btnPreesPrev2 = () => {
        let width = box2.clientWidth;
        box2.scrollLeft = box2.scrollLeft - width
    }

    const btnPreesNext2 = () => {
        let width = box2.clientWidth;
        box2.scrollLeft = box2.scrollLeft + width
    }

    return (
        <div className='product-carousel' >
            <button className='pre-btn' onClick={btnPreesPrev2} ><p>&lt;</p></button>
            <button className='next-btn' onClick={btnPreesNext2} ><p>&gt;</p></button>

            <div className='product-container2' >
               {
                remoteJobs.map((ele)=> <MyCard cardno={ele.title} 
                com={ele.com} 
                loc={ele.loc}
                exp={ele.exp}
                />)
               }
            </div>
        </div>
    )
}


