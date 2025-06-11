import {Routes, Route} from 'react-router-dom';
import { Navigation } from './Navigation';
import { QRcodeScanner } from './QRcodeScanner';
import { QRcodeGenerator } from './QRcodeGenerator';
import { GenerateHistory } from './GenerateHistory';
import { ScanHistory } from './ScanHistory';
const Layout = () => {

    return (
       <div>
            <Navigation />
            <div className='container mx-auto p-4'>
                <Routes>
                    <Route path="/" element={<h1 className='text-2xl font-bold'>Welcome to the QR Code App</h1>} />
                    <Route path="/scanner" element={<QRcodeScanner />} />
                    <Route path="/generator" element={<QRcodeGenerator />} />
                    <Route path="/generate_history" element={<GenerateHistory />}/>
                    <Route path="/scan_history" element={<ScanHistory />}/>
                    <Route path="*" element={<h1 className='text-2xl font-bold'>404 Not Found</h1>} />
                </Routes>
            </div>
        </div>
    )
}

export {Layout};