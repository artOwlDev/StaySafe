

import React, { useEffect, useState } from 'react'
import "./details.scss"

const Details = (props) => {
    const {info} = props
    const [category,setCategory] = useState("");
    const [box, setBox] = useState(true);

    useEffect(() => {
        if (info.type === "wildfires"){
            setCategory("fire")
        }
        if (info.type === "volcanoes"){
            setCategory("volcano")
        }
        if (info.type === "storms"){
            setCategory("storm")
        }
        if (info.type === "ices"){
            setCategory("ice")
        }
    },[])


    return (
        <div className='details'>
            <div className="details-box">
                {category === "fire" &&
                <div className='details-box fire'>
                    <h1>NASA ID: {info.id}</h1>
                    <p>{info.title}</p>
                    <p>{info.description}</p>
                    <p><strong>Coordinates:</strong></p>
                    <p>X: {info.lng} Y: {info.lat}</p>
                </div>
                }

                {category === "volcano" && 
                <div className='details-box volcano'>
                    <h1>NASA ID: {info.id}</h1>
                    <p>{info.title}</p>
                    <p>{info.description}</p>
                    <p>Coordinates: </p>
                    <p>X: {info.lng} Y: {info.lat}</p>
                    <p>Status: <span>ACTIVE</span></p>
                </div>
                }

                {category === "storm" &&
                <div className='details-box storm'>
                    <h1>NASA ID: {info.id}</h1>
                    <p>{info.title}</p>
                    <p>{info.description}</p>
                    <p>Coordinates: </p>
                    <p>X: {info.lng} Y: {info.lat}</p>
                </div>
                }

                {category === "ice" &&
                <div className='details-box ice'>
                    <h1>NASA ID: {info.id}</h1>
                    <p>{info.title}</p>
                    <p>{info.description}</p>
                    <p>Coordinates: </p>
                    <p>X: {info.lng} Y: {info.lat}</p>
                </div>
                }

            </div>
        </div>
    )
}

export default Details