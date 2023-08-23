import React from "react";
import "./App.css";
import Buttons from "./Contoller";
import Screen from "./Screen";
import ZingTouch from "zingtouch";
import $ from "jquery";

class App extends React.Component {
  constructor() {
    super();
    this.change_in_angle = 0;
    this.temp_selected = 0;
    this.state = {
      options: ["Games", "Songs", "Settings", "CoverFlow"],
      selectedOption: 0, //index of current active option
      showPage: -1, //index of which page to show
      general_menu: ["Games", "Songs", "Settings", "CoverFlow"],
      song_sub_menu: ["All Songs", "Artists", "Albums"],
      current_playing_song_index: 0,
      song_index: -1,
      on_music_playing_screen: false,
    };
  }
  componentDidMount() {
    let zt = new ZingTouch.Region(
      document.getElementsByClassName("btn-container")[0]
    );
    zt.bind(
      document.getElementsByClassName("btn-container")[0],
      "rotate",
      (event) => {
        if (
          document
            .getElementsByClassName("menu-container")[0]
            .classList.contains("show")
        ) {
          //allow rotate gesture only when menu is visible
          let dist = event.detail.distanceFromLast;
          this.change_in_angle += dist;
          if (this.change_in_angle > 60) {
            this.temp_selected++;
            this.temp_selected = this.temp_selected % this.state.options.length;
            this.setState({
              selectedOption: this.temp_selected,
            });
            this.change_in_angle = 0;
          } else if (this.change_in_angle < -60) {
            this.temp_selected--;
            if (this.temp_selected === -1) {
              this.temp_selected = this.state.options.length - 1;
            }
            this.temp_selected = this.temp_selected % this.state.options.length;
            this.setState({
              selectedOption: this.temp_selected,
            });
            this.change_in_angle = 0;
          }
        }
      }
    );
  }
  menuBtnClick = () => {
    // if(this.state.showPage !== -1){ //back to home when different page is showing on screen
    //   this.setState({
    //     showPage: -1
    //   });
    // }else{
    let showMenuClassList =
      document.getElementsByClassName("menu-container")[0].classList;
    if (showMenuClassList.contains("show")) {
      $(".menu-container").removeClass("show");
    } else {
      $(".menu-container").addClass("show");
    }
    //}
  };
  selectBtnClicked = () => {
    //select button click handler
    if (this.state.selectedOption === 1 && this.state.options.length === 4) {
      this.setState({
        options: this.state.song_sub_menu,
        selectedOption: 0,
        showPage: -1,
      });
      this.temp_selected = 0;
      return;
    }

    if (
      !document
        .getElementsByClassName("menu-container")[0]
        .classList.contains("show")
    ) {
      if (this.state.options.length === 3) {
        if (this.state.showPage === 0) {
          if (this.state.song_index === -1) {
            this.setState({
              song_index: this.state.current_playing_song_index,
            });
            this.temp_selected = 0;
            return;
          }
        }
      }
    }

    this.setState({
      showPage: this.state.selectedOption,
      selectedOption: 0,
    });
    this.temp_selected = 0;
    this.menuBtnClick();
  };

  leftBtnClicked = () => {
    if (
      this.state.options.length === 3 &&
      document
        .getElementsByClassName("menu-container")[0]
        .classList.contains("show")
    ) {
      this.setState({
        options: this.state.general_menu,
        selectedOption: 0,
      });
      this.temp_selected = 0;
    }

    if (this.state.current_playing_song_index) {
      if (
        !document
          .getElementsByClassName("menu-container")[0]
          .classList.contains("show")
      ) {
        if (this.state.song_index === 0) {
          this.setState({
            song_index: 3,
          });
          return;
        }
        if (this.state.song_index !== -1) {
          this.setState({
            song_index: this.state.song_index - 1,
          });
          return;
        }
      }
    }

    if (
      !document
        .getElementsByClassName("menu-container")[0]
        .classList.contains("show")
    ) {
      if (this.state.options.length === 3) {
        if (this.state.showPage === 0) {
          if (this.state.current_playing_song_index === 0) {
            this.setState({
              current_playing_song_index: 3,
            });
          } else {
            this.setState({
              current_playing_song_index:
                this.state.current_playing_song_index - 1,
            });
          }
        }
      }
    }
  };

  rightBtnClick = () => {
    if (this.state.current_playing_song_index) {
      if (
        !document
          .getElementsByClassName("menu-container")[0]
          .classList.contains("show")
      ) {
        if (this.state.song_index === 3) {
          this.setState({
            song_index: 0,
          });
          return;
        }
        if (this.state.song_index !== -1) {
          this.setState({
            song_index: this.state.song_index + 1,
          });
          return;
        }
      }
    }

    if (
      !document
        .getElementsByClassName("menu-container")[0]
        .classList.contains("show")
    ) {
      if (this.state.options.length === 3) {
        if (this.state.showPage === 0) {
          if (this.state.current_playing_song_index === 3) {
            this.setState({
              current_playing_song_index: 0,
            });
          } else {
            this.setState({
              current_playing_song_index:
                this.state.current_playing_song_index + 1,
            });
          }
        }
      }
    }
  };

  currentlyOnMusicPlayingScreen = () => {
    console.log("playmusicboolean");
    if (this.state.on_music_playing_screen) {
      this.setState({
        on_music_playing_screen: false,
      });
    } else {
      this.setState({
        on_music_playing_screen: true,
      });
    }
  };

  playPauseBtn = () => {
    console.log("play/pause");
    if ($("#audio")[0] !== undefined) {
      if ($("#audio")[0].paused) {
        $("#audio")[0].play();
        return;
      }
      if (!$("#audio")[0].paused) {
        $("#audio")[0].pause();
        return;
      }
    }
  };

  render() {
    return (
      <div className="App">
        <div className="frame">
          <Screen
            MenuOptions={this.state.options}
            selectedOption={this.state.selectedOption}
            showPage={this.state.showPage}
            currentMusicSelection={this.state.current_playing_song_index}
            SongIndex={this.state.song_index}
            OnPlayMusicScreen={this.currentlyOnMusicPlayingScreen}
            OnPlayPause={this.playPauseBtn}
          />

          <Buttons
            OnMenuClick={this.menuBtnClick}
            OnSelectClick={this.selectBtnClicked}
            OnLeftClick={this.leftBtnClicked}
            OnRightClick={this.rightBtnClick}
            OnPlayPause={this.playPauseBtn}
          />
        </div>
      </div>
    );
  }
}

export default App;
