import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

class Songadder extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            artistName: '',
            songName: ''  
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }

    handleChange(event) {
        const artistName = event.target.value;
        this.setState({ artistName })   
    }

    handleChange2(event) {
        const songName = event.target.value;
        this.setState({ songName })   
    }

    handleClick(event) {
        event.preventDefault();
        const { artistName, songName } = this.state;
        if ( artistName && songName ) {
           this.props.onAdd(this.props.playlistName, artistName, songName );                      
           this.setState({ artistName: '',  songName: ''})
        };      
    }      

    render() {     
        return (
            <form > 
                
                <div>
                    
                    <input 
                        type="text"
                        placeholder="The name of artist/band"
                        value={ this.state.artistName } 
                        onChange={ this.handleChange }/>

                    <input 
                        type="text"
                        placeholder="The name of song"
                        value={ this.state.songName } 
                        onChange={ this.handleChange2 }/>

                    <Button onClick={ this.handleClick }>
                        <AddIcon />
                    </Button>
                    
                </div> 
    
            </form>
        );
    }
    
};

export default Songadder;