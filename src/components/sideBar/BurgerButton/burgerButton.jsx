import React from 'react';
import './burgerButtonStyle.scss';


const BurgerButton = ({ onClick }) => {
    return (
        <h3 className="Sidebar_BurgerButton"
            role="button" onClick={onClick}>Filter</h3>
    );
}


export default BurgerButton;