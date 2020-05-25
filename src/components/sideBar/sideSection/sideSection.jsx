import React, { useContext } from 'react';
import './sideSectionStyle.scss';
import { SidebarContext } from '../sideBar';




const SideSection = () => {
    const { isShowSidebar, setIsShowSidebar } = useContext(SidebarContext);
    return (
        <div className={`Sidebar_sideSection    sideSection--${isShowSidebar ? 'show' : 'hide'}`}>
            <div className="sideSection_topWrapper">
                <button onClick={() => setIsShowSidebar(false)}>Hide</button>
            </div>
            <div className="sideSection_menu_Wrapper">
                <li>
                    <p>Gender:</p>
                    <select name="gender" id="gender">
                        <option value="male">male</option>
                        <option value="femalegztuztuztuz">gkjthgkjhdgfemale</option>
                    </select>
                </li>
                <li>
                    <p>Age:</p>
                    <select name="age" id="age">
                        <option value="young">young</option>
                        <option value="old">old</option>
                    </select>
                </li>

            </div>
        </div>
    );
}


export default SideSection;