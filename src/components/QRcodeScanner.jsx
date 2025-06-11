import { Scanner } from '@yudiel/react-qr-scanner';
import {useState} from 'react';
import {SCAN_DATA} from '../constants'


export const QRcodeScanner = () => {

    const [scanned, setScanned] =useState(null);
    const [endScan, setEndScan] = useState(false);

    const scanHandler = (result) => {
        setScanned(result[0].rawValue)
        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
        localStorage.setItem(
            SCAN_DATA,
            JSON.stringify([...prevData, result[0].rawValue])
        )    
    }
    const stylesScanner = {
        container:{
            width:350,
            height:350,
            margin:'auto',
            borderRadius:10,
        }
    }

    return (
   <div className='flex flex-col items-center gap-4'>
    <h1 className='font-bold text-2xl'>QR Code Scanner</h1>
    
         <Scanner 
            paused={endScan}
            styles={stylesScanner}
            onScan={scanHandler} />
    <p className='font-light text-xl'>{scanned}</p>
    <button 
        className={` text-white px-4 py-2 rounded hover:bg-gray-500 ${endScan ?"bg-gray-800": "bg-amber-700"} `}
        style={{ width: "100px" }}
        onClick={() => {
            setEndScan(!endScan);
            
        }}
        >{endScan ? "OFF":"ON "}</button>
   </div>
   
  )
}