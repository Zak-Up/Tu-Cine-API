import React from 'react';
import logo from '../src/assets/nesflix.png'


const Navbar = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <img src={logo} alt=''/>
            </div>
            <div className='buscar'>
                <label>Buscar </label>
            <input className='search' type="search" placeholder="Encuentra tu peli...">
            </input>
            </div>
        </header>
    )
}

export default Navbar
