import React from 'react'
import MyCard from '../CardCrowsers/MyCard'
import './MyCard.css'
import {crowser1} from "./HomeCardCrowserData"

export default function HomeCardCrowser1() {
    var box = document.querySelector('.product-container');

    const btnPreesPrev = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width
    }

    const btnPreesNext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width
    }

    return (
        <div className='product-carousel' >
            <button className='pre-btn' onClick={btnPreesPrev} ><p>&lt;</p></button>
            <button className='next-btn' onClick={btnPreesNext} ><p>&gt;</p></button>

            <div className='product-container' >
               {
                crowser1.map((ele)=> <MyCard cardno={ele.title} 
                com={ele.com} 
                loc={ele.loc}
                exp={ele.exp}
                />)
               }
            </div>
        </div>
    )
}


