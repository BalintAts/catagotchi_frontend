import React from 'react';
import '../styles/filterButtonStyle.scss';


const FilterButton = ({ onClick }) => {
    return (
        <h3 className="Sidebar_FilterButton"
            role="button" onClick={onClick}>Filter</h3>
    );
}

export default FilterButton;