import React, { createContext, useState } from 'react';
import TopSection from './topSection/topSection';
import SideSection from './sideSection/sideSection';


export const SidebarContext = createContext({

});

const SideBar = () => {
    const [isShowSidebar, setIsShowSidebar] = useState(false);
    return (
        <SidebarContext.Provider
            value={{ isShowSidebar, setIsShowSidebar }}
        >
            <div className="Sidebar_container">
                <TopSection />
                <SideSection />
            </div>
        </SidebarContext.Provider>
    );
}


export default SideBar;