import React, { Component } from 'react'

import LinkStyle from "../styles/linkStyle";


const Navbar = props => {

    let colorClasses = ["red", "green", "blue"]
    let counter = 0;

    const ChangeBgColor = () => {
        counter++;
        console.log(counter);
    }


    return (
        // <div classname={}>
        <div>
            <LinkStyle to="/">Home</LinkStyle>
            <LinkStyle to="/my-cats">My cats</LinkStyle>
            <button>Logout</button>
            <button onClick={ChangeBgColor}>ChangeBgColor</button>

            {/* <LinkStyle to="/debugPokemon">DebugPokemon</LinkStyle> */}
        </div>
    );
}

export default Navbar;