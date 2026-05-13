import React from "react";
import { Link } from "react-router-dom";

let ItemList = () => {

    return (
        <div>
            <h1>Item List</h1>
            <ul>
                <li><Link to='/Item/1'>Item 1</Link></li>
                <li><Link to='/Item/2'>Item 2</Link></li>
                <li><Link to='/Item/3'>Item 3</Link></li>
            </ul>
        </div>
    )
}

export default ItemList