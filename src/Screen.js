import React from "react";
import './Screen.css';
import Menu from "./Screens/Menu";

const Screen = (props) => {
    const {MenuOptions} = props;
    return (
        <div className="screen-container">
            <Menu
                MenuOptions = {MenuOptions}
            />
        </div>
    )
}

export default Screen; 