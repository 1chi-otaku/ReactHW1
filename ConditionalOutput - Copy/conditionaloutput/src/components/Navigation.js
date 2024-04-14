import React from 'react'
import { NavLink } from 'react-router-dom'
function Navigation() {
    return (
        <>
        <nav>
            <ul className='menu'>
                <li><NavLink to="/Film">Films Default Method</NavLink></li>
                <li><NavLink to="/Fruit">Fruit Ternary Method</NavLink></li>
                <li><NavLink to="/Book">Books Short Form</NavLink></li>
            </ul>
        </nav>
        </>
    )
}

export default Navigation
