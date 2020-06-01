import React, { createContext, useState } from 'react';
import TopSection from './topSection/topSection';
import SideSection from './sideSection/sideSection';
import BurgerButton from './BurgerButton/burgerButton';


export const SidebarContext = createContext({

});

const SideBar = () => {
    const [isShowSidebar, setIsShowSidebar] = useState(false);
    return (
        <SidebarContext.Provider
            value={{ isShowSidebar, setIsShowSidebar }}
        >
            <div className="Sidebar_container">
                <BurgerButton onClick={() => setIsShowSidebar(true)} />
                {/* <TopSection /> */}
                <SideSection />
            </div>
        </SidebarContext.Provider>
    );
}


export default SideBar;