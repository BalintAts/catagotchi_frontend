import React, { useContext } from 'react';
import '../styles/sideSectionStyle.scss';
import { SidebarContext } from './sideBar';
import { FilterContext } from './searchAttributes/filterContext';
import { FilterProvider } from './searchAttributes/filterContext';



const SideSection = () => {
    const [filters, setFilters] = useContext(FilterContext);


    const handleGenderChange = event => {
        let newGender = event.target.value;
        setFilters(Object.assign(filters, { gender: newGender }));
    }

    const handleAgeChange = event => {
        let newAge = event.target.value;
        setFilters(Object.assign(filters, { age: newAge }));
    }

    const { isShowSidebar, setIsShowSidebar } = useContext(SidebarContext);
    return (

        <FilterProvider>
            <div className={`Sidebar_sideSection    sideSection--${isShowSidebar ? 'show' : 'hide'}`}>
                <div className="sideSection_topWrapper">
                    <button onClick={() => setIsShowSidebar(false)}>Hide</button>
                </div>
                <div className="sideSection_menu_Wrapper">
                    <li>
                        <p>Gender:</p>
                        {/* <Select options={genderOptions} onInputChange={setGender} /> */}
                        <select value={filters.gender} onChange={handleGenderChange}>
                            <option value="any">any</option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </select>
                        <p>Age:</p>
                        <select value={filters.age} onChange={handleAgeChange}>
                            <option value="any">any</option>
                            <option value="young">young</option>
                            <option value="adult">adult</option>
                            <option value="senior">senior</option>
                        </select>
                    </li>
                </div>
            </div>
        </FilterProvider>
    );
}


export default SideSection;