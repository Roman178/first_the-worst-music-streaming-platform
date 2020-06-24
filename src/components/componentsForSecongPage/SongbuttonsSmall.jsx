import React from 'react';

import Button from '@material-ui/core/Button';
import StopIcon from '@material-ui/icons/Stop';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseArrowIcon from '@material-ui/icons/Pause';

import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        display: 'flex',
        alignItems: 'center'
    }
}

function SongbuttonsSmall (props) {
    const { classes } = props;
    return(
        <div className={ classes.root }>
            <Button><PlayArrowIcon /></Button>
            <Button><PauseArrowIcon /></Button>
            <Button><StopIcon /></Button>
        </div>
    );
}

export default withStyles(styles)(SongbuttonsSmall);