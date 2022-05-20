

describe('Pruebas en el Archivo demo.test.js', () => { 

    test('Deben de ser iguales los strings', () => { 
    
        //  1.Inicilizacion
        const mensaje = 'Hola Mundo';
    
        //   2. Estimulo
        const mensaje2 = `Hola Mundo`
    
        // 3. Observar el comportamiento
        expect( mensaje ).toBe( mensaje2 ) // == equidad
    
     })


 })


