import React from 'react';

function Menu(){
    return(
        <>
            <ul style={{ color: "red", fontWeight: "bold" } }>
                <li>Home</li>
                <li>About us</li>
                <img src= { require('../../assets/images/atom.png') } height={50} width={50}/>
            </ul>
        </>
    )
}

export default Menu