import React, { Component } from "react";
import axios from "axios";

import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

import Song from "./componentsForSecongPage/Song";
import Playlistadder from "./componentsForSecongPage/Playlistadder";
import Songadder from "./componentsForSecongPage/Songadder";
import Songbuttons from "./componentsForSecongPage/Songbuttons";
import SongbuttonsSmall from "./componentsForSecongPage/SongbuttonsSmall";

import BackgroundImage from "../img/second.png";

const styles = (theme) => ({
  root: {
    flexBasis: "100%",
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "100% 100%",
    "@media (max-width: 1030px)": {
      flexDirection: "column",
      flexBasis: "50%",
      justifyContent: "flex-start",
      backgroundSize: "100% 50%",
    },
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    overflow: "hidden",
  },

  sBigContainers: {
    width: "50%",
    "@media (max-width: 1030px)": {
      width: "inherit",
      flexBasis: "50%",
      overflow: "hidden",
    },
  },

  sForm: {
    height: "100%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    opacity: "0.8",
  },

  sForm2: {
    backgroundColor: "#d2eaf7",
    alignItems: "normal",
  },

  sContainerPlaylistsAndSongs: {
    overflow: "hidden",
    height: "100%",
    width: "100%",
    display: "flex",
  },

  sSongsContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "4%",
    width: "100%",
    fontSize: "0.9em",
    overflow: "scroll",
  },

  sTabs: {
    minWidth: "100%",
    maxWidth: "100px",
  },

  sSongAndButtonsCont: {
    flexGrow: "1",
    display: "flex",
    justifyContent: "space-between",
    borderTop: "dotted 1px",
  },

  sContainerH2AndPlaylistadder: {
    display: "flex",
    justifyContent: "center",
  },

  sContainerSongsSongadderDeleteplaylist: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    fontSize: "0.9em",
    wordBreak: "break-all",
  },

  secondContSongsSongsadderDeletepllstbttn: {
    overflow: "scroll",
    marginLeft: "4%",
    width: "100%",
  },

  sDeletePlIcon: {
    position: "absolute",
    bottom: "-5",
    right: "0",
  },

  sAnimation: {
    animation: "appear 0.5s ease",
  },

  "@keyframes appear": {
    "0%": {
      opacity: "0",
    },
    "100%": {
      opacity: "1",
    },
  },
});

class SecondPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: { namesOfUsersPlaylists: [] },
      isLoading: true,
      value: 0,
      value2: NaN,
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSongAdd = this.handleSongAdd.bind(this);
    this.handleSongDelete = this.handleSongDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://warm-bastion-65369.herokuapp.com")
      .then((response) => {
        this.setState({ songs: response.data, isLoading: false });
      })
      .catch(this.handleError);
  }

  handleAdd(genre) {
    if (
      this.state.songs.namesOfUsersPlaylists.filter(
        (playlist) => playlist.toLowerCase() === genre.toLowerCase()
      ).length > 0
    ) {
      alert("You already have a playlist with the same name");
    } else {
      if (this.state.songs.namesOfUsersPlaylists.length < 10) {
        axios
          .post("https://warm-bastion-65369.herokuapp.com", { genre })
          .then((response) => this.setState({ songs: response.data }))
          .catch(this.handleError);
      } else {
        alert("You can't add more playlists");
      }
    }
  }

  handleDelete() {
    let deletedPlaylist = this.state.songs.namesOfUsersPlaylists[
      this.state.value2
    ];
    axios
      .delete(`https://warm-bastion-65369.herokuapp.com`, {
        data: { deletedPlaylist },
      })
      .then((response) => this.setState({ songs: response.data, value2: NaN }))
      .catch(this.handleError);
  }

  handleSongAdd(nameOfPlaylist, artistName, songName) {
    if (this.state.songs[nameOfPlaylist].length < 14) {
      axios
        .put("https://warm-bastion-65369.herokuapp.com", {
          nameOfPlaylist,
          artistName,
          songName,
        })
        .then((response) => this.setState({ songs: response.data }))
        .then(() => console.log(this.state))
        .catch(this.handleError);
    } else {
      alert("You can't add more songs in this playlist");
    }
  }

  handleSongDelete(id, playlistName) {
    axios
      .delete(`https://warm-bastion-65369.herokuapp.com`, {
        data: { id, playlistName },
      })
      .then((response) => this.setState({ songs: response.data }))
      .catch(this.handleError);
  }

  handleChange(event, value) {
    this.setState({ value });
  }

  handleChange2(event, value2) {
    this.setState({ value2 });
  }

  handleError(error) {
    console.error(error);
  }

  render() {
    const { classes } = this.props;
    const { songs, isLoading, value, value2 } = this.state;

    const helperArr1 = [
      { num: 0, genre: "HipHop" },
      { num: 1, genre: "RockNRoll" },
      { num: 2, genre: "Funk" },
      { num: 3, genre: "Pop" },
    ];
    const helperArr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    return (
      <div className={classes.root}>
        {/* Playlists of the week */}

        <div className={classes.sBigContainers}>
          <div className={classes.sForm}>
            <h2>Playlists of the week</h2>
            <div className={classes.sContainerPlaylistsAndSongs}>
              <Tabs value={value} onChange={this.handleChange}>
                <Tab label="Hip-Hop" className={classes.sTabs} />
                <Tab label="Rock'n Roll" className={classes.sTabs} />
                <Tab label="Funk" className={classes.sTabs} />
                <Tab label="Pop" className={classes.sTabs} />
              </Tabs>
              <div className={classes.sSongsContainer}>
                {helperArr1.map(
                  (obj) =>
                    value === obj.num &&
                    !isLoading &&
                    songs[obj.genre].map((song) => (
                      <div
                        className={
                          classes.sSongAndButtonsCont + " " + classes.sAnimation
                        }
                      >
                        <Song
                          key={song.id}
                          id={song.id}
                          name={song.name}
                          author={song.author}
                        />
                        <SongbuttonsSmall />
                      </div>
                    ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* My Playlists */}

        <div className={classes.sBigContainers}>
          <div className={classes.sForm + " " + classes.sForm2}>
            <div className={classes.sContainerH2AndPlaylistadder}>
              <h2>My playlists</h2>
              <Playlistadder onAdd={this.handleAdd} />
            </div>

            <div className={classes.sContainerPlaylistsAndSongs}>
              <Tabs value={value2} onChange={this.handleChange2}>
                {songs.namesOfUsersPlaylists.map((song) => (
                  <Tab label={song} className={classes.sTabs} />
                ))}
              </Tabs>
              <div className={classes.secondContSongsSongsadderDeletepllstbttn}>
                {helperArr2.map((num) => (
                  <div
                    className={classes.sContainerSongsSongadderDeleteplaylist}
                  >
                    <div>
                      {value2 === num &&
                        songs[songs.namesOfUsersPlaylists[num]].map((song) => (
                          <div
                            className={
                              classes.sSongAndButtonsCont +
                              " " +
                              classes.sAnimation
                            }
                          >
                            <Song
                              key={song.id}
                              id={song.id}
                              name={song.name}
                              author={song.author}
                            />
                            <Songbuttons
                              id={song.id}
                              playlistName={songs.namesOfUsersPlaylists[num]}
                              onDelete={this.handleSongDelete}
                            />
                          </div>
                        ))}
                      {value2 === num && (
                        <div className={classes.sAnimation}>
                          <Songadder
                            playlistName={songs.namesOfUsersPlaylists[num]}
                            onAdd={this.handleSongAdd}
                          />
                        </div>
                      )}
                    </div>
                    <div>
                      {value2 === num && (
                        <Button
                          className={
                            classes.sAnimation + " " + classes.sDeletePlIcon
                          }
                          onClick={this.handleDelete}
                        >
                          {" "}
                          Delete playlist <DeleteIcon />{" "}
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SecondPage);
