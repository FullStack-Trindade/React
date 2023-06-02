import React from 'react';
import '../styles/Header.css';
import menu from '../images/menu.png';
import foto from '../images/perfil.jpg';

function Header() {
    
    const nome = "Letícia";

    return ( 
        <div className="Header">
            <ul>
                <li><a href='https://gmail.com'>Gmail</a></li>
                <li><a href='https://googlemaps.com'>Maps</a></li>
                <li><img className='header-menu' src={menu}/></li>
                <li><img className='header-foto' src={foto}/></li>
            </ul>
        </div>
    );
}

export default Header;