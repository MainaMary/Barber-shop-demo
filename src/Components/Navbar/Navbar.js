import React from 'react'
import "./Navbar.css"

function Navbar() {
    return (
        <navbar className="main__navbar">
                <div className="main__logo">
                    <h1>H<span className="yellow">S</span>B</h1>
                </div>
                <div className="menu__icon">
                    <i className="fas fa-bars bars__icon"></i>
                </div>
            </navbar>
    )
}

export default Navbar
