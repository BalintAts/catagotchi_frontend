import React, { useContext, useState } from 'react';
import './sideSectionStyle.scss';
import { SidebarContext } from '../sideBar';
import { FilterContext } from '../../searchAttributes/filterContext';
import { FilterProvider } from '../../searchAttributes/filterContext';



const SideSection = () => {
    const [filters, setFilters] = useContext(FilterContext);


    const handleChange = event => {
        let newGender = event.target.value;
        setFilters(Object.assign(filters, { gender: newGender }));
        console.log(filters);
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
                        {/* <p>Gender:</p>
                    <Select options={genderOptions} onInputChange={setGender} /> */}
                        <select value={filters.gender} onChange={handleChange}>
                            <option value="any">any</option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </select>
                    </li>
                    {/* <li>
                    <p>Age:</p>
                    <Select options={ageOptions} onInputChange={setAge} />
                </li> */}

                </div>
            </div>
        </FilterProvider>
    );
}


export default SideSection;