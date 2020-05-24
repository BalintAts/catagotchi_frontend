import React, { Component, useEffect, useState } from 'react'
import { fakeData } from '../fakeData/fakeData';
import CatCard from './catCard';
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const CatGrid = props => {
    const [filteredData, setFilteredData] = useState(fakeData);
    const filters = {
        gender: "any",
        age: "any",
    };


    useEffect(() => {
        const filteredData = fakeData;
        if (filters.gender !== "any") {
            setFilteredData(filteredData.filter(cat => cat.gender === filters.gender));
            console.log(filters.gender);
        }
        if (filters.age !== "any") {
            setFilteredData(filteredData.filter(cat => cat.gender === filters.age));
        }
    }, [filters.age, filters.gender]);


    return (
        <Grid container
            spacing={4}
            justify="center">
            {filteredData.map(cat =>
                <Grid item xs={12} sm={6} md={4} key={cat.id}>
                    <CatCard name={cat.name} img={cat.img} />
                </Grid>
            )}
        </Grid>
    );
};


export default CatGrid;