import React, { useEffect, useState, useContext } from 'react'
import { fakeData } from '../fakeData/fakeData';
import CatCard from './catCard';
import { Grid } from "@material-ui/core";
import { FilterContext } from './searchAttributes/filterContext';
import { FilterProvider } from './searchAttributes/filterContext';

const CatGrid = props => {
    const [filters, setFilters] = useContext(FilterContext);
    const [filteredData, setFilteredData] = useState(fakeData);


    useEffect(() => {
        const filteredData = fakeData;
        if (filters.gender !== "any") {
            setFilteredData(filteredData.filter(cat => cat.gender === filters.gender));
        }
        if (filters.age !== "any") {
            setFilteredData(filteredData.filter(cat => cat.gender === filters.age));
        }
        console.log("catgrid useeffect");
        // console.log(filters);
    }, [filters]);


    return (

        <FilterProvider>
            <>
                <Grid container
                    spacing={4}
                    justify="center">
                    {filteredData.map(cat =>
                        <Grid item xs={12} sm={6} md={4} key={cat.id}>
                            <CatCard name={cat.name} img={cat.img} />
                        </Grid>
                    )}
                </Grid>
                {/* <h1>{value}</h1> */}
            </>
        </FilterProvider >
    );
};


export default CatGrid;