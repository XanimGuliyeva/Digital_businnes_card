import React from "react"


export default function Info() {
    return (
        <header>
            <img src='../picture.jpg' alt="Your Name" />
            <h1 className='name'>Kahnim Guliyeva</h1>            
            <p className='position'>Junior FrontEnd Developer</p>
            <a href="mailto:xanimguliyeva1@gmail.com" className="email-button">Email</a>
        </header>
    )
}