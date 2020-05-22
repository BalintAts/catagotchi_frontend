import React, { Component } from 'react';
import './sideSectionStyle.scss';
import TopSection from '../topSection/topSection';

const SideSection = () => {
    return (
        <div className="Sidebar_sideSection">
            <TopSection />
            <h3>sidebarSide</h3>
        </div>
    );
}


export default SideSection;