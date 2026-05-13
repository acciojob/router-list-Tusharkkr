import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

let ItemDetail = () => {

    let userData = [
        { id: 1, name: 'Item 1', description: 'Description for Item 1' },
        { id: 2, name: 'Item 2', description: 'Description for Item 2' },
        { id: 3, name: 'Item 3', description: 'Description for Item 3' }
    ]

    let { id } = useParams()
    let [data, setData] = useState(null)

    useEffect(() => {
        let value = userData.find(value => value.id == id)
        setData(value)
    }, [])

    return (
        <div>
            {data && <div>
                <h1>{data.name}</h1>
                <p>{data.description}</p>
            </div>}
        </div>
    )
}

export default ItemDetail