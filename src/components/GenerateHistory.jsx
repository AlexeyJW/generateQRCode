import { QRCodeSVG } from "qrcode.react";
import { GENERATE_DATA } from "../constants"

export const GenerateHistory = () => {
    const generateData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
    return (
        <div className="flex flex-col items-center gap-4">
            <h1 className="font-bold text-3xl">Generate History</h1>
            <div className="flex flex-col items-center gap-4">
                {generateData.map((text, index) => (
                    <div key={index} className="flex gap-8">
                        <p>{text}</p>
                        <QRCodeSVG value={text} size={100} />
                    </div>
                ))}

            </div>
            <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-500"
                    onClick={() => {
                        localStorage.removeItem(GENERATE_DATA);
                        window.location.reload();
                    }}
                    >Clear History</button>
        </div>
    )
}