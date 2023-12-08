import React from "react"
import '../../styles/banner.css'

const Banner = ({ name, title,text, cover }) => {
  return (

      <div className='back'>
        <div className='b-Container'>
          <span>{name}</span>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <img src={cover} alt='' />
      </div>

  )
}

export default Banner