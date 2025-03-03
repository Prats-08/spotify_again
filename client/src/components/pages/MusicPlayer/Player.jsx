import React, { useState, useRef, useEffect } from "react";
import Controls from "./Controls";
import Details from "./Details";
import "../../layout/Navbar.css"
function Player() {
    const audioEl = useRef(null);
    //   const [isPlaying, setIsPlaying] = useState(false);

    //   useEffect(() => {
    //     if (isPlaying) {
    //       audioEl.current.play();
    //     } else {
    //       audioEl.current.pause();
    //     }
    //   });

    //   const SkipSong = (forwards = true) => {
    //     if (forwards) {
    //       props.setCurrentSongIndex(() => {
    //         let temp = props.currentSongIndex;
    //         temp++;

    //         if (temp > props.Playlists.length - 1) {
    //           temp = 0;
    //         }

    //         return temp;
    //       });
    //     } else {
    //       props.setCurrentSongIndex(() => {
    //         let temp = props.currentSongIndex;
    //         temp--;

    //         if (temp < 0) {
    //           temp = props.Playlists.length - 1;
    //         }
    //         return temp;
    //       });
    //     }
    //   };
    return (
        <div className="c-player">
            <Details />
            <Controls />
            <audio
                className="c-player--audio"
                src=""
                ref={audioEl}
                controls
            ></audio>
            
        </div>
    );
    //   return (
    //     <div className="c-player">
    //       <h4>Playing now</h4>
    //       <Details song={props.Playlists[props.currentSongIndex]} />
    //       <Controls
    //         isPlaying={isPlaying}
    //         setIsPlaying={setIsPlaying}
    //         SkipSong={SkipSong}
    //       />
    //       <audio
    //         className="c-player--audio"
    //         src={props.Playlists[props.currentSongIndex].song_path}
    //         ref={audioEl}
    //         controls
    //       ></audio>
    //       <p>
    //         Next up:{" "}
    //         <span>
    //           {props.Playlists[props.nextSongIndex].title} by{" "}
    //           {props.Playlists[props.nextSongIndex].artist}
    //         </span>
    //       </p>
    //     </div>
    //   );
}

export default Player;