import React, { createContext, useState } from 'react';
import SideSection from './sideSection/sideSection';
import FilterButton from './BurgerButton/filterButton';


export const SidebarContext = createContext({

});

const SideBar = () => {
    const [isShowSidebar, setIsShowSidebar] = useState(false);
    return (
        <SidebarContext.Provider
            value={{ isShowSidebar, setIsShowSidebar }}
        >
            {isShowSidebar ? (<SideSection />) :
                (
                    <div className="Sidebar_container">
                        <FilterButton onClick={() => setIsShowSidebar(true)} />
                    </div>)}
        </SidebarContext.Provider>
    );
}


export default SideBar;