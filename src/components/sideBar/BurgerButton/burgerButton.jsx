import React, { Component } from 'react';
import './burgerButtonStyle.scss';


const BurgerButton = ({ onClick }) => {
    return (
        <div className="Sidebar_BurgerButton"
            role="button" onClick={onClick}>
            <h3>Filter</h3>
            {/* <i></i>
            <i></i>
            <i></i> */}

        </div>
    );
}


export default BurgerButton;