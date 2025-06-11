
import { QRCodeSVG } from "qrcode.react";
import { SCAN_DATA } from "../constants"

export const ScanHistory = () => {  
    const data= JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
    console.log(data);
    return (
        
        <div className='flex flex-col items-center min-h-screen p-4 gap-4'>
            <h1 className='font-bold text-2xl'>Scan History</h1>
            <div className="flex flex-col items-center gap-4">
                {data.map((text) => (
                      <p key={text} className="flex gap-4">{text}
                      <QRCodeSVG value={text} size={100}/></p>
                ))}
            </div>
            <button className='bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-500'
                    onClick={() => {
                        localStorage.removeItem(SCAN_DATA);
                        window.location.reload();
                    }}
                    >Clear History</button>
        </div>
    )
}