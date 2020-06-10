import React, { useState, useEffect, useContext } from 'react'
import '../styles/catCard.css';
import { Link } from 'react-router-dom';
import { IsUsersCatsContext } from '../contexts/isUsersCats_context';

const CatCard = props => {

    const [isUsersCats, setIsUsersCats] = useContext(IsUsersCatsContext);



    // const hovered, add classname to image

    return (

        // <Link to={{ pathname: '/my-cats/' + props.id, query: { url: `/my-cats/${props.match.params.id}` } }}>
        <>
            {isUsersCats ? (
                <Link to={{ pathname: '/my-cats/' + props.id }} style={{ textDecoration: "none" }}>

                    <div className="card text-center">
                        <div className="frame" style={{ margin: "20px" }}>
                            <img className="image" src={props.img} alt={props.img}></img>
                        </div>
                        <h1 style={{ width: "100%" }}>{props.name}</h1>
                    </div>
                </Link>
            ) : (
                    <Link to={{ pathname: props.id }} style={{ textDecoration: "none" }}>

                        <div className="card text-center">
                            <div className="frame" style={{ margin: "20px" }}>
                                <img className="image" src={props.img} alt={props.img}></img>
                            </div>
                            <h1 style={{ width: "100%" }}>{props.name}</h1>

                        </div>
                    </Link>
                )
            }
        </>
    );
};

export default CatCard;