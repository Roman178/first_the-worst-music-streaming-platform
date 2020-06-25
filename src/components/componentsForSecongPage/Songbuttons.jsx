import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import StopIcon from '@material-ui/icons/Stop';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const styles = {
    root: {
        display: 'flex',
        '@media (max-width: 450px)': {
            flexBasis: '30%',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'flex-end'
        }
    }
}

function Songbuttons(props) {
    const { classes } = props;
    return(
        <div className={ classes.root }>
            <Button><PlayArrowIcon /></Button>
            <Button><StopIcon /></Button>
            <Button onClick={ (event) => {
                                event.preventDefault();
                                props.onDelete(props.id, props.playlistName);
                            }}>                    
                <DeleteIcon />
            </Button>
        </div>
    );
}

Songbuttons.propTypes = {
    onDelete: PropTypes.func.isRequired,
    id: PropTypes.number,
    playlistName: PropTypes.string
}

export default withStyles(styles)(Songbuttons);