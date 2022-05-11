import React from 'react';


//FC
const PrimeraApp = () => {

    const saludo = 123;



    return (
        <>
            <h1>Calculadora </h1>
            <p>Mi primera Caluladora en React</p>
            <p>{ saludo }</p>

            <div>

                <div class="result"> 0 </div>


                <div class="operaciones">
                    {/* Numeros */}
                    <div class="btn"> 1 </div>
                    <div class="btn"> 2 </div>
                    <div class="btn"> 3 </div>
                    <div class="btn"> 4 </div>
                    <div class="btn"> 5 </div>
                    <div class="btn"> 6 </div>
                    <div class="btn"> 7 </div>
                    <div class="btn"> 8 </div>
                    <div class="btn"> 9 </div>

                    {/* Botones */}
                    <div class="btn" > C </div>
                    <div class="btn" > + </div>
                    <div class="btn" > - </div>
                    <div class="btn" > * </div>
                    <div class="btn" > / </div>
                    
                    <div class="btn" > = </div>

                </div>
            </div>


        </>
     
    )

}

export default PrimeraApp;