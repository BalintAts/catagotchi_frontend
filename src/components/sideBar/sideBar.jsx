import React, { Component, createContext, useState } from 'react';
import TopSection from './topSection/topSection';
import SideSection from './sideSection/sideSection';


export const SidebarContext = createContext({

});

const SideBar = () => {
    const [isShowSidebar, setShowSidebar] = useState(false);
    return (
        <SidebarContext.Provider
            value={{ isShowSidebar, setShowSidebar }}
        >
            <div className="Sidebar_container">
                <TopSection />
                <SideSection />
            </div>
        </SidebarContext.Provider>
    );
}


export default SideBar;