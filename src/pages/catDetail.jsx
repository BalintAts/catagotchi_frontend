import React, { useState, useEffect } from 'react';
import '../styles/catCard.css';
import axios from "axios";


const CatDetail = props => {
    const [name, setName] = useState("a");
    const [gender, setGender] = useState("a");
    const [age, setAge] = useState("a");
    const [isLoading, setIsLoading] = useState(true);
    const [setTitle] = useState("Név");
    const [img, setImg] = useState("https://d2ph5fj80uercy.cloudfront.net/04/cat2972.jpg");
    const [id, setId] = useState(0);
    const [isHungry, setIsHungry] = useState(false);
    const [isUsersCats, setIsUsersCat] = useState(false);



    useEffect(() => {
        setId(props.match.params.id);
        setIsUsersCat(props.isUsersCats);
        //DEBUG for isUser's cat:
        setIsUsersCat(true);


        axios.get(`http://localhost:8080/my-cats/${id}`)
            .then(resp => {
                setName(resp.data.name);
                setGender(resp.data.gender);
                setAge(resp.data.age);
                setImg(resp.data.img);
                setIsHungry(resp.data.hungry);
                console.log(isHungry);
            })
            .catch(error => {
                console.log(error)
            });

        setIsLoading(false);
    }, [id, props.id, props.isUsersCats, img, props, setTitle, isHungry, isUsersCats]);

    const feed = e => {
        setIsHungry(false);
        axios.get(`http://localhost:8080/my-cats/${id}/give-food`, isHungry)
            .then(resp => {
                setName(resp.data.name);
                setGender(resp.data.gender);
                setAge(resp.data.age);
                setImg(resp.data.img);
                setIsHungry(resp.data.hungry);
                console.log(isHungry);
            })
            .catch(error => {
                console.log(error)
            });
    }


    return (
        <>
            {isUsersCats ? (<h2>This is one of my cats</h2>) : (<h2>This is not my cat</h2>)}
            {isLoading ? (<h3> Loading...</h3 >) :
                <div>
                    <h1>{name}</h1>
                    <img className="card" src={img} alt={img}></img>
                    <h1>{gender}</h1>
                    {isHungry ? (<h2>Hungry!</h2>) : (<h2>not hungry</h2>)}
                    <h1>{age}</h1>
                    {isUsersCats ? (<button onClick={feed}>Feed</button>) : (<h2>no</h2>)}
                </div>
            }
        </>
    );
};



export default CatDetail;