import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout } from './components/Layout';
import { QRcodeGenerator } from './components/QRcodeGenerator';
import './index.css';
import { QRcodeScanner } from './components/QRcodeScanner';

ReactDOM.createRoot(document.getElementById('root')).render(
    // <QRcodeGenerator/>
    <QRcodeScanner/>
);