import React from "react";
import './Menu.css'

class Menu extends React.Component{
    render(){
        const { MenuOptions,selectedOption } = this.props;  
        return (
            <div className="menu-container">
                <div className="menu-heading">
                    <p style={{ fontSize:20 }}><b>Menu</b></p>
                </div>
                
                <hr />
                { MenuOptions.map((opt,index)=>{
                   return( 
                        <div key={index} className={`opt-container ${index===selectedOption?'active':''}`}>
                            <span >{opt}</span>
                        </div>
                    )
                }) }
                {MenuOptions.length === 3?
                    
                    <div>
                        <span>press back to back</span>
                    </div>
                :
                    ''
                }
            </div>
        )
    }
}

export default Menu;