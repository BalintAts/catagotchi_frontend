import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import '../styles/navbarStyle.css';
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
    Box
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
        // <div id="navbarBg" style={{ backgroundColor: color }} >
        //     <LinkStyle to="/">Home</LinkStyle>
        //     <LinkStyle to="/my-cats">My cats</LinkStyle>
        //     <button>Logout</button>
        //     <button id="bgButton" onClick={ChangeBgColor}>ChangeBgColor</button>
        // </div>
        <Box component="nav">
            {/* <div id="navbarBg" style={{ backgroundColor: color }} > */}
            <AppBar style={{ backgroundColor: color }}>
                <Toolbar>
                    <IconButton>
                        <ArrowBack />
                    </IconButton>
                    <LinkStyle to="/">Home</LinkStyle>
                    <LinkStyle to="/my-cats">My cats</LinkStyle>
                    <button>Logout</button>
                    <button id="bgButton" onClick={ChangeBgColor}>ChangeBgColor</button>
                </Toolbar>
            </AppBar>
        </Box >
    );
}

export default Navbar;