import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = {
    root: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '5%'
    }
}

class Playlistadder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playlistTitle: ''  
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.setInputRef = this.setInputRef.bind(this);
    }

    handleChange(event) {
        const playlistTitle = event.target.value;
        this.setState({ playlistTitle })   
    }

    handleClick(event) {
        event.preventDefault();
        const { playlistTitle } = this.state;
        if ( playlistTitle ) {
           this.props.onAdd( playlistTitle );
           this.setState({ playlistTitle: '' })
        };      
    }
    
    setInputRef(node) {
        this.inputRef = node;
    }

    render() {   
        const { classes } = this.props;  
        return (
            <form className={ classes.root }> 
                
                <div>
                    <input 
                        type="text"
                        placeholder="The name of playlist"
                        value={ this.state.playlistTitle } 
                        onChange={ this.handleChange }
                        ref={ this.setInputRef }/>
                
                    <Button onClick={ this.handleClick }>
                        <AddIcon />
                    </Button>

                </div> 


    
            </form>
        );
    }
    
};

Playlistadder.propTypes = {
    onAdd: PropTypes.func.isRequired
}

export default withStyles(styles)(Playlistadder);