import React from "react";
import "./OriginalVideo.css";

export default function OriginalVideo() {
    return (
        <div className="OriginalVideoContainer">
            <h2>Watch Your Scene 🎞️</h2>
        <iframe width="675" height="450" src="https://www.youtube.com/embed/pkrxwpbl9WQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     </div>
    )
}