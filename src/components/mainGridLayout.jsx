import React, { useState } from 'react';
import { Grid, Hidden, Button } from "@material-ui/core";
import Navbar from './navbar';
import { FilterContext } from "./searchAttributes/filterContext";
import { FilterProvider } from "./searchAttributes/filterContext";
import SideBar from './sideBar';
import CatGrid from './catGrid';
import SideSection from './sideSection';
import CatDetail from '../pages/catDetail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TagStyle from '../styleComponents/tagStyle';
import Tag from './tag';
import { IsUsersCatsProvider } from '../contexts/isUsersCats_context';



const MainGridLayout = props => {

    const [sideVisible, setSideVisible] = useState(true);

    const toggleMenuVisibility = () => {
        setSideVisible(sideVisible ? false : true);
        let sideSpan = sideVisible ? 3 : 0;
        let catGridSpan = sideVisible ? 9 : 12;
        return { sideSpan, catGridSpan };
    }

    const tagList = ["tag1", "tag2", "tag3"];

    return (
        <>
            <div style={{ backgroundColor: "#00FFAA" }}>
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
            </div>
        </>
    )
}

export default MainGridLayout
