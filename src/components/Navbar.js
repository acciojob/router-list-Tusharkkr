import React from "react";
import { NavLink } from "react-router-dom";

let Navbar = () => {

    return (
        <div>
            <h1>Item List</h1>
            <ul>
                <li><NavLink to='/Item/1'>Item 1</NavLink></li>
                <li><NavLink to='/Item/2'>Item 2</NavLink></li>
                <li><NavLink to='/Item/3'>Item 3</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar