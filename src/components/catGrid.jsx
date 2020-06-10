import React, { useEffect, useState, useContext } from "react";
import { fakeData } from "../fakeData/fakeData";
import CatCard from "./catCard";
import { Grid } from "@material-ui/core";
import { FilterContext } from "./searchAttributes/filterContext";
import "../styles/catGrid.css";
import axios from "axios";
import { IsUsersCatsContext } from "../contexts/isUsersCats_context";

const CatGrid = (props) => {

    const [filteredData, setFilteredData] = useState(fakeData);
    const [isLoading, setIsLoading] = useState(true);
    const [title, setTitle] = useState("All Cats");
    const [isUsersCats, setIsUsersCats] = useContext(IsUsersCatsContext);

    useEffect(() => {
        console.log("useffect called");
        let url = isUsersCats ? (`http://localhost:8080/my-cats/`) : (`http://localhost:8080/`);
        axios
            .get(url)
            .then((resp) => {
                setFilteredData(resp.data);
            })
            .catch((error) => {
                console.log(error);
            });
        console.log("catgrid useeffect");
        setIsLoading(false);
    }, [isUsersCats, setIsUsersCats]);

    return (
        <>
            {isUsersCats ? (<h1>My cats</h1>) : (<h1>All cats</h1>)}
            {isLoading ? (
                <h3>Loading...</h3>
            ) : (
                    <Grid container item spacing={4} justify="flex_start" >
                        {filteredData.map((cat) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={cat.id}>
                                <CatCard id={cat.id} name={cat.name} img={cat.img} />
                            </Grid>
                        ))}
                    </Grid>
                )}
        </>
    );
};

export default CatGrid;