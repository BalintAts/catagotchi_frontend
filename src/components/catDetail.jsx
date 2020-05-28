import React, { useState, useEffect } from 'react';
import { fakeData } from '../fakeData/fakeData';
import '../styles/catCard.css';


const CatDetail = props => {
    const [name, setName] = useState("a");
    const [gender, setGender] = useState("a");
    const [age, setAge] = useState("a");
    const [isLoading, setIsLoading] = useState(false);
    const [title, setTitle] = useState("Név");
    const [img, setImg] = useState("https://d2ph5fj80uercy.cloudfront.net/04/cat2972.jpg");
    const [id, setId] = useState(0);

    useEffect(() => {
        setId(props.match.params.id);
        if (props.isUsersCats) {
            setTitle("This is one of my cats")
        }
        const url = `https://localhost:8080/my-cats/${id}`;
        // get fakedata based on id
        setName(fakeData[id].name);
        setGender(fakeData[id].gender);
        setAge(fakeData[id].age);
        setImg(fakeData[id].img);
        // fetch(url)
        //     .then(response =>
        //         response.json()
        //     )
        //     .then(data => {
        //         console.log(data);
        //         setName(data.name);
        //         setGender(data.gender);
        //         setImg(data.img);
        //     })
        //     .catch(error => console.log(error));;
    }, [id, props.id, props.isUsersCats, img, props]);


    return (
        <>
            {props.isUsersCats ? (<h2>This is one of my cats</h2>) : (<h2>This is not my cat</h2>)}
            {isLoading ? (<h3> Loading...</h3 >) :
                <div>
                    <h1>{name}</h1>
                    <img className="card" src={img} alt={img}></img>
                    <h1>{gender}</h1>
                    <h1>{age}</h1>

                </div>
            };
        </>
    );

};



export default CatDetail;