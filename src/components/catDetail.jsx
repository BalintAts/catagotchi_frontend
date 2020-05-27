import React, { useState, useEffect } from 'react';


const CatDetail = props => {
    const [name, setName] = useState(null);
    const [gender, setGender] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [title, setTitle] = useState("Név");
    const [img, setImg] = useState("https://d2ph5fj80uercy.cloudfront.net/04/cat2972.jpg");

    // useEffect(() => {
    //     if (props.isUsersCats) {
    //         setTitle("This is one of my cats")
    //     }
    //     const url = `https://localhost:8080/my-cats/0`;
    //     fetch(url)
    //         .then(response =>
    //             response.json()
    //         )
    //         .then(data => {
    //             console.log(data);
    //             setName(data.name);
    //             setGender(data.gender);
    //             setImg(data.img);
    //         })
    //         .catch(error => console.log(error));
    // }, [props.id, props.isUsersCats]);


    return (
        <>
            {props.isUsersCats ? (<h2>This is one of my cats</h2>) : (<h2>This is not my cat</h2>)}
            {isLoading ? (<h3> Loading...</h3 >) :
                <>
                    <h1>{title}</h1>
                    <img className="image" src={img} alt={img}></img>
                </>
            };
        </>
    );

};



export default CatDetail;