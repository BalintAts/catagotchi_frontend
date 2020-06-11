import React, { useState, createContext } from 'react'

export const IsUsersCatsContext = createContext();

export const IsUsersCatsProvider = props => {
    const [isUsersCars, setIsUrersCats] = useState(true);
    return (
        <IsUsersCatsContext.Provider value={[isUsersCars, setIsUrersCats]}>
            {props.children}
        </IsUsersCatsContext.Provider>
    );
}

