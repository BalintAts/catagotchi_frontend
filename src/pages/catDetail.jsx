import React, { useState, useEffect, useContext } from 'react';
import '../styles/catCard.css';
import axios from "axios";
import { IsUsersCatsContext, IsUsersCatsProvider } from "../contexts/isUsersCats_context";
import { Grid } from '@material-ui/core';
import LinearProgressWithLabel from '@material-ui/core/LinearProgress';




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
    const [isThirsty, setIsThirsty] = useState(false);
    const [litterBoxClean, setLitterBoxClean] = useState(false);
    const [isUsersCats, setIsUsersCats] = useContext(IsUsersCatsContext);




    useEffect(() => {
        console.log("CatDetail");
        console.log(props);
        setId(props.match.params.id);
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
                setIsThirsty(resp.data.thirsty);
                setIsAdopted(resp.data.isAdopted);

                console.log(resp);
            })
            .catch(error => {
                console.log(error)
            });

        setIsLoading(false);
    }, [id, props.match.params.id, isUsersCats, isAdopted, props]);

    const feed = e => {
        axios.get(`http://localhost:8080/my-cats/${id}/give-food`)
            .catch(error => {
                console.log(error)
            });
        setIsHungry(false);
    }

    const drink = e => {
        axios.get(`http://localhost:8080/my-cats/${id}/thirsty`)
            .catch(error => {
                console.log(error)
            });
        setIsThirsty(false);
    }

    const cleanLitterBox = e => {
        axios.get(`http://localhost:8080/my-cats/${id}/litterBoxClean`)
            .catch(error => {
                console.log(error)
            });
        setLitterBoxClean(true);
    }

    const adopt = e => {
        console.log("adopt")
        axios.get(`http://localhost:8080/${id}/adopt`)
            .then(resp => {
                setIsAdopted(resp.data.isAdopted);
                setIsUsersCats(true);
            })
            .catch(error => {
                console.log(error)
            });
    }

    const ManageCatMood = () => {
        let url = "https://www.pinclipart.com/picdir/big/372-3723662_png-cat-emoticon-07-cute-cat-emote-png.png";
        return url;
    }

    return (
        <>
            <h1> behind the navbar</h1>
            {isUsersCats ? (<h2>This is one of my cats</h2>) : (<h2>This is not my cat</h2>)}
            {isLoading ? (<h3> Loading...</h3 >) :
                <Grid container justify="space-around">
                    <Grid contatiner item direction="column" justify="space-between" xs={4}>
                        <Grid item style={{ margin: "30px" }}>
                            <img className="card" src={img} alt={img}></img>
                        </Grid>
                        <h1>{name}</h1>
                        <h1>{gender}</h1>
                        <h1>{age}</h1>

                        {isUsersCats === false && (<button onClick={adopt}>adopt</button>)}
                    </Grid>

                    <Grid container item direction="column" xs={4}>
                        <Grid item>
                            <img src="https://www.pinclipart.com/picdir/big/372-3723662_png-cat-emoticon-07-cute-cat-emote-png.png" alt="https://www.pinclipart.com/picdir/big/372-3723662_png-cat-emoticon-07-cute-cat-emote-png.png" width="500" height="600"></img>
                        </Grid>
                        <Grid item>
                            <LinearProgressWithLabel variant="determinate" value={70} />
                        </Grid>
                    </Grid>
                    <Grid contatiner item direction="column" justify="space-around" xs={4}>
                        <Grid item>
                            {isUsersCats && (<button onClick={feed}>Feed</button>)}
                            {isHungry && isHungry ? (<h2>Hungry!</h2>) : (<h2>not hungry</h2>)}
                        </Grid>
                        <Grid item>
                            {isUsersCats && (<button onClick={drink}>Thisty</button>)}
                            {isUsersCats && isThirsty ? (<h2>Thirsty!</h2>) : (<h2>Not thirsty</h2>)}
                        </Grid>
                        <Grid item>
                            {isUsersCats && (<button onClick={cleanLitterBox}>Cleen Litterbox</button>)}
                            {isUsersCats && litterBoxClean ? (<h2>Pooping is fun!</h2>) : (<h2>My box is full with poop!</h2>)}
                        </Grid>
                    </Grid>

                </Grid>
            }
        </>
    );
};



export default CatDetail;