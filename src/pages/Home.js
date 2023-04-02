

import React, { useEffect } from 'react'
import { Icon } from '@iconify/react'
import fireIcon from '@iconify/icons-mdi/fire'
import './home.scss'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import {BsHouseDoorFill} from "react-icons/bs"

const Home = () => {
    useEffect(() => {
        console.log(`${process.env.REACT_APP_GOOGLEMAPS_API_KEY}`)
    },[])

  return (
    <div className='home'>
        <div className="navbar-home">
            <BsHouseDoorFill style={{margin: "1rem", fontSize: "2rem"}}/>
            <h1>StaySafe</h1>
        </div>
        <div className="categories">
            <Link to={"/wildfires"} style={{ textDecoration: 'none' }}>
                <div className="box wildfire">
                    <Icon className="icon" icon="emojione:fire" />
                    <h1>Wildfires</h1>
                </div>
            </Link>
            
            <Link to={"/volcanoes"} style={{ textDecoration: 'none' }}>
                <div className="box volcano">
                    <Icon className="icon" icon="twemoji:volcano" />
                    <h1>Volcanoes <span>(ACTIVE)</span></h1>
                </div>
            </Link>

            <Link to={"/storms"} style={{ textDecoration: 'none' }}>
                <div className="box storm">
                    <Icon className="icon"  icon="wi:night-storm-showers"/>
                    <h1>Tropical Storms</h1>
                </div>
            </Link>

            <Link to={"/ices"} style={{ textDecoration: 'none' }}>
                <div className="box ice">
                    <Icon className="icon" icon="carbon:ice-accretion" />
                    <h1>Sea and Lake Ice</h1>
                </div>
            </Link>

        </div>
        <Footer/>

    </div>
  )
}

export default Home