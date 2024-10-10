import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TiMicrophoneOutline } from "react-icons/ti";
import { FaUser, FaMicrophone } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import VoiceCss from "./Voice.module.css";
import { FaCirclePlay } from "react-icons/fa6";
import { CgPlayPauseO } from "react-icons/cg";
import Footer from "../Components/Footer/Footer";

const Voice = () => {
  const [open, setOpen] = useState(false);
  const [voiceInput, setVoiceInput] = useState("");
  const [songs, setSongs] = useState(null);
  const [token, setToken] = useState(null);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [playingIndex, setPlayingIndex] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      const newToken = await getSpotifyToken();
      setToken(newToken);
    };

    fetchToken();
  }, []);

  //Spotify API

  const getSpotifyToken = async () => {
    const client_id = "39e5e8492afd476db91fe5acaae6397b"; // Your Client ID
    const client_secret = "0a8d1bed2cea48e685ffcfaca673a728"; // Your Client Secret

    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(client_id + ":" + client_secret),
      },
      body: "grant_type=client_credentials",
    });

    const data = await response.json();
    return data.access_token;
  };

  const voiceOpen = () => {
    setOpen(true);
  };

  const micCancelBtn = () => {
    setOpen(false);
  };

  const startVoiceRecognition = () => {
    if (!("webkitSpeechRecognition" in window)) {
      console.error(
        "Webkit Speech Recognition is not supported in this browser."
      );
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = async (event) => {
      const transcript = event.results[0][0].transcript;
      console.log("Voice Input:", transcript); // Debug: Log the recognized voice input
      setVoiceInput(transcript);
      const songResults = await fetchSongs(transcript);
      setSongs(songResults);
    };

    recognition.onerror = (event) => {
      console.error("Voice Recognition Error:", event.error); // Debug: Log any recognition errors
    };
  };

  const fetchSongs = async (query) => {
    if (!token) return [];

    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${query}&type=track`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();
    return data.tracks.items.map((track) => ({
      title: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      previewUrl: track.preview_url,
    }));
  };

  const playAudio = (previewUrl, index) => {
    if (currentAudio) {
      currentAudio.pause();
    }

    if (!previewUrl) {
      console.log("No preview URL available for this track.");
      return;
    }

    const audio = new Audio(previewUrl);
    audio.play();
    setCurrentAudio(audio);
    setPlayingIndex(index);
  };

  const stopAudio = () => {
    if (currentAudio) {
      currentAudio.pause();
      setCurrentAudio(null);
      setPlayingIndex(null);
    }
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="d-flex p-4 me-5 justify-content-end">
          <Link className="text text-white fw-bold me-4">Gmail</Link>
          <Link className="text text-white fw-bold me-4">Images</Link>
          <Link className="text text-white fw-bold">
            <FaUser />
          </Link>
        </div>
        <h1
          className={`text text-center text-white ${VoiceCss.iraiAligalText}`}
        >
          <span className={`${VoiceCss.i}`}>I</span>rai{" "}
          <span className={`${VoiceCss.a}`}>A</span>ligal
        </h1>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="w-50 w-md-50">
            <div className="input-group mt-5 flex-nowrap" onClick={voiceOpen}>
              <input
                type="text"
                className="form-control"
                placeholder="Voice Search"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                value={voiceInput}
                readOnly
              />
              <span className="input-group-text" id="addon-wrapping">
                <TiMicrophoneOutline />
              </span>
            </div>
          </div>
        </div>
        <div className="d-flex mt-4 justify-content-center">
          <Link to={"/"} className="btn fs-5" style={{ color: "#ef5a6f" }}>
            Go To Home Page
          </Link>
          {/* <p
            className="text me-5"
            style={{ fontFamily: "initial", fontWeight: "700" }}
          >
            Voice Search
          </p>
          <p style={{ fontFamily: "initial", fontWeight: "700" }}>
            Feeling Lucky
          </p> */}
        </div>
        {open && (
          <div
            className={`container-fluid d-flex align-items-center justify-content-center text-white voiceModel ${VoiceCss.voiceModel}`}
          >
            <div
              className={`col-10 col-md-4 bg-light voice-search ${VoiceCss.voiceSearch}`}
            >
              <div className="border-bottom px-2 py-1 w-100 d-flex align-items-center justify-content-between">
                <h5 className="text text-dark">Voice Search</h5>
                <MdCancel
                  className="btn-sm fs-3"
                  color="black"
                  onClick={micCancelBtn}
                />
              </div>
              <div className="w-100 h-50 d-flex align-items-center justify-content-center py-2">
                <div
                  className={`col-4 col-md-2 micIcon d-flex align-items-center justify-content-center bg-danger ${VoiceCss.micoIcon}`}
                  onClick={startVoiceRecognition}
                >
                  <FaMicrophone />
                </div>
              </div>
              <p className=" text-center text-dark">Click this icon</p>
            </div>
          </div>
        )}
        {songs && songs.length > 0 ? (
          <div className="container">
            <h2
              className="text text-white mb-3 fw-bold"
              style={{ fontFamily: "initial" }}
            >
              Song Results
            </h2>
            <div className="row">
              {songs.map((song, index) => (
                <div className="col-md-4 col-lg-3 mb-4">
                  <div
                    className="card h-100 p-3"
                    style={{ backgroundColor: "#121212" }}
                    key={index}
                  >
                    <h5 className="text text-white">{song.title}</h5>
                    <p style={{ color: "green" }}>Artist: {song.artist}</p>
                    <p className="text text-white">Album: {song.album}</p>
                    {song.previewUrl ? (
                      <>
                        <button
                          className="btn mb-2 btn-dark"
                          onClick={() => playAudio(song.previewUrl, index)}
                        >
                          <CgPlayPauseO className="fs-3" />
                        </button>
                        {playingIndex === index && (
                          <button
                            className="btn btn-danger"
                            onClick={stopAudio}
                          >
                            <FaCirclePlay className="fs-3" />
                          </button>
                        )}
                      </>
                    ) : (
                      <p>No preview available</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          songs && <p>No songs found.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Voice;
