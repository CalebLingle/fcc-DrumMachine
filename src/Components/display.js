import React from 'react';
import Paper from '@material-ui/core/Paper';

const Display = (props) => (
        <Paper elevation={3}>
                <div id="display" style={{textAlign: "center"}}>{props.display}</div>
        </Paper>
    )

export default Display;