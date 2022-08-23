import React from 'react';
import "./AudioSection.css"; 
import sound from "./final_62fe777cefb94100813195b5_557588.mp3";
   

export default function AudioSection() {
    const audio = new Audio(sound);
   
  

  const start = () => {
    audio.play();
  };

  return (
    <div>
      <button onClick={start}>Play</button>
    </div>
  );
}
 
  