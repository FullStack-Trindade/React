import React from 'react';
import googleLogo from '../images/googlelogo.png';
import '../styles/Main.css';
import Button from './Button.js';

function Main() {
    return ( 
        <React.Fragment>
            <div className='Main'>
                <img src={googleLogo}/>
                <br/>
                <input type='text'/>
                <br/>
                <Button prop1='Pesquisa Google' prop2='Google search' prop3/>
                <Button prop1='Estou com sorte' prop2='I"m lucky' prop3={false}/>
            </div>
        </React.Fragment>
    );
}

export default Main;