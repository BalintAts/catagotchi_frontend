import React, { Component } from 'react'
import { fakeData } from '../fakeData/fakeData';
import CatCard from './catCard';

const CatGrid = props => {
    return (
        <ul> {fakeData.map(cat =>
            <li key={cat.id}>
                <CatCard name={cat.name} img={cat.img} />
            </li>
        )}
        </ul>
    );
};

export default CatGrid;