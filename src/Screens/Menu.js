import React from "react";
import './Menu.css'

class Menu extends React.Component{
    render(){
        const { MenuOptions } = this.props; 
        console.log(MenuOptions);
        return (
            <div className="menu-container">
                <p style={{ fontSize:20 }}><b>Menu</b></p>
                <hr />
                { MenuOptions.map((opt)=>{
                   return( 
                        <div>
                            <p>{opt}</p>
                        </div>
                    )
                }) }

            </div>
        )
    }
}

export default Menu;