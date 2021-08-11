import React from 'react'
import "./Navbar.css"

function Navbar() {
    return (
        <navbar class="main__navbar">
                <div class="main__logo">
                    <h1>H<span class="yellow">S</span>B</h1>
                </div>
                <div class="menu__icon">
                    <i class="fas fa-bars bars__icon"></i>
                </div>
            </navbar>
    )
}

export default Navbar
