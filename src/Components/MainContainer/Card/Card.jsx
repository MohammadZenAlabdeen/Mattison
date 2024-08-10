import React from 'react'
import './Card.css'
import { FaRegHandPointer } from "react-icons/fa6";
import { useState } from 'react'
const Card = ({image,title}) => {
const [flip,setFlip]= useState('');
  return (
    <div className='card-container'>
        <div className='card-main-contain'>
            <div className={'the-card '+flip} onClick={()=>{flip==='' ? setFlip('flip'):setFlip('')}}>
            <div className='front'>
                <div className='pointer'>
                <FaRegHandPointer/>
                </div>
            </div>
            <div className='back'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum necessitatibus asperiores minus magni sint, illum esse quos hic aperiam repellat autem dolorem ab qui a, distinctio laboriosam ullam eius in.</p>
            </div>
            </div>

        </div>
        <div className='title-contain'>
        <h1 className='title'>
            {title}
        </h1>
        </div>
    </div>
  )
}

export default Card