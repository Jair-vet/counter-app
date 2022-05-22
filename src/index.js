import React from "react";
import { createRoot } from 'react-dom/client';
import PrimeraApp from "./PrimeraApp";
import ConterApp from "./ConterApp";

import './index.css'


const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render( <ConterApp saludo= 'Hola Soy Carlos' />  );

