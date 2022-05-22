import React from 'react';
import { render } from "@testing-library/react";
import ConterApp from "../ConterApp";


describe('Pruebas en el ConterApp', () => { 

    test('Debe de mostrar el mensaje "Hola Soy Carlos" ', () => { 

        const saludo = 'Hola Soy Carlos';
        
        const {getByText} = render( <ConterApp saludo={ saludo }/> );


        expect( getByText(saludo) ).toBeInTheDocument();

     })

 })