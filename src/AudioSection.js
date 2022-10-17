import React from 'react';
import "./AudioSection.css"; 
   

export default function AudioSection() {
  
  return (
    <div>
      <audio src="./final_62fe777cefb94100813195b5_557588.mp3" preload="metadata"></audio>
      <button>back 5 seconds</button>
      <button>play / pause</button>
      <button>forward 5 seconds</button>

      {/*current time*/}
      <div>0:00</div>
      {/*progress bar*/}
      <div>
        <input type="range" />
      </div>
      {/*duration*/}
      <div>2:49</div>

    </div>
  );
}
 
  