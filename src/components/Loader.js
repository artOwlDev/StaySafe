import React from 'react'
import Sidebar from './Sidebar'
import "./loader.scss"
import spinner from "../img/spinner.gif"

const Loader = () => {

    return (
        <div className='loader'>
            <div className="navbar-loading">
                <h1>StaySafe</h1>
            </div>
            <div className="loading">
                <img src={spinner} alt="" />
                <h1>Loading...</h1>
            </div>
            <Sidebar/>
        </div>
    )
}

export default Loader