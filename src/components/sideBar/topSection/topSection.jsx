import React, { Component, useContext } from 'react';
import './topSectionStyle.scss';
import BurgerButton from '../BurgerButton/burgerButton';
import { SidebarContext } from '../sideBar';
import Navbar from '../../navbar';

const TopSection = () => {
    const { isShowSidebar, setIsShowSidebar } = useContext(SidebarContext);
    return (
        <>
            <div className="Sidebar_TopSection">
                <BurgerButton onClick={() => setIsShowSidebar(true)} />
            </div>

        </>
    );
}


export default TopSection;