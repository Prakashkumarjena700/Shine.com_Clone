import React from 'react'
import './MyCard.css'

export default function MyCard(props) {
  return (
    <div className='myCard' >MyCard No : {props.cardno} </div>
  )
}
