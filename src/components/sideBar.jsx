import React, { createContext, useState, useContext, useEffect } from 'react';
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import { FilterContext } from './searchAttributes/filterContext';
import { FilterProvider } from './searchAttributes/filterContext';
import { grey, blue } from '@material-ui/core/colors';
import { Height, ContactsOutlined } from '@material-ui/icons';
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

    // const [filters, setFilters] = useContext(FilterContext);

    const [breedsFilter, setBreedsFilter] = useState([]);
    const [genderFilter, setGenderFilter] = useState([]);
    const [ageFilter, setAgeFilter] = useState([]);
    const [sizeFilter, setSizeFilter] = useState([]);


    const breeds = [
        { value: "cirmos", label: "cirmos" },
        { value: "kék", label: "kék" },
        { value: "sziámi", label: "sziámi" },
        { value: "perzsa", label: "perzsa" },
    ];

    const ages = [
        { value: "kitten", label: "Kitten" },
        { value: "young", label: "young" },
        { value: "adult", label: "adult" },
        { value: "senior", label: "senior" },

    ];

    const genders = [
        { value: "male", label: "male" },
        { value: "female", label: "female" },
    ];

    const sizes = [
        { value: "kitten", label: "Kitten" },
        { value: "young", label: "young" },
        { value: "adult", label: "adult" },
        { value: "senior", label: "senior" },

    ];

    useEffect(() => {
        let filtersToSend = [];
        breedsFilter.map(item => filtersToSend.push(item.value));
        genderFilter.map(item => filtersToSend.push(item.value));
        ageFilter.map(item => filtersToSend.push(item.value));
        sizeFilter.map(item => filtersToSend.push(item.value));
        console.log(filtersToSend);
    }, [ageFilter, breedsFilter, genderFilter, sizeFilter]);



    const customTheme = theme => {
        return {
            ...theme,
            colors: {
                ...theme.colors,
                primary25: "blue"
            }
        }
    }

    return (
        < Grid direction="column" >
            <Grid item style={{ margin: "30px", fontSize: "30px" }}>
                <p>Breed:</p>
                <Select options={breeds} onChange={setBreedsFilter} placeholder="Select breeds" theme={customTheme} isSearchable isMulti />
            </Grid>
            <Grid item style={{ margin: "30px", fontSize: "30px" }}>
                <p>Gender:</p>
                <Select options={genders} onChange={setGenderFilter} placeholder="Select gender" theme={customTheme} isSearchable isMulti />
            </Grid>
            <Grid item style={{ margin: "30px", fontSize: "30px" }}>
                <p>Age:</p>
                <Select options={ages} onChange={setAgeFilter} placeholder="Select age" theme={customTheme} isSearchable isMulti />
            </Grid>
            <Grid item style={{ margin: "30px", fontSize: "30px" }}>
                <p>Size:</p>
                <Select options={sizes} onChange={setSizeFilter} placeholder="Select size" theme={customTheme} isSearchable isMulti />
            </Grid>
        </Grid>

    )
}


export default SideBar;