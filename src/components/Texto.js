import React from 'react';
import PropTypes from 'prop-types';

function Texto({nome, idade, catarinense}) {
   
    function verificaUR(pessoa){
        console.log(pessoa);
        if(pessoa.catarinense){
            return 'sim';
        }
        return 'não';
    }


    return (  
        <React.Fragment>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            {/* <p>Catarinense? {verificaUR()}</p> */}
        </React.Fragment>
    );
}

Texto.propTypes = {
    objeto: PropTypes.shape({
        nome: PropTypes.string.isRequired,
        idade: PropTypes.number,
        catarinense: PropTypes.bool,
    }),
}

Texto.defaultProps = {
    objeto: {
        nome: 'Nome não identificado',
        idade: 'Idade não declarada',
        catarinense: 'Nome declarado',
    }
};

export default Texto;