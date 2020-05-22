import React, { Component, useContext } from 'react';
import './sideSectionStyle.scss';
import TopSection from '../topSection/topSection';
import BurgerButton from '../BurgerButton/burgerButton';
import { SidebarContext } from '../sideBar';

const SideSection = () => {
    const { isShowSidebar, setIsShowSidebar } = useContext(SidebarContext);
    return (
        <div className={`Sidebar_sideSection    sideSection--${isShowSidebar ? 'show' : 'hide'}`}>
            <div className="sideSection_topWrapper">
                <BurgerButton onClick={() => setIsShowSidebar(false)} />
            </div>
            <div className="sideSection_menu_Wrapper">
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