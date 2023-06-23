import React from 'react'
import {FaPlay} from 'react-icons/fa'
import "./cardmusic.css"
import { useState } from 'react'

const Cardmusic = (props) => {
    const [dis,setdis] = useState(["hidden"])
    const displayPlay=(event)=>{
        setdis("visible")
      }
      const notPlay=(event)=>{
        setdis("hidden")
        }
  return (
    <div className="music-card1" onMouseOver={displayPlay}  onMouseOut={notPlay}>
        
            <img  className='imagemusic1' src={props.image} alt="" />
            <div className="name1">
                {props.name} 
            </div>
            <div className="about1">
                {props.artist}
            </div>
            <div className="play-button1" style={{visibility:dis}}>
            <FaPlay id='play-icon'/>
            </div>
            </div> 
  )
}

export default Cardmusic