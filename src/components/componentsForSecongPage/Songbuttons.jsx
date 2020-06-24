import React from 'react';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import StopIcon from '@material-ui/icons/Stop';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function Songbuttons(props) {
    return(
        <div>
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

export default Songbuttons;