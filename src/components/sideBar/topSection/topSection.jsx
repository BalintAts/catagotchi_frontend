import React, { Component } from 'react';
import './topSectionStyle.scss';
import BurgerButton from '../BurgerButton/burgerButton';

const TopSection = () => {
    return (
        <div className="Sidebar_TopSection">
            <BurgerButton />
        </div>
    );
}


export default TopSection;