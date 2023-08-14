import React from "react";
import './Screen.css';
import Menu from "./Screens/Menu";

const Screen = (props) => {
    const {MenuOptions,selectedOption} = props;
    return (
        <div className="screen-container">
            <Menu
                MenuOptions = {MenuOptions}
                selectedOption = {selectedOption}
            />
        </div>
    )
}

export default Screen; 