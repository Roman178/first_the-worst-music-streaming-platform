import React, { Component } from 'react';
import axios from 'axios';

import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import StopIcon from '@material-ui/icons/Stop';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import Song from './componentsForSecongPage/Song';
import Playlistadder from './componentsForSecongPage/Playlistadder';
import Songadder from './componentsForSecongPage/Songadder';
import Songbuttons from './componentsForSecongPage/Songbuttons';
import SongbuttonsSmall from './componentsForSecongPage/SongbuttonsSmall';
// import { func } from 'prop-types';
// import { yellow } from '@material-ui/core/colors';

const styles = {
	root: {
        flexBasis: '100%',
        backgroundImage: `url(http://oki-nadejda.com/wp-content/uploads/muzikalen.jpg)`,
        backgroundSize: '100% 100%',
        display: 'flex',
        // flexDirection: 'column',
        justifyContent: 'center',
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif;'
    },
    
    sBigContainers: {
        width: '50%'
    },

    sForm: {
        height: '100%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        opacity: '0.8'
    },

    sForm2: {
        backgroundColor: '#d2eaf7',
    },

    sContainerPlaylistsAndSongs: {
        height: '100%',
        width: '100%',
        display: 'flex'
    },
    
    sSongsContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '4%',
        width: '100%',
        fontSize: '0.9em',        
    },

    sTabs: {
        minWidth: '100%',
        maxWidth: '100px'
    },

    sSongAndButtonsCont: {
        flexGrow: '1',
        display: 'flex',
        justifyContent: 'space-between',        
        borderTop: 'dotted 1px'
    },

    sContainerH2AndPlaylistadder: {
        display: 'flex'
    },

    sContainerSongsSongadderDeleteplaylist: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    secondContSongsSongsadderDeletepllstbttn: {
        marginLeft: '4%',
        width: '100%',
        position: 'relative'
    },

    sDeletePlIcon: {
        position: 'absolute',
        bottom: '0',
        right: '0'
    },

    sAnimation: {
        animation: 'appear 0.5s ease'
    },

    '@keyframes appear': {
        '0%': {
          opacity: '0',
        },
        '100%': {
          opacity: '1',
        },
      },
}

class SecondPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            songs: { namesOfUsersPlaylists: [] },
            isLoading: true,                     
            value: 0,
            value2: NaN
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
            axios.get('http://localhost:3006/api/songs')
            .then( (response) => {
                this.setState({ songs: response.data, isLoading: false })
            })
    }

    handleAdd(genre) {
        if (this.state.songs.namesOfUsersPlaylists.length < 10) {
            axios.post('/api/songs', { genre })
            // .then(response => console.log(response.data))
            .then(response => this.setState({ songs: response.data }))
            // .then( () => console.log(this.state) )
            // .then(song => this.setState({ songs: { ...this.state.songs, song } }))
            // .catch(this.handleError);
        } else {
            alert("You can't add more playlists");
        }
    }

    handleDelete() {
        let deletedPlaylist = this.state.songs.namesOfUsersPlaylists[this.state.value2];
        axios.delete(`/api/songs`, { data: { deletedPlaylist } } )
            .then(response => this.setState({ songs: response.data,  value2: NaN }))
    }

    handleSongAdd(nameOfPlaylist, artistName, songName) {

        if(this.state.songs[nameOfPlaylist].length < 10) {
            axios.put('api/songs', { nameOfPlaylist, artistName, songName })
            .then(response => this.setState({ songs: response.data }))
            .then( () => console.log(this.state) )

        // console.log( nameOfPlaylist, artistName, songName );
        } else {
            alert("You can't add more songs in this playlist");
        }        
    }

    handleSongDelete(id, playlistName) {
        axios.delete(`/api/songs`, { data: { id, playlistName } } )
        .then(response => this.setState({ songs: response.data }));
        // console.log(id);
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

        const arr1 = [  {num: 0, genre: 'HipHop'}, 
                        {num: 1, genre: 'RockNRoll'}, 
                        {num: 2, genre: 'Funk'}, 
                        {num: 3, genre: 'Pop'} ];
        const arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        
        return(            
    		<div className={classes.root} >

                {/* Playlists of the week */}

                <div className={ classes.sBigContainers } >
                    <div className={classes.sForm}> 

                        <h2>Playlists of the week</h2>
                        <div className={ classes.sContainerPlaylistsAndSongs }>                        
                            <Tabs value={value} onChange={ this.handleChange } >
                                <Tab label="Hip-Hop"className={ classes.sTabs }/>
                                <Tab label="Rock'n Roll" className={ classes.sTabs }/>
                                <Tab label="Funk" className={ classes.sTabs }/>
                                <Tab label="Pop" className={ classes.sTabs }/>
                            </Tabs>          
                            <div className={ classes.sSongsContainer  }>

                                { arr1.map(obj => 
                                    value === obj.num && !isLoading &&
                                        songs[obj.genre].map(song => <div className={ classes.sSongAndButtonsCont + ' ' + classes.sAnimation } >
                                                                        <Song key={ song.id } id={ song.id } name={ song.name } author={ song.author } />
                                                                        <SongbuttonsSmall />
                                                                    </div> ) 
                                )}

                            </div>
                        </div>
                    </div>
                </div>


                {/* My Playlists */}                

                <div className={ classes.sBigContainers } >
                    <div className={ classes.sForm + ' ' + classes.sForm2 }>

                        <div className={ classes.sContainerH2AndPlaylistadder }>
                            <h2>My playlists</h2><Playlistadder onAdd={ this.handleAdd }/>
                        </div>
                    
                        <div className={ classes.sContainerPlaylistsAndSongs }>                    
                            <Tabs value={value2} onChange={ this.handleChange2 }>
                                { songs.namesOfUsersPlaylists.map(song => 
                                    <Tab label={ song } className={ classes.sTabs }/>)                
                                }
                            </Tabs>
                            <div className={ classes.secondContSongsSongsadderDeletepllstbttn }>
                                { arr2.map(num => 
                                    <div className={ classes.sContainerSongsSongadderDeleteplaylist } >
                                        <div>
                                            { value2 === num && songs[ songs.namesOfUsersPlaylists[num] ].map(song => 
                                                <div className={ classes.sSongAndButtonsCont + ' ' + classes.sAnimation }>
                                                    <Song key={ song.id } id={ song.id } name={ song.name } author={ song.author } />
                                                    <Songbuttons id={ song.id } playlistName={ songs.namesOfUsersPlaylists[num] } onDelete={ this.handleSongDelete } />
                                                </div>) }
                                            { value2 === num && <div className={ classes.sAnimation }><Songadder playlistName={ songs.namesOfUsersPlaylists[num] } onAdd={ this.handleSongAdd }/></div> }
                                           </div>
                                        <div>
                                            { value2 === num && <Button className={ classes.sAnimation + ' ' + classes.sDeletePlIcon } onClick={ this.handleDelete }> Delete playlist <DeleteIcon /> </Button> }
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div> 
                    </div>
                </div>              

            </div>
        );
    }
} 

export default withStyles(styles)(SecondPage);