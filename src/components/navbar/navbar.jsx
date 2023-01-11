import React from 'react'
import { Link } from 'react-router-dom'
import "components/navbar/navbar.css"
const navbar = () => {
    return (
        <ul>
            <li><img className='norrisImg' alt='yoxdu' src='https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png' /></li>
            <li><Link class="active" to='/'>Home</Link></li>
            <li><Link href="#about" to='/liked'>Liked</Link></li>
        </ul>
    )
}

export default navbar