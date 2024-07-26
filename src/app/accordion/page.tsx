'use client';
import { useState } from 'react';
import Accordion from '../../components/Accordion';
import RandomColor from '@/components/randomColor';

const data = [
    {
        id: 1,
        question: 'What is React?',
        content: 'React is a front-end JavaScript library developed by Facebook in 2011.'
    },
    {
        id: 2,
        question: 'What is Angular?',
        content: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.'
    },
    {
        id: 3,
        question: 'What is Vue?',
        content: 'Vue is a progressive framework for building user interfaces.'
    }
];
export default function Page() {
    const [color, setColor] = useState<string>('#000002');
    const [colorString, setColorString] = useState<string>('#000002');
    const [colortype, setColorType] = useState<string>('hex');
    return (
        <div className="flex-col items-center justify-center mt-3 w-screen h-screen" style={{ backgroundColor: color }}>
            <Accordion data={data} />
            <RandomColor setColor={setColor} setColorString={setColorString} setColorType={setColorType}/>
            <div className="text-white text-center">
                <h1>Color: {colorString}</h1>
                <h1>Type: {colortype}</h1>
            </div>
        </div>
    )
}
