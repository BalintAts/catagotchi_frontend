import React from 'react';
import { Grid } from "@material-ui/core";
import SideBar from './sideBar';
import CatGrid from './catGrid';



const MainGridLayout = props => {

    return (
        <>

            <h1>Behind the navbar</h1>
            <Grid container  >
                <Grid container item >
                    <Grid item sm={5} md={3} lg={2}>
                        <SideBar />
                    </Grid>
                    <Grid item sm={7} md={9} lg={10} justify="center" >
                        <CatGrid isUsersCats={props.isUsersCats} />
                    </Grid>
                </Grid>
            </Grid>

        </>
    )
}

export default MainGridLayout
