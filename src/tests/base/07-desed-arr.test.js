import { retornaArreglo } from "../../base/07-deses-arr"


describe('Pruebas de 07-deses-arr.js', () => { 

    test('debe de retornar un String y un Numero', () => { 

        const [letras, numeros] = retornaArreglo(); //['ABC', 123];

        // expect(arr).toEqual( ['ABC', 123] );
        expect(letras).toBe('ABC')
        expect(numeros).toBe(123)

     })
    
 })

