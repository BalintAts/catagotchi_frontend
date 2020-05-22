import React, { Component } from 'react';
import './sideSectionStyle.scss';
import TopSection from '../topSection/topSection';
import BurgerButton from '../BurgerButton/burgerButton';

const SideSection = () => {
    return (
        <div className="Sidebar_sideSection">
            <div className="sideSection_topWrapper">
                <BurgerButton />
            </div>
            <div className="side_menu_wrapper">
                <li>
                    ewrhfhfh
                </li>
                <li>
                    dfhfghfghd
                </li>
                <li>
                    hfhdfhdffg
                </li>
                <p>dgkddkfjh</p>
            </div>
        </div>
    );
}


export default SideSection;