import React from 'react'
import "./loader.scss"
import spinner from "../img/spinner.gif"
import Footer from './Footer'
import {BsHouseDoorFill} from "react-icons/bs"


const Loader = () => {

    return (
        <div className='loader'>
            <div className="navbar-loading">
                <BsHouseDoorFill style={{margin: "1rem", fontSize: "2rem"}}/>

                <h1>StaySafe</h1>
            </div>
            <div className="loading">
                <img src={spinner} alt="" />
                <h1>Loading...</h1>
            </div>
            <Footer/>
        </div>
    )
}

export default Loader