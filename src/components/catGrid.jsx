import React, { useEffect, useState, useContext } from 'react'
import { fakeData } from '../fakeData/fakeData';
import CatCard from './catCard';
import { Grid } from "@material-ui/core";
import { FilterContext } from './searchAttributes/filterContext';
import { FilterProvider } from './searchAttributes/filterContext';

const CatGrid = props => {
    const [filters, setFilters] = useContext(FilterContext);
    const [filteredData, setFilteredData] = useState(fakeData);
    const [isLoading, setIsLoading] = useState(false);
    const [title, setTitle] = useState("All Cats");

    useEffect(() => {
        if (props.isUsersCats) {
            setTitle("My Cats")
            const url = "backednUrl";
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data.results);
                    setFilteredData(data.results);
                    setIsLoading(false);
                })
                .catch(error => console.log(error));


        }
        const filteredData = fakeData;
        if (filters.gender !== "any") {
            setFilteredData(filteredData.filter(cat => cat.gender === filters.gender));
        }
        if (filters.age !== "any") {
            setFilteredData(filteredData.filter(cat => cat.gender === filters.age));
        }
        console.log("catgrid useeffect");
        console.log(props.isUsersCats);



        // console.log(filters);
    }, [filters, props.isUsersCats]);


    return (

        <FilterProvider>
            <>
                <h1>{title}</h1>
                {isLoading ? (<h3>Loading...</h3>) :
                    <Grid container
                        spacing={4}
                        justify="center">
                        {filteredData.map(cat =>
                            <Grid item xs={12} sm={6} md={4} key={cat.id}>
                                <CatCard name={cat.name} img={cat.img} />
                            </Grid>
                        )}
                    </Grid>}
            </>
        </FilterProvider >
    );
};


export default CatGrid;