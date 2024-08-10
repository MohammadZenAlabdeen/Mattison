import React from 'react'
import './Card.css'
import { useState } from 'react'
const Card = ({image,title}) => {
const [flip,setFlip]= useState('');
  return (
    <div className='card-container'>
        <div className='card-main-contain'>
            <div className={'the-card '+flip} onClick={()=>{flip==='' ? setFlip('flip'):setFlip('')}}>
            <div className='front'></div>
            <div className='back'>hello</div>
            </div>

        </div>
        <h1 className='title'>
            {title}
        </h1>
    </div>
  )
}

export default Card