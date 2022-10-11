

import React, { useEffect, useState } from 'react'
import "./marker.scss"
import { Icon } from '@iconify/react'
import Details from './Details';

const Marker = (props) => {
    const [iconType, setIconType] = useState("");
    const {lat,lng,onClick,type} = props

    const setIconData = () => {
        if (type === "wildfires"){
            setIconType("wildfires")
        }
        else if (type === "volcanoes"){
            setIconType("volcanoes")
        }
        else if (type === "storms"){
            setIconType("storms")
        }
        else if (type === "ices"){
            setIconType("ices")
        }
    }

    useEffect(() => {
        setIconData();
    },[])


    return (
        <div className='marker' onClick={onClick}>
            {iconType === "wildfires" && <Icon className="icon" icon="mdi:fire-alert"/>}
            {iconType === "volcanoes" && <Icon className="icon" icon="twemoji:volcano"/>}
            {iconType === "storms" && <Icon className="icon storm" icon="bi:tropical-storm" />}
            {iconType === "ices" && <Icon className="icon ice" icon="openmoji:iceberg" />}

        </div>
    )
}

export default Marker