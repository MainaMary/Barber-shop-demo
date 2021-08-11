import React from 'react'
import "../Navbar.css"

function Heading() {
    return (
        <div class="content__wrapper">
        <div>
            <div class="first__sec">
                <p>
                    Lorem ipsum dolor sit amet, <br> consectetur adipiscing elit.
                </p>
            </div>
            <div class="second__sec">
                <p>
                    Lorem ipsum dolor sit amet,  consectetur adipiscing elit.<br> Neque tincidunt porttitor quam quisque vitae diam cursus.
                </p>
            </div>
        <div class="third__sec">
            <buton class="btn__book btn__content"> book a haircut</buton>
           <button class="btn__list btn__content">See barbers list</button>
        </div>
        </div>
       
    </div>
    )
}

export default Heading
