'use client';
import React, { useState } from 'react'
interface RandomColorProps {
    setColor: (color: string) => void
    setColorString: (color: string) => void
    setColorType: (color: string) => void
}

export default function RandomColor({setColor, setColorString, setColorType}: RandomColorProps) {
    const [type, setType] = useState<string>('hex')
    const handleTypeClick = (type: string) => {
        if (type === 'hex') {
        setColor('#' + Math.floor(Math.random()*16777215).toString(16))
        setColorString('#' + Math.floor(Math.random()*16777215).toString(16))
        setColorType('hex')
        setType('hex')
        } else {
        setColor(`rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`)
        setColorString(`rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`)
        setColorType('rgb')
        setType('rgb')
        }
    }
    const handleRandomColor = () => {
        if (type === 'hex') {
        setColor('#' + Math.floor(Math.random()*16777215).toString(16))
        setColorString('#' + Math.floor(Math.random()*16777215).toString(16))
        } else {
        setColor(`rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`)
        setColorString(`rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`)
        }
    }
     return (
        <div className="flex items-center justify-center">
            <button className="bg-blue-800 text-white p-2 rounded-md m-2" onClick={() => handleTypeClick('hex')}>Create Hex</button>
            <button className="bg-blue-800 text-white p-2 rounded-md m-2" onClick={() => handleTypeClick('rgb')}>Create RGB</button>
            <button className="bg-blue-800 text-white p-2 rounded-md" onClick={handleRandomColor}>Random Color</button>
        </div>
     )
}