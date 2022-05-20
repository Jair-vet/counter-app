import '@testing-library/jest-dom'

import { getSaludo } from "../../base/02-template-string"


describe('Puebas en 02-templete-string.js', () => { 

    test('getSaludo debe de retornar Hola Fernando ', () => { 

        const nombre = 'Fernando'
        const saludo = getSaludo(nombre);


        expect( saludo ).toBe( 'Hola ' + nombre + '!' );

     })

     // getSaludo debe de retornar Hola Carlos si no hay Argumento nombre
     test('getSaludo debe de retornar Hola Carlos si no hay Argumento nombre', ()=> {

        const saludo = getSaludo();

        expect( saludo ).toBe( 'Hola Carlos!');


     })

 })
