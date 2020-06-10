import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
} from 'react-router-dom';
import LinkStyle from "../styleComponents/linkStyle";
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    Grid
} from "@material-ui/core";
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const Navbar = props => {


    let counter = 0;
    let colors = ["#ff0000", "#00ff00", "#0000ff"];
    const [color, setColor] = useState("#0000ff");

    const ChangeBgColor = () => {
        counter = (counter + 1) % 3;
        setColor(colors[counter]);
    }

    return (
        <Box component="nav">
            <AppBar style={{ backgroundColor: color, position: "fixed" }}>
                <Toolbar style={{ justifyContent: "space-between" }}>
                    <div >
                        <LinkStyle to="/" style={{ textDecoration: "none", justify: "left" }}>Home</LinkStyle>
                        <LinkStyle to="/my-cats" style={{ textDecoration: "none", justify: "left" }}>My cats</LinkStyle>
                    </div>
                    <button style={{ justify: "right" }}>Logout</button>
                    {/* <button id="bgButton" onClick={ChangeBgColor}>ChangeBgColor</button> */}
                </Toolbar>
            </AppBar>
        </Box >
    );
}

export default Navbar;