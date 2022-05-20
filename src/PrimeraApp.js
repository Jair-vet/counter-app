import React, {useState} from 'react';
import prototype  from 'prop-types';


//FC
const PrimeraApp = ( { value = 0, subtitulo} ) => {
    
    const [ counter, setCounter ] = useState(0); // Retorna un []


    // handleAdd
    const handleAdd = () => {
        setCounter( counter + 1 )
        // setCounter( (c) => c + 1);
    }
    
    // handleReset
    const handleReset = () => setCounter( value )

    // handleRest
    const handleSubstract = () =>  setCounter( counter - 1 )
       
    return (
        <>
            <h1>Calculadora </h1>
            <p>{subtitulo}</p>

            <div>

                <div className="result"> {counter} </div>

                <button onClick={ handleAdd }> +1 </button>
                <button onClick={ handleReset }> Reset </button>
                <button onClick={ handleSubstract }> -1 </button>



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