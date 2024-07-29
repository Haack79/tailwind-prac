'use client';
import { useState } from 'react';
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
    const [qrCode, setQRCode] = useState('')
    const [input, setInput] = useState('')
    const handleGenerateQRCode = () => {
        setQRCode(input)
        setInput('')
    }
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleGenerateQRCode()
        }
    }
    return (
        <div>
            <h1>QR Code Generator</h1>
            <div>
                <input 
                    type="text" 
                    placeholder="Enter Text" 
                    name="qr-code"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
                <button 
                    disabled={input && input.trim() !== '' ? false : true} 
                    onClick={handleGenerateQRCode}
                >
                        Generate QR Code
                </button>
            </div>
            <div>
                <QRCode 
                    id="qr-code-value"
                    value={qrCode} 
                    size={400}
                    bgColor='#ffffff'
                />
            </div>
        </div>
    )
}

export default QRCodeGenerator;