import React, { useEffect, useState } from 'react'
import GoogleMapReact from "google-map-react"
import Marker from './Marker'
import "./map.scss"
import Details from './Details'
import { Icon } from '@iconify/react'

const Map = (props) => {

    const {center, zoom, eventsData, type} = props;
    const [details, setDetails] = useState("")

    const markers = eventsData.map((event) => {
        if ( event.categories[0].id === 8 && type === "wildfires"){
            return <Marker key={event.id} lat={event.geometries[0].coordinates[1]} lng={event.geometries[0].coordinates[0]} onClick={() => setDetails({id: event.id, title: event.title, type: type, description: event.description, lat: event.geometries[0].coordinates[1], lng: event.geometries[0].coordinates[0]})} type={type}/>
        }
        if (event.categories[0].id === 12 && type === "volcanoes"){
            return <Marker key={event.id} lat={event.geometries[0].coordinates[1]} lng={event.geometries[0].coordinates[0]} onClick={() => setDetails({id: event.id, title: event.title, type: type, description: event.description, lat: event.geometries[0].coordinates[1], lng: event.geometries[0].coordinates[0]})} type={type}/>
        }
        if (event.categories[0].id === 10 && type === "storms"){
            return <Marker key={event.id} lat={event.geometries[0].coordinates[1]} lng={event.geometries[0].coordinates[0]} onClick={() => setDetails({id: event.id, title: event.title, type: type, description: event.description, lat: event.geometries[0].coordinates[1], lng: event.geometries[0].coordinates[0]})} type={type}/>
        }
        if (event.categories[0].id === 15 && type === "ices"){
            return <Marker key={event.id} lat={event.geometries[0].coordinates[1]} lng={event.geometries[0].coordinates[0]} onClick={() => setDetails({id: event.id, title: event.title, type: type, description: event.description, lat: event.geometries[0].coordinates[1], lng: event.geometries[0].coordinates[0]})} type={type}/>
        }
    })

    useEffect(() => {
        console.log(`${process.env.REACT_APP_GOOGLEMAPS_API_KEY}`)
    },[])

    return (
        <div className='map'>
            
            <a href="/"><p className='map-p'>Home</p></a>
            <GoogleMapReact bootstrapURLKeys={{key: `${process.env.REACT_APP_GOOGLEMAPS_API_KEY}` }}  defaultCenter={center} defaultZoom={zoom}>

                {markers}  
            </GoogleMapReact>
            {details && <Details info={details}/>}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 41.8780,
        lng: -91.5302
    },
    zoom: 4
}

export default Map