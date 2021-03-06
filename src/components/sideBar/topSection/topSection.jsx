import React, { useContext } from 'react';
import './topSectionStyle.scss';
import BurgerButton from '../BurgerButton/burgerButton';
import { SidebarContext } from '../sideBar';

const TopSection = () => {
    const { setIsShowSidebar } = useContext(SidebarContext);
    return (
        <>
            <div className="Sidebar_TopSection">
                <BurgerButton onClick={() => setIsShowSidebar(true)} />
            </div>

        </>
    );
}


export default TopSection;