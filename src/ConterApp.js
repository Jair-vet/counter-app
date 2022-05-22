import React  from 'react';
import PropTypes from 'prop-types';


export const ConterApp = ({ saludo, subtitulo }) =>{

    return(
        <>
            <h1>{ saludo }</h1>

            <p> { subtitulo } </p>
        </>
    );

}

    

ConterApp.propTypes = {
    saludo: PropTypes.string.isRequired
};

ConterApp.defaultProps = {
    subtitulo: 'Soy un Subtitulo'
}


export default ConterApp;