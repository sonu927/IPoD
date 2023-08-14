import React from "react";
import './Screen.css';
import Menu from "./Screens/Menu";
import Games from "./Screens/Games";
import Songs from "./Screens/Songs";
import Settings from "./Screens/Settings";
import CoverFlow from "./Screens/CoverFlow";

const Screen = (props) => {
    const {MenuOptions,selectedOption,showPage} = props;
    return (
        <div className="screen-container">
            <Menu
                MenuOptions = {MenuOptions}
                selectedOption = {selectedOption}
            />
            {showPage===0?<Games />:''}
            {showPage===1?<Songs />:''}
            {showPage===2?<Settings />:''}
            {showPage===3?<CoverFlow />:''}
        </div>
    )
}

export default Screen; 