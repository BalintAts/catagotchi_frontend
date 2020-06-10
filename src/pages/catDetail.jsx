import React, { useState, useEffect, useContext } from 'react';
import '../styles/catCard.css';
import axios from "axios";
import { IsUsersCatsContext, IsUsersCatsProvider } from "../contexts/isUsersCats_context";
import { Grid } from '@material-ui/core';



const CatDetail = props => {
    const [name, setName] = useState();
    const [gender, setGender] = useState();
    const [age, setAge] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isAdopted, setIsAdopted] = useState(false);
    const [setTitle] = useState();
    const [img, setImg] = useState();
    const [id, setId] = useState();
    const [isHungry, setIsHungry] = useState();
    const [isUsersCats, setIsUsersCats] = useContext(IsUsersCatsContext);




    useEffect(() => {
        console.log("CatDetail");
        setId(props.match.params.id);
        console.log(props);
        let url = isUsersCats ? (`http://localhost:8080/my-cats/${id}`) : (`http://localhost:8080/${id}`);
        console.log(url);
        axios.get(url)
            .then(resp => {
                setId(props.match.params.id);
                setName(resp.data.name);
                setGender(resp.data.gender);
                setAge(resp.data.age);
                setImg(resp.data.img);
                setIsHungry(resp.data.hungry);
                setIsAdopted(resp.data.isAdopted);

                console.log(resp);
            })
            .catch(error => {
                console.log(error)
            });

        setIsLoading(false);
    }, [id, props.id, img, props, setTitle, isHungry, isUsersCats]);

    const feed = e => {
        setIsHungry(false);
        axios.get(`http://localhost:8080/my-cats/${id}/give-food`)
            .then(resp => {
                setName(resp.data.name);
                setGender(resp.data.gender);
                setAge(resp.data.age);
                setImg(resp.data.img);
                setIsHungry(resp.data.hungry);
                setIsAdopted(resp.data.isAdopted);
            })
            .catch(error => {
                console.log(error)
            });
    }

    const adopt = e => {
        axios.get(`http://localhost:8080/${id}/adopt`)
            .then(resp => {
                console.log(resp);
                setName(resp.data.name);
                setGender(resp.data.gender);
                setAge(resp.data.age);
                setImg(resp.data.img);
                setIsHungry(resp.data.hungry);
                setIsAdopted(resp.data.isAdopted);;
            })
            .catch(error => {
                console.log(error)
            });
    }

    return (
        <>
            <h1> behind the navbar</h1>
            {isUsersCats ? (<h2>This is one of my cats</h2>) : (<h2>This is not my cat</h2>)}
            {isLoading ? (<h3> Loading...</h3 >) :
                <Grid container justify="space-between">
                    <Grid contatiner item direction="column" justify="space-between">
                        <Grid item style={{ margin: "30px" }}>
                            <img className="card" src={img} alt={img}></img>
                        </Grid>
                        <h1>{name}</h1>
                        <h1>{gender}</h1>
                        <h1>{age}</h1>
                        {isUsersCats ? (<button onClick={feed}>Feed</button>) : (<h2>no</h2>)}
                        {isUsersCats === false && (<button onClick={adopt}>adopt</button>)}
                    </Grid>
                    <Grid contatiner item direction="column" justify="space-around">
                        <Grid item>
                            {isHungry ? (<h2>Hungry!</h2>) : (<h2>not hungry</h2>)}
                        </Grid>
                    </Grid>
                </Grid>
            }
        </>
    );
};



export default CatDetail;