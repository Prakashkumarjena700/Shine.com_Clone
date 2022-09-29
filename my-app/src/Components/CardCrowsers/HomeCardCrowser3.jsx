import React from 'react'
import MyCard from '../CardCrowsers/MyCard'
import './MyCard.css'
import {walkinjobs} from "./HomeCardCrowserData"

export default function HomeCardCrowser3() {
    var box3 = document.querySelector('.product-container3');

    const btnPreesPrev3 = () => {
        let width = box3.clientWidth;
        box3.scrollLeft = box3.scrollLeft - width
    }

    const btnPreesNext3 = () => {
        let width = box3.clientWidth;
        box3.scrollLeft = box3.scrollLeft + width
    }

    return (
        <div className='product-carousel' >
            <button className='pre-btn' onClick={btnPreesPrev3} ><p>&lt;</p></button>
            <button className='next-btn' onClick={btnPreesNext3} ><p>&gt;</p></button>

            <div className='product-container3' >
               {
                walkinjobs.map((ele)=> <MyCard cardno={ele.title} 
                com={ele.com} 
                loc={ele.loc}
                exp={ele.exp}
                />)
               }
            </div>
        </div>
    )
}


