import React from 'react';
import '../styles/navbarStyle.css';
import LinkStyle from "../styles/linkStyle";


const Navbar = props => {

    let colorClasses = [".red", ".green", ".blue"]
    let counter = 0;
    let colors = ["#ff0000", "#00ff00", "#0000ff"];

    const ChangeBgColor = () => {
        counter = counter < colorClasses.length - 1 ? ++counter : 0;
        console.log(counter);
        document.getElementById("navbarBg").style.color = colors[counter];
        let navbg = document.getElementById("navbarBg");
        console.log(navbg);
        console.log(colors[counter]);

    }

    // useEffect(() => {
    //     document.getElementById("bgButton").addEventListener("click",
    //         () => {
    //             counter = counter < colorClasses.length ? ++counter : 0;
    //             document.getElementById("navbarBg").style.color = colors[counter];
    //         });
    // });

    return (
        <div id="navbarBg">
            <LinkStyle to="/">Home</LinkStyle>
            <LinkStyle to="/my-cats">My cats</LinkStyle>
            <button>Logout</button>
            <button id="bgButton" onClick={ChangeBgColor}>ChangeBgColor</button>
        </div>
    );
}

export default Navbar;