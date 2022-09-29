import React from 'react'
import './MyCard.css'
import {latest} from "./HomeCardCrowserData"
import {MyCardHome6} from '../CardCrowsers/MyCard'

export default function HomeCardCrowser6() {
    var box6 = document.querySelector('.product-container6');

    const btnPreesPrev6 = () => {
        let width = box6.clientWidth;
        box6.scrollLeft = box6.scrollLeft - width
    }

    const btnPreesNext6 = () => {
        let width = box6.clientWidth;
        box6.scrollLeft = box6.scrollLeft + width
    }

    return (
        <div className='product-carousel' >
            <button className='pre-btn' onClick={btnPreesPrev6} ><p>&lt;</p></button>
            <button className='next-btn' onClick={btnPreesNext6} ><p>&gt;</p></button>

            <div className='product-container6' >
               {
                latest.map((ele)=> <MyCardHome6 
                    img={ele.img}
                    title={ele.title}
                   
                /> )
            
               }
            </div>
        </div>
    )
}


