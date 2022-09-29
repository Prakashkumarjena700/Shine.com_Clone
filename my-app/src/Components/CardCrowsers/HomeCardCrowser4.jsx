import React from 'react'
import './MyCard.css'
import {premium} from "./HomeCardCrowserData"
import {MyCardHome4} from '../CardCrowsers/MyCard'

export default function HomeCardCrowser4() {
    var box4 = document.querySelector('.product-container4');

    const btnPreesPrev4 = () => {
        let width = box4.clientWidth;
        box4.scrollLeft = box4.scrollLeft - width
    }

    const btnPreesNext4 = () => {
        let width = box4.clientWidth;
        box4.scrollLeft = box4.scrollLeft + width
    }

    return (
        <div className='product-carousel' >
            <button className='pre-btn' onClick={btnPreesPrev4} ><p>&lt;</p></button>
            <button className='next-btn' onClick={btnPreesNext4} ><p>&gt;</p></button>

            <div className='product-container4' >
               {
                premium.map((ele)=> <MyCardHome4 
                    img={ele.img}
                    title={ele.title}
                    dis={ele.dis}
                    price={ele.price}
                /> )
            
               }
            </div>
        </div>
    )
}


