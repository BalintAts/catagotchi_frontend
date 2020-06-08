import React, { createContext, useState, useContext } from 'react';
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import { FilterContext } from './searchAttributes/filterContext';
import { FilterProvider } from './searchAttributes/filterContext';
import { grey } from '@material-ui/core/colors';
import { Height } from '@material-ui/icons';
import { Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


export const SidebarContext = createContext({});

//styles:
const menuStyles = makeStyles({
    filterMenuContainer: {
        width: 500,
        background: grey,

    },
    menu: {
        width: 250,
    }

});

const SideBar = () => {
    const [visibleSideSection, setVisibleSideSection] = useState({ visible: false });

    // const toggleSideSection = (side, open) => {
    //     setVisibleSideSection({ ...visibleSideSection, [side]: open });
    // };

    const [filters, setFilters] = useContext(FilterContext);


    const handleGenderChange = event => {
        let newGender = event.target.value;
        setFilters(Object.assign(filters, { gender: newGender }));
    }

    const handleAgeChange = event => {
        let newAge = event.target.value;
        setFilters(Object.assign(filters, { age: newAge }));
    }

    const classes = menuStyles();

    return (
        <div className={classes.filterMenuContainer}>
            {/* <button onClick={() => toggleSideSection("visible", true)}> filter </button> */}
            {/* <MobileRightMenuSlider open={visibleSideSection.visible}> */}
            {/* <FilterProvider> */}
            {/* <div className="sideSection_menu_Wrapper"> */}
            <Box component="div" className={classes.menu}>
                <h3>Filters</h3>
                {/* <button onClick={() => toggleSideSection("visible", false)}>Hide</button> */}
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
            </Box>
            {/* </div> */}
            {/* </FilterProvider> */}
            {/* </MobileRightMenuSlider> */}
        </div>
    )
}


export default SideBar;