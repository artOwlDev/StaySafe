
import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import Map from '../components/Map'

const Storm = () => {
    const [eventsData, setEventsData] = useState([])
    const [load, setLoad] = useState(false)

    const getData = async () => { 
        setLoad(true)
        const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
        const data = await res.json()
        setEventsData(data.events)
        setLoad(false);
    }

    useEffect(() => {
        getData();
        console.log(eventsData)
    },[])

    return (
        <div className='storm' style={{height: "100%"}}>
            {!load ? <Map eventsData={eventsData} type={"storms"}/> : <Loader/>}
        </div>
    )
}

export default Storm