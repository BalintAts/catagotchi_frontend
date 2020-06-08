import React, { useEffect, useState, useContext } from "react";
import { fakeData } from "../fakeData/fakeData";
import CatCard from "./catCard";
import { Grid } from "@material-ui/core";
import { FilterContext } from "./searchAttributes/filterContext";
import { FilterProvider } from "./searchAttributes/filterContext";
import "../styles/catGrid.css";
import axios from "axios";

const CatGrid = (props) => {
    const [filters, setFilters] = useContext(FilterContext);
    // console.log(filters);
    const [filteredData, setFilteredData] = useState(fakeData);
    const [isLoading, setIsLoading] = useState(true);
    const [title, setTitle] = useState("All Cats");

    useEffect(() => {
        console.log("useffect called");
        if (props.isUsersCats) {
            setTitle("My Cats");
        }

        axios
            .get(`http://localhost:8080/my-cats/`)
            .then((resp) => {
                console.log(resp);
                setFilteredData(resp.data);
            })
            .catch((error) => {
                console.log(error);
            });

        const filteredData = fakeData;
        if (filters.gender !== "any") {
            setFilteredData(
                filteredData.filter((cat) => cat.gender === filters.gender)
            );
        }
        if (filters.age !== "any") {
            setFilteredData(filteredData.filter((cat) => cat.age === filters.age));
        }
        console.log("catgrid useeffect");
        setIsLoading(false);
    }, [
        filters.age,
        filters.gender,
        setFilters.age,
        setFilters.gender,
        props.isUsersCats,
    ]);

    return (
        // <FilterProvider>
        <>
            <h1>{title}</h1>
            {isLoading ? (
                <h3>Loading...</h3>
            ) : (
                    <Grid container item spacing={4} justify="flex-start">
                        {filteredData.map((cat) => (
                            <Grid item sm={6} md={4} key={cat.id}>
                                <CatCard id={cat.id} name={cat.name} img={cat.img} />
                            </Grid>
                        ))}
                    </Grid>
                )}
        </>
        // </FilterProvider>
    );
};

export default CatGrid;