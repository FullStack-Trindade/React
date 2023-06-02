import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
    return (  
        <input type={props.tipo} placeholder={props.placeH}/>
        
    );
}

Input.propTypes = {
    placeH: PropTypes.string,
    tipo: PropTypes.string.isRequired,
};

Input.defaultProps = {
    placeH: "Digite aqui",
};
  

export default Input;