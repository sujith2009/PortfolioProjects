import React, { useState, useRef } from "react";
import SongsCss from "../Songs/Songs.module.css";
import ApiSongs from "../Songs/songs.json";
//import Navbarfixb from "../NavbarFixedBottom/Navbarfixb";
const Songs = () => {
  const [header] = useState("All Songs");
  const [songs, setSongs] = useState(ApiSongs);
  const [currentSong, setCurrentSong] = useState(null);
  const audioRefs = useRef([]);

  const handlePlay = (index) => {
    const audioElement = audioRefs.current[index];
    if (!audioElement) return;

    if (audioElement.paused) {
      audioRefs.current.forEach((audio, i) => {
        if (audio && i !== index) {
          audio.pause();
          audio.currentTime = 0; // Reset the audio to the beginning
        }
      });
      audioElement.play();
      setCurrentSong({ index, song: songs[index] });
    } else {
      audioElement.pause();
      audioElement.currentTime = 0; // Reset the audio to the beginning
      setCurrentSong(null);
    }
  };

  const handleStopSong = (index) => {
    const audioElement = audioRefs.current[index];
    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
    }
    setCurrentSong(null);
  };

  return (
    <div>
      <h3
        className={`text text-center text-white mt-5 mb-5 ${SongsCss.SongsHeader}`}
      >
        {header}
      </h3>
      {/*--------Api Songs-----*/}
      <div className="container">
        <div className="row">
          {songs &&
            songs.map((song, index) => (
              <div className="col-6 col-md-4 col-lg-2 mb-5">
                <div className="card-body" key={index}>
                  <img
                    onClick={() => handlePlay(index)}
                    src={song.img}
                    alt="img"
                    className={`img-fluid ${SongsCss.imgResponsive}`}
                  />
                  <h5 className={`card-title ms-5 ${SongsCss.cardTitle}`}>
                    {song.name}
                  </h5>

                  <audio
                    ref={(el) => (audioRefs.current[index] = el)}
                    src={song.song}
                    controls
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>

      {currentSong && (
        <nav className="navbar fixed-bottom bg-body-tertiary">
          <div className="container-md">
            {currentSong.song && (
              <img
                src={currentSong.song.img}
                alt="img"
                className="img-fluid"
                style={{ height: "50px", marginRight: "10px" }}
              />
            )}
            <div>
              {currentSong.song && (
                <h5 className="mb-0">{currentSong.song.name}</h5>
              )}
              <audio
                ref={(el) => (audioRefs.current[currentSong.index] = el)}
                src={currentSong.song.song}
              />
            </div>
            <button
              className="btn btn-danger"
              onClick={() => handleStopSong(currentSong.index)}
            >
              Stop
            </button>
          </div>
        </nav>
      )}

      {/*-----*/}
    </div>
  );
};

export default Songs;
