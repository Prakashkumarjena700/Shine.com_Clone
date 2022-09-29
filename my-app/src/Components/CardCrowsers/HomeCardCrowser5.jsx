import React from 'react'
import './MyCard.css'
import {courses} from "./HomeCardCrowserData"
import {MyCardHome5} from '../CardCrowsers/MyCard'

export default function HomeCardCrowser5() {
    var box5 = document.querySelector('.product-container5');

    const btnPreesPrev5 = () => {
        let width = box5.clientWidth;
        box5.scrollLeft = box5.scrollLeft - width
    }

    const btnPreesNext5 = () => {
        let width = box5.clientWidth;
        box5.scrollLeft = box5.scrollLeft + width
    }

    return (
        <div className='product-carousel' >
            <button className='pre-btn' onClick={btnPreesPrev5} ><p>&lt;</p></button>
            <button className='next-btn' onClick={btnPreesNext5} ><p>&gt;</p></button>

            <div className='product-container5' >
               {
                courses.map((ele)=> <MyCardHome5 
                    img={ele.img}
                    title={ele.title}
                    rating={ele.rating}
                    time={ele.time}
                    dis={ele.dis}
                    Price={ele.Price}
                /> )
            
               }
            </div>
        </div>
    )
}


