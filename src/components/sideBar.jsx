import React, { createContext, useState, useEffect } from 'react';
import Select from "react-select";
import { Grid } from "@material-ui/core";



export const SidebarContext = createContext({});

const SideBar = () => {

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
        { value: "plank_length", label: "plank length" },
        { value: "small", label: "small" },
        { value: "normal", label: "normal" },
        { value: "big", label: "big" },
        { value: "uy_scuti", label: "UY Scuti" },
    ];

    useEffect(() => {
        let filtersToSend = [];
        breedsFilter && breedsFilter.map(item => filtersToSend.push(item.value));
        genderFilter && genderFilter.map(item => filtersToSend.push(item.value));
        ageFilter && ageFilter.map(item => filtersToSend.push(item.value));
        sizeFilter && sizeFilter.map(item => filtersToSend.push(item.value));
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