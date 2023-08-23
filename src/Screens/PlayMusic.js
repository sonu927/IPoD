import React, { useEffect } from "react";
import $ from "jquery";
import "./PlayMusic.css";

function PlayMusic(props) {
  const { SongList, SongIndex, OnPlayMusicScreen, OnPlayPause } = props;

  useEffect(() => {
    if (SongIndex !== -1) {
      OnPlayMusicScreen();
      $("#audio")[0].play();
    }

    return () => {
      if (SongIndex !== -1) {
        OnPlayMusicScreen();
      }
    };
  }, [SongIndex, OnPlayMusicScreen, OnPlayPause]);

  return (
    <div className="song-container">
      <h1>{SongList[SongIndex].name}</h1>
      <div className="song-img">
        <img
          src="https://cdn-icons-png.flaticon.com/128/10012/10012497.png"
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div>
        <audio controls="seeking" id="audio" src={SongList[SongIndex].url} />
      </div>
      <div className="screen-music-instruction">
        <span>
          Press "<i className="fas fa-play"></i>/
          <i className="fas fa-pause"></i>" button to play/pause.
        </span>
      </div>
    </div>
  );
}

export default PlayMusic;
