import React, { useContext, useState } from 'react';
import './sideSectionStyle.scss';
import { SidebarContext } from '../sideBar';
import { FilterContext } from '../../searchAttributes/filterContext';


const SideSection = () => {
    const value = useContext(FilterContext);


    const [gender, setGender] = useState("any");
    // const [age, setAge] = useState("any");



    const handleChange = event => {
        setGender({ value: event.target.value });
        console.log(event.target.value);
        console.log(gender);
    }

    const { isShowSidebar, setIsShowSidebar } = useContext(SidebarContext);
    return (

        <div className={`Sidebar_sideSection    sideSection--${isShowSidebar ? 'show' : 'hide'}`}>
            <h1>{value}</h1>
            <div className="sideSection_topWrapper">
                <button onClick={() => setIsShowSidebar(false)}>Hide</button>
            </div>
            <div className="sideSection_menu_Wrapper">
                <li>
                    {/* <p>Gender:</p>
                    <Select options={genderOptions} onInputChange={setGender} /> */}
                    <select value={gender} onChange={handleChange}>
                        <option value="any">any</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                </li>
                {/* <li>
                    <p>Age:</p>
                    <Select options={ageOptions} onInputChange={setAge} />
                </li> */}

            </div>
        </div>
    );
}


export default SideSection;