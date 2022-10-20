import React, {useState} from 'react';
import "./AudioSection.css"; 
import {FiArrowLeftCircle} from "react-icons/fi";
import {FiArrowRightCircle} from "react-icons/fi";  
import {FiPlayCircle} from "react-icons/fi";
import {FiPauseCircle} from "react-icons/fi";

export default function AudioSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  }

  return (
    <div className="AudioSection">
      <div className="AudioPlayers">
        <audio src="./final_62fe777cefb94100813195b5_557588.mp3" preload="metadata"></audio>
        <button className="audioControls"> <FiArrowLeftCircle /> 5 </button>
        <button onClick={togglePlayPause} className="audioControls"> 
          { isPlaying ? <FiPauseCircle /> : <FiPlayCircle /> }
          </button>
        <button className="audioControls"> 5 <FiArrowRightCircle /> </button>

        {/*current time*/}
        <div>0:00</div>
        {/*progress bar*/}
        <div>
          <input type="range" />
        </div>
        {/*duration*/}
        <div>2:49</div>
      
      </div>

    </div>
  );
}
 
  