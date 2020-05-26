import React, { useState, createContext } from 'react';

export const FilterContext = createContext();

export const FilterProvider = props => {
    const [filters, setFilters] = useState({
        gender: "any",
        age: "any",
    });


    return (
        <FilterContext.Provider value={"emzéperix"}>
            {props.children}
        </FilterContext.Provider>
    );
};


