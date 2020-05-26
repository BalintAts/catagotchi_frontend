import React from 'react'
import '../styles/catCard.css';

const CatCard = props => {
    console.log(props.img);
    return (
        <div className="card text-center">
            <div className="frame">
                <img className="image" src={props.img} alt={props.img}></img>
            </div>
            <h1>{props.name}</h1>
        </div>
    );
};

export default CatCard;