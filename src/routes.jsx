import { createBrowserRouter } from 'react-router-dom';
import { QRcodeGenerator } from './components/QRcodeGenerator';
import { QRcodeScanner } from './components/QRcodeScanner';
import { Navigation } from './components/Navigation';
export let router = createBrowserRouter([

    {
        path: "/",
        Component: Navigation
    },
    {
        path: "/scanner",
        Component:QRcodeScanner
    },
    {
        path: "/generator",
        Component: QRcodeGenerator
    }
]);
