import React from "react";
import { createRoot } from 'react-dom/client';
import PrimeraApp from "./PrimeraApp";

import './index.css'


const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render( <PrimeraApp result={ 0 } />  );

