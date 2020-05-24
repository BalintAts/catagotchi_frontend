import { Dropdown } from 'semantic-ui-react';
import React, { Component, useContext } from 'react';

const Gender = () => {
    const genderOptions = ["male", "female", "other"]
    return (
        <Dropdown
            placeholder='Gender'
            fluid
            selection
            options={genderOptions}

        />

    );
};

export default Gender;