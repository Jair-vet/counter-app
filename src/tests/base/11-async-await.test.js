import { getImagen } from "../../base/11-async-await"


describe('Pruebas en Async y Await y Promesas', () => { 

    test('Debe de retornar el url de la imagen', async () => { 

        const url = await getImagen();
        // console.log(url);

        expect( url.includes('https://') ).toBe( true )

     })

 })