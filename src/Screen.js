import React from "react";
import "./Screen.css";
import Menu from "./Screens/Menu";
import Games from "./Screens/Games";
import Songs from "./Screens/Songs";
import Settings from "./Screens/Settings";
import CoverFlow from "./Screens/CoverFlow";
import AllSongs from "./Screens/AllSongs";
import Artists from "./Screens/Artists";
import Albums from "./Screens/Albums";

const Screen = (props) => {
  const {
    MenuOptions,
    selectedOption,
    showPage,
    currentMusicSelection,
    SongIndex,
    OnPlayMusicScreen,
    OnPlayPause,
  } = props;
  return (
    <div className="screen-container">
      <Menu MenuOptions={MenuOptions} selectedOption={selectedOption} />
      {MenuOptions.length === 3 ? (
        <>
          {showPage === 0 ? (
            <AllSongs
              currentMusicSelection={currentMusicSelection}
              SongIndex={SongIndex}
              OnPlayMusicScreen={OnPlayMusicScreen}
              OnPlayPause={OnPlayPause}
            />
          ) : (
            ""
          )}
          {showPage === 1 ? <Artists /> : ""}
          {showPage === 2 ? <Albums /> : ""}
        </>
      ) : (
        <>
          {showPage === 0 ? <Games /> : ""}
          {showPage === 1 ? <Songs /> : ""}
          {showPage === 2 ? <Settings /> : ""}
          {showPage === 3 ? <CoverFlow /> : ""}
        </>
      )}
    </div>
  );
};

export default Screen;
