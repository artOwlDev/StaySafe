import React from 'react'
import Home from './Home'
import Wildfire from './Wildfire'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import Volcano from './Volcano'
import Storm from './Storm'
import Ice from './Ice'



const Pages = () => {
    return (
        <Router>
            <div className='pages'>
                <Routes>
                    
                    <Route path="/" element={<Home/>}/>
                    <Route path="/wildfires" element={<Wildfire/>}/>
                    <Route path="/volcanoes" element={<Volcano/>}/>
                    <Route path="/storms" element={<Storm/>}/>
                    <Route path="/ices" element={<Ice/>}/>

                </Routes>
            </div>
        </Router>
    )
}

export default Pages