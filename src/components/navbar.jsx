import React, { useState, useContext } from 'react';
import { IsUsersCatsContext, IsUsersCatsProvider } from "../contexts/isUsersCats_context";
import LinkStyle from "../styleComponents/linkStyle";
import { AppBar, Toolbar, Box, } from "@material-ui/core";

const Navbar = props => {

    const [isUsersCats, setIsUsersCats] = useContext(IsUsersCatsContext);
    const [openLogin, setOpenLogin] = useState(false);

    const handleOpenLogin = () => {
        setOpenLogin(true);
    }

    const handleCloseLogin = () => {
        setOpenLogin(false);
    }


    let counter = 0;
    let colors = ["#ff0000", "#00ff00", "#0000ff"];
    const [color, setColor] = useState("#0000ff");

    const ChangeBgColor = () => {
        counter = (counter + 1) % 3;
        setColor(colors[counter]);
    }

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
                    {/* <button id="bgButton" onClick={ChangeBgColor}>ChangeBgColor</button> */}
                </Toolbar>
            </AppBar>
        </Box >
    );
}

export default Navbar;