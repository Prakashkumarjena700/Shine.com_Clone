import React from 'react'
import './MyCard.css'

export default function MyCard(props) {
  return (
    <div className='myCard' >
      <span className='smallHand'  >Hot</span>
      <span className='end smallHand' >1 day ago</span>
      <h1><strong>{props.cardno}</strong></h1>
      <p className='smallHand' >{props.com}</p>
      <span>{props.loc} &nbsp; &nbsp; &nbsp;</span>
      <span>{props.exp}</span>
      <p></p>
      <p></p>
      <p></p>
      <p className='end colv ' >Apply</p>
    </div>
  )
}

export const MyCardHome4=(props)=>{
  return(
    <div>
      <img src={props.img} alt="not found" />
    </div>
  )
}
