import React from 'react'
import { FirstDiv, SecondDiv, ThirdDiv, FourthdDiv ,FifthdDiv} from "../JobSeekerViewAll/JobSeekerViewAllData"
import JobSeekerViewAllcard from '../JobSeekerViewAll/JobSeekerViewAllcard'
import './JobseekerViewAll.css'

export default function JobSeekerViewAllfirst() {
    return (
        <div className='jobseekerviewallCardContainer' >
            {
                FirstDiv.map((ele) => <JobSeekerViewAllcard
                    title={ele.title}
                    img={ele.img}
                    price={ele.price}
                    dis={ele.dis}
                />)
            }
        </div>
    )
}

function JobSeekerViewAllsecond(){
    return (
        <div className='jobseekerviewallCardContainer' >
            {
                SecondDiv.map((ele) => <JobSeekerViewAllcard
                    title={ele.title}
                    img={ele.img}
                    price={ele.price}
                    dis={ele.dis}
                />)
            }
        </div>
    )
}
function JobSeekerViewAllthird(){
    return (
        <div className='jobseekerviewallCardContainer' >
            {
                ThirdDiv.map((ele) => <JobSeekerViewAllcard
                    title={ele.title}
                    img={ele.img}
                    price={ele.price}
                    dis={ele.dis}
                />)
            }
        </div>
    )
}
function JobSeekerViewAllfourth(){
    return (
        <div className='jobseekerviewallCardContainer' >
            {
                FourthdDiv.map((ele) => <JobSeekerViewAllcard
                    title={ele.title}
                    img={ele.img}
                    price={ele.price}
                    dis={ele.dis}
                />)
            }
        </div>
    )
}
function JobSeekerViewAllFifth(){
    return (
        <div className='jobseekerviewallCardContainer' >
            {
                FifthdDiv.map((ele) => <JobSeekerViewAllcard
                    title={ele.title}
                    img={ele.img}
                    price={ele.price}
                    dis={ele.dis}
                />)
            }
        </div>
    )
}

export {JobSeekerViewAllsecond, JobSeekerViewAllthird, JobSeekerViewAllfourth, JobSeekerViewAllFifth}
