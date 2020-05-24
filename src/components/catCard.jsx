import React, { useState, useEffect } from 'react'


const CatCard = props => {
    console.log(props.img);
    return (
        <div>
            <img src={props.img} alt={props.img}></img>
            <h1>{props.name}</h1>
        </div>
    );
};

export default CatCard;