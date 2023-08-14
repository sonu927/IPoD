import React from "react";
import './Controller.css';

const Buttons = (props) => {
    const { OnMenuClick } = props;
    return (
        <div className="btn-container">
            <button className="center-btn">
                <h3>Select</h3>
            </button>   
            <button className="top-btn" onClick={OnMenuClick}>
                <img src="https://cdn-icons-png.flaticon.com/128/2099/2099192.png" alt="menu" />
            </button>
            <button className="left-btn">
               <img src="https://cdn-icons-png.flaticon.com/128/3318/3318703.png" alt="back"  />
            </button>
            <button className="right-btn">
                <img src="https://cdn-icons-png.flaticon.com/128/3318/3318722.png" alt="next"  />
            </button>
            <button className="bottom-btn">
                <img src="https://cdn-icons-png.flaticon.com/128/27/27223.png" alt="play"  />
                <img src="https://cdn-icons-png.flaticon.com/128/43/43694.png" alt="slash" />
                <img src="https://cdn-icons-png.flaticon.com/128/151/151859.png" alt="pause"  />
            </button>
        </div>
    )
}

export default Buttons;