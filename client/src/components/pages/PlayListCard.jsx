import React ,{useState}from 'react'
import {FaPlay} from 'react-icons/fa'
import "../layout/Navbar.css"
function PlayListCard(props) {
    const [visible,setvisible]=useState('hidden')
    const displayPlay=()=>{
        
          setvisible('visible');
      }
      const notPlay=()=>{
          setvisible('hidden');
        }
  return (
    <div className="music-card" onMouseOver={displayPlay}  onMouseOut={notPlay}>
                <img className="img"src={props.image} alt="" />
            <div className="name">
                {props.name} 
            </div>
            <div className="about">
                {props.artist}
            </div>
            <div className="play-button" style={{visibility:visible}}>
            <FaPlay id='play-icon'/>
            </div>
            </div> 
  )
}

export default PlayListCard