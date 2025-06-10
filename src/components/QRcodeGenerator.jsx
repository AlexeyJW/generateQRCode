import {QRCodeSVG} from 'qrcode.react';
import { useState } from 'react';

export const QRcodeGenerator = () => {
    const [text, setText] = useState('Hello, QR Code!');
    const [result, setResult] = useState('');

    const handleChange = (e) => {
        
        setText(e.target.value);
        setResult('')
    }
    const handleClick = ()=>{
        
        setResult(text);
        setText('');
        console.log(`QR Code generated: ${result}`);
    }
    return (
        <div className='flex flex-col items-center min-h-screen bg-gray-100 p-4 gap-4'>
            <input 
                type="text"
                value={text}
                onChange={handleChange}
                className='border border-gray-300 rounded p-2 mb-4 w-full placeholder:text-gray-500 placeholder:italic '
                placeholder="Enter text to generate QR Code"
                />
            <button 
                onClick={handleClick}
                className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
                >Generate</button>
            {result && <QRCodeSVG value={result} />}
        </div>
    )
}