import React from 'react';
import prototype  from 'prop-types';


//FC
const PrimeraApp = ( {result, subtitulo} ) => {



    return (
        <>
            <h1>Calculadora </h1>
            <p>{subtitulo}</p>

            <div>

                <div className="result"> {result} </div>


                <div className="operaciones">
                    {/* Numeros */}
                    <div className="btn"> 1 </div>
                    <div className="btn"> 2 </div>
                    <div className="btn"> 3 </div>
                    <div className="btn"> 4 </div>
                    <div className="btn"> 5 </div>
                    <div className="btn"> 6 </div>
                    <div className="btn"> 7 </div>
                    <div className="btn"> 8 </div>
                    <div className="btn"> 9 </div>

                    {/* Botones */}
                    <div className="btn" > C </div>
                    <div className="btn" > + </div>
                    <div className="btn" > - </div>
                    <div className="btn" > * </div>
                    <div className="btn" > / </div>
                    
                    <div className="btn" > = </div>

                </div>
            </div>


        </>
     
    );

}

PrimeraApp.prototype = {
    result: prototype.number.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Mi primera Caluladora en React'
}


export default PrimeraApp;