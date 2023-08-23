import React from "react";
import "firebase/compat/firestore";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "..";
import "./AllSongs.css";
import PlayMusic from "./PlayMusic";

//const storage = getStorage();

class AllSongs extends React.Component {
  constructor() {
    super();
    this.song_data_array = [];
    this.state = {
      all_songs_list: [],
      loading: true,
    };
  }

  componentDidMount() {
    console.log("mount");

    listAll(ref(storage, "music"))
      .then((data) => {
        //console.log("data :", data);
        data.items.forEach(async (audioRef) => {
          await getDownloadURL(audioRef).then((url) => {
            //console.log("ref name:", audioRef.name, "Download url:", url);
            this.song_data_array.push({ name: audioRef.name, url: url });
            if (this.song_data_array.length === 4) {
              //console.log("data-array :", this.song_data_array);
              this.setState({
                all_songs_list: this.song_data_array,
                loading: false,
              });
            }
          });
        });
      })
      .catch((error) => {
        console.log("error in getting file from storage:", error);
      });
  }
  componentWillUnmount() {
    this.song_data_array = [];
    console.log("unmount");
  }

  render() {
    if (this.props.SongIndex !== -1) {
      return (
        <PlayMusic
          SongIndex={this.props.SongIndex}
          SongList={this.state.all_songs_list.slice(0, 4)}
          OnPlayMusicScreen={this.props.OnPlayMusicScreen}
          OnPlayPause={this.props.OnPlayPause}
        />
      );
    }
    return this.state.loading ? (
      <div className="loading-container">
        <div className="loading-content">
          <h2>Loading...</h2>
          <p>Please wait</p>
        </div>
      </div>
    ) : (
      <div className="allsongs-container">
        <h1>All Songs</h1>
        <hr />
        <div className="songs-list">
          {this.state.all_songs_list.slice(0, 4).map((item, index) => {
            if (index === 4) {
              return;
            }
            return (
              <div
                className={`song-item ${
                  this.props.currentMusicSelection === index
                    ? "selected-song"
                    : ""
                } `}
                key={index}
              >
                {item.name}
              </div>
            );
          })}
          <div className="instruction-all-songs">
            Use "<i className="fas fa-backward"></i>" and "
            <i className="fas fa-forward"></i>" buttons to navigate.
          </div>
        </div>
      </div>
    );
  }
}

export default AllSongs;
