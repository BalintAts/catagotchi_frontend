import React, { Component } from 'react';
import TopSection from './topSection/topSection';
import SideSection from './sideSection/sideSection';


const SideBar = () => {
    return (
        <div className="Sidebar_container">
            <TopSection />
            <SideSection />
        </div>
    );
}


export default SideBar;