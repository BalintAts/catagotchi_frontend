import React, { useState, useContext } from 'react';
import { IsUsersCatsContext } from "../contexts/isUsersCats_context";
import LinkStyle from "../styleComponents/linkStyle";
import { AppBar, Toolbar, Box, } from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';

const Navbar = props => {

    const [isUsersCats, setIsUsersCats] = useContext(IsUsersCatsContext);
    const [color] = useState("#0000ff");

    const changeToMyCats = e => {
        setIsUsersCats(true);
    }

    const changeToALLCats = e => {
        setIsUsersCats(false);
    }

    return (
        <Box component="nav">
            <AppBar style={{ backgroundColor: color, position: "fixed" }}>
                <Toolbar style={{ justifyContent: "space-between" }}>
                    <div >
                        <LinkStyle to="/" onClick={changeToALLCats} style={{ textDecoration: "none", justify: "left" }}>Home</LinkStyle>
                        <LinkStyle to="/my-cats" onClick={changeToMyCats} style={{ textDecoration: "none", justify: "left" }}>My cats</LinkStyle>
                    </div>
                    <button onClick={handleOpenLogin} style={{ justify: "right" }}>Logout</button>
                </Toolbar>
            </AppBar>
        </Box >
    );
}

export default Navbar;