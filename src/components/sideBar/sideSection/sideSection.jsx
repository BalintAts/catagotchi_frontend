import React, { Component, useContext } from 'react';
import './sideSectionStyle.scss';
import TopSection from '../topSection/topSection';
import BurgerButton from '../BurgerButton/burgerButton';
import { SidebarContext } from '../sideBar';
import Gender from '../../searchAttributes/gender';


const SideSection = () => {
    const { isShowSidebar, setIsShowSidebar } = useContext(SidebarContext);
    return (
        <div className={`Sidebar_sideSection    sideSection--${isShowSidebar ? 'show' : 'hide'}`}>
            <div className="sideSection_topWrapper">
                <BurgerButton onClick={() => setIsShowSidebar(false)} />
            </div>
            <div className="sideSection_menu_Wrapper">
                <li>
                    <select name="gender" id="gender">
                        <option value="male">male</option>
                        <option value="femalegztuztuztuz">gkjthgkjhdgfemale</option>
                    </select>
                </li>
                <li>
                    <select name="gender" id="gender">
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                </li>
                <li>
                    <select name="gender" id="gender">
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                </li>
            </div>
        </div>
    );
}


export default SideSection;