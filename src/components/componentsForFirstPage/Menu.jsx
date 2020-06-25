import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const styles = {
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: '0',
        paddingBottom: '0'
    },

    sMenuItems: {
        justifyContent: 'center',
        padding: '0',
        width: '100%',
        height: '33.3333%',
    }
}

class Menu extends Component {
    constructor(props) {
        super(props);

        this.onSrollToMusicPage = this.onSrollToMusicPage.bind(this);
        this.onSrollToMyMusicPage = this.onSrollToMyMusicPage.bind(this);
        this.onSrollToContactsPage = this.onSrollToContactsPage.bind(this);
    }

    onSrollToMusicPage() {
        this.props.onCloseMenu();
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    };

    onSrollToMyMusicPage() {
        this.props.onCloseMenu();
        window.scrollTo({ top: window.innerHeight*2, behavior: 'smooth' });
    };

    onSrollToContactsPage() {
        this.props.onCloseMenu();
        if (document.documentElement.scrollHeight > window.innerHeight*3) {
            window.scrollTo({ top: window.innerHeight*3, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: window.innerHeight*2, behavior: 'smooth' });
        }
    };

    render(){
        const { classes } = this.props
        return(
            <MenuList className={ classes.root }>
                <MenuItem className={ classes.sMenuItems } onClick={ this.props.onCloseMenu }>Log in</MenuItem>
                <MenuItem className={ classes.sMenuItems } onClick={ this.onSrollToMusicPage }>Music</MenuItem>
                { document.documentElement.scrollHeight > window.innerHeight*3 ? 
                    <MenuItem className={ classes.sMenuItems } onClick={ this.onSrollToMyMusicPage }>My Music</MenuItem> 
                :
                    false
                }
                <MenuItem className={ classes.sMenuItems } onClick={ this.onSrollToContactsPage }>Contacts</MenuItem>
            </MenuList>
        );
    }
}

Menu.propTypes = {
    onCloseMenu: PropTypes.func.isRequired
};

export default withStyles(styles)(Menu);