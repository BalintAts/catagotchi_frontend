import React, { useState, useEffect } from 'react';


const CatDetail = props => {
    const [name, setName] = useState(null);
    const [gender, setGender] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [title, setTitle] = useState("Név");

    useEffect(() => {
        if (props.isUsersCats) {
            setTitle("This is one of my cats")
        }
        const url = `https://localhost:8080/my-cats/${props.id}`;
        fetch(url)
            .then(response =>
                response.json()
            )
            .then(data => {
                // console.log(data);
                setName(data.name);
                setGender(data.gender);
            })
            .catch(error => console.log(error));
    }, [props.id, props.isUsersCats]);


    return (
        // if(props.isUsersCats) {}

        <>
        </>
    );
};