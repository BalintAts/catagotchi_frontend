import React from 'react'
import '../styles/catCard.css';
import { Link } from 'react-router-dom';

const CatCard = props => {
    return (
        // <Link to={{ pathname: '/my-cats/' + props.id, query: { url: `/my-cats/${props.match.params.id}` } }}>
        <Link to={{ pathname: '/my-cats/' + props.id }} style={{ textDecoration: "none" }}>

            <div className="card text-center">
                <div className="frame" style={{ margin: "20px" }}>
                    <img className="image" src={props.img} alt={props.img}></img>
                </div>
                <h1>{props.name}</h1>
            </div>
        </Link>
    );
};

export default CatCard;