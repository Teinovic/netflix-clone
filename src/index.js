import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles'
import { App } from './App.js';

ReactDOM.render(
    <>
        <GlobalStyles />
        <App />
    </>, 
    document.getElementById('root'))
