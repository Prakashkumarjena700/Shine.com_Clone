import React from 'react'
import './MyCard.css'
import { Reviews } from "./HomeCardCrowserData"
import { ProfileBosterCard } from '../CardCrowsers/MyCard'

export default function ProfileBosterCrowser() {
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

            <div className='Profileboster_container' >
                {
                    Reviews.map((ele) => <ProfileBosterCard
                        dis={ele.dis}
                        rating={ele.rating}
                        title={ele.title}
                        date={ele.date}
                        reviewser={ele.reviewser}

                    />)

                }
            </div>
        </div>
    )
}


