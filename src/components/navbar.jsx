import React, { useState } from 'react';
import '../styles/navbarStyle.css';
import LinkStyle from "../styles/linkStyle";


const Navbar = props => {

    let counter = 0;
    let colors = ["#ff0000", "#00ff00", "#0000ff"];
    const [color, setColor] = useState("#0000ff");

    const ChangeBgColor = () => {
        counter = (counter + 1) % 3;
        setColor(colors[counter]);
    }

    return (
        <div id="navbarBg" style={{ backgroundColor: color }} >
            <LinkStyle to="/">Home</LinkStyle>
            <LinkStyle to="/my-cats">My cats</LinkStyle>
            <button>Logout</button>
            <button id="bgButton" onClick={ChangeBgColor}>ChangeBgColor</button>
        </div>
    );
}

export default Navbar;