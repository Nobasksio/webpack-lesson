import React from 'react';
import { createRoot } from 'react-dom/client';
import img from './bundl.png';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <div>
        <img src={img} alt=""/>
    </div>
);
