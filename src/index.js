import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "@/assets/css/reset.css"
import { HashRouter } from 'react-router-dom/cjs/react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <App />
    </HashRouter>
);