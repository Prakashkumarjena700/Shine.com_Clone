import React from 'react'
import './MyCard.css'

export default function MyCard(props) {
  return (
    <div className='myCard' >
      <span className='smallHand'  >Hot</span>
      <span className='end smallHand' >1 day ago</span>
      <img src={props.img} alt='' />
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


function MyCardHome4(props) {
  return (
    <div className='myCard4' >
      <img src={props.img} alt='' />
      <div className='innDiv' >
        <p style={{ fontSize: '20px' }} ><strong>{props.title}</strong></p>
        <p style={{ fontSize: '13px', color: 'gray', margin: '15px 0px' }} >{props.dis}</p>
        <p><strong>₹{props.price}</strong></p>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between' }} >
          <span style={{ color: '#8652ff' }} ><strong>Explore</strong></span>
          <span style={{
            display: 'flex',
            width: '50%',
            backgroundColor: '#8652ff',
            color: 'white',
            borderRadius: '3px'
          }} > <img width='22px' src='https://i.pinimg.com/originals/52/0d/5d/520d5dbaa90b8d7ac4430ae7d7c3129f.png' alt='' /> Talk to Expert</span>

        </div>
      </div>
    </div>

  )
}

function MyCardHome5(props) {
  return (
    <div className='myCard5' >
      <p style={{ fontSize: '12px', color: 'gray'}} >Course</p>
      <div style={{
        borderBottom: '1px solid lightgray',
        height: '75%',
        display: 'flex'
      }} >
        <div style={{ width: '30%', padding: '10px', textAlign: 'center', fontWeight: 'bold' }} >
          <img src={props.img} alt='' />
          <p>{props.rating}</p>
        </div>
        <div style={{ width: '70%' }} >
          <p style={{ fontSize: '20px' }} ><strong>{props.title}</strong></p>
          <p style={{ fontSize: '12px', color: 'gray', marginTop: '10px' }} >{props.dis}</p>
          <p style={{ fontSize: '12px', color: 'gray', marginBottom: '10px' }} >{props.time}</p>
          <p><strong>₹{props.Price}</strong></p>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '7%' }} >
        <span style={{ color: '#8652ff' }} ><strong>Explore</strong></span>
        <span style={{
          backgroundColor: '#8652ff',
          color: 'white',
          borderRadius: '3px',
          padding: '0px 10px'
        }} > Buy now</span>

      </div>
    </div>
  )
}

function MyCardHome6(props) {
  return (
    <div className='myCard6'  >
      <img style={{borderTopRightRadius:'5px',borderTopLeftRadius:'5px',marginTop:'15px'}} src={props.img} alt='' />
      <p style={{margin:'10px',fontWeight:'bold'}} >{props.title}</p>
    </div>
  )
}

function ProfileBosterCard(props){
  return(
    <div className='ProfileBosterCard1' >
      <p><strong>{props.title}</strong></p>
      <img width='15px' style={{ display: 'inline-block',marginRight:'10px' }} src="https://www.pngall.com/wp-content/uploads/9/Golden-Star-PNG-Image-File.png" alt="" /> 
      <span style={{fontSize:'14px'}} >{props.rating} </span>
      <span style={{fontSize:'14px'}} >{props.date}</span>
      <p>{props.dis}</p>
      <br/>
      <p style={{float:'right'}} >{props.reviewser}</p>
    </div>
  )
}


export { MyCardHome4, MyCardHome5, MyCardHome6, ProfileBosterCard }