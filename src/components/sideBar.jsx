import React, { createContext, useState, useContext } from 'react';
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import { FilterContext } from './searchAttributes/filterContext';
import { FilterProvider } from './searchAttributes/filterContext';
import { grey, blue } from '@material-ui/core/colors';
import { Height } from '@material-ui/icons';
import { Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Hidden } from "@material-ui/core";
import Select from "react-select";



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

    const [filters, setFilters] = useContext(FilterContext);

    const breeds = ["add", "cirmos", "kék", "sziámi", "perzsa"];


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
            <Box component="div" className={classes.menu}>
                <h3 style={{
                    margin: "30px"
                }}>Filters </h3>
                < Grid direction="column" >
                    <Grid item style={{ margin: "30px", fontSize: "30px" }}>
                        <p>Breed:</p>
                        <select value={filters.age} onChange={handleAgeChange} style={{ width: "100%" }} >
                            {breeds.map((breed) => (
                                <option value={breed}>{breed}</option>
                            ))};
                        </select>
                    </Grid>
                    <Grid item style={{ margin: "30px", fontSize: "30px" }}>
                        <p>Gender:</p>
                        <select value={filters.gender} onChange={handleGenderChange} style={{ width: "100%" }} >
                            <option value="add">add</option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </select>
                    </Grid>
                    <Grid item style={{ margin: "30px", fontSize: "30px" }}>
                        <p>Age:</p>
                        <select value={filters.age} onChange={handleAgeChange} style={{ width: "100%" }}>
                            <option value="add">add</option>
                            <option value="young">young</option>
                            <option value="adult">adult</option>
                            <option value="senior">senior</option>
                        </select>
                    </Grid>
                    <Grid item style={{ margin: "30px", fontSize: "30px" }}>
                        <p>Size:</p>
                        <select value={filters.age} onChange={handleAgeChange} style={{ width: "100%" }} >
                            <option value="add">add</option>
                            <option value="young">young</option>
                            <option value="adult">adult</option>
                            <option value="senior">senior</option>
                        </select>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}


export default SideBar;