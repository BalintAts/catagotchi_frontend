import React, { Component } from 'react'
import { fakeData } from '../fakeData/fakeData';
import CatCard from './catCard';
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const CatGrid = props => {
    return (
        // <ul> {fakeData.map(cat =>
        //     <li key={cat.id}>
        //         <CatCard name={cat.name} img={cat.img} />
        //     </li>
        // )}
        // </ul>



        <Grid container
            spacing={4}
            justify="center">
            {fakeData.map(cat =>
                <Grid item xs={12} sm={6} md={4} key={cat.id}>
                    <CatCard name={cat.name} img={cat.img} />
                </Grid>
            )}
        </Grid>
    );
};

export default CatGrid;