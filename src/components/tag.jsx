import React from 'react'
import { Grid } from '@material-ui/core';

const Tag = props => {
    return (
        <Grid container item>
            <Grid item>
                {props.value}
            </Grid>
            <Grid item>
                {/* <button>x</button> */}
            </Grid>

        </Grid>
    )
}

export default Tag;
