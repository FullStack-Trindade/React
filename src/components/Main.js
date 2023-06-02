import React from 'react';
import googleLogo from '../images/googlelogo.png';
import '../styles/Main.css';
import Button from './Button.js';
import Input from './Input.js';
import Texto from './Texto.js';

function Main() {

    let pessoa1 =  {
        nome: 'Glauton',
        idade: 22,
        catarinense: true,
    }
    let pessoa2 =  {
        nome: 'Ícaro',
        idade: 33,
        catarinense: false,
    }


    return ( 
        <React.Fragment>
            <div className='Main'>
                <img src={googleLogo}/>
                <br/>
                <Input tipo='text'/>
                <br/>
                <Input tipo='password' placeH='Digite a senha'/>
                <br/>
                <Button prop1='Estou com sorte' prop2={30} prop3={false}/>
                <Button prop1='Pesquisa Google' prop2={40} prop3={true}/>
            </div>
            <div>
                <Texto {...pessoa1}/>
                <Texto {...pessoa2}/>
            </div>
        </React.Fragment>
    );
}

export default Main;