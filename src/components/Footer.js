import React from 'react'
import './footer.scss'
import { SocialIcon } from 'react-social-icons'


const Footer = () => {
    return (
        <div className='footer'>
            <p>Last updated: Oct 2022</p>
            <div style={{display: "flex", justifyContent: "center", gap: "1rem", alignItems: "center", margin: "1rem"}}>
                <SocialIcon  url='https://github.com/artOwlDev' fgColor="white" target="_blank" />
                <SocialIcon url='https://www.linkedin.com/in/artunselcuk/' fgColor="white" target="_blank" />

            </div>
        </div>
    )
}

export default Footer