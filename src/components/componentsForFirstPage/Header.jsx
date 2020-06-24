import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        backgroundColor: 'yellow',
    },
    
    root2: {
      backgroundColor: 'rgba( 255,255,255, 0.6)',
      // #9e2627
      fontFamily: 'monospace',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: '70px',
    },

    sHeadersMenuButton: {
        width: '50px',
        height: '50px',
        flexBasis: '3%',
        margin: '0 .5%'
    },

    sHeadersH1: {
        flexBasis: '92%'
    },

    sHeadersLoginButton: {
        width: '70px',
        height: '12px',
        flexBasis: '5%',
        marginRight: '1%'
    }
}

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            opacityHeader: false
        };
    }

    render() {
        const { classes } = this.props;
        return(
            <header className={classes.root}>
                <div className={classes.root2}>
                    <IconButton className={ classes.sHeadersMenuButton } 
                                color="inherit" 
                                aria-label="Menu" 
                                onClick={ this.props.onOpenMenu }>
                        <MenuIcon />
                    </IconButton>

                    <h1 className={classes.sHeadersH1}>Hello World</h1>
                    <Button className={classes.sHeadersLoginButton} color="inherit">Login</Button> 
                </div>
            </header>
        )
    }
}

export default withStyles(styles)(Header);

