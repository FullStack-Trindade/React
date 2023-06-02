import React from 'react';
import googleLogo from '../images/googlelogo.png';
import '../styles/Main.css';
import Button from './Button.js';
import Lupa from '../images/lupa.png';

function Main() {
    return ( 
        <React.Fragment>
            <div className='Main'>
                <img src={googleLogo}/>
                <br/>
                <input type='search' placeholder='Pesquise com Google ou digite um endereço'/>
                <br/>
                <Button prop1='Estou com sorte' prop2={30} prop3={false}/>
                <Button prop1='Pesquisa Google' prop2={40} prop3={true}/>
            </div>
        </React.Fragment>
    );
}

export default Main;