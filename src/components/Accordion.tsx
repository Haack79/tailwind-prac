'use client';
import { useState } from 'react';

export default function Accordion({ data }: { data: {id: number, content: string, question: string}[] }) {

    const [selected, setSelected] = useState<number | null>(null);
    const [enableMultiple, setEnableMultiple] = useState<boolean>(false);
    const [multiple, setMultiple] = useState<number[]>([]);
    const handleSelection = (currentId: number) => {
        console.log(currentId)
        setSelected(selected === currentId ? null : currentId)
    }
    const handleSetEnableMultipleSelection = () => {
        if (enableMultiple) {
            setMultiple([])
        }
        setEnableMultiple(!enableMultiple)
    }
    const handleMultipleSelection = (currentId: number) => {
        if (multiple.includes(currentId)) {
            setMultiple(multiple.filter((id) => id !== currentId))
        } else {
            setMultiple([...multiple, currentId])
        }
    }
    console.log(multiple)
    console.log(selected, 'selected')
    return (
        <div className="flex items-center justify-center my-3 pt-10 mt-10">
            <div className="w-96 flex-col items-center justify-center">
                <button className="bg-blue-800 text-white p-2 rounded-md" onClick={handleSetEnableMultipleSelection}>
                    {enableMultiple ? 'Disable' : 'Enable'} multiple
                </button>
                {!data || data.length <= 0 ? 
                    <div>No data found</div> :
                     data.map((dataItem, index) => (
                        <div className='bg-blue-800 my-4 p-4' key={dataItem.id}>
                            <div className="flex items-center space-between cursor-pointer text-white" onClick={() => {
                                if (enableMultiple) {
                                    handleMultipleSelection(dataItem.id)
                                } else {
                                    handleSelection(dataItem.id)}
                                }
                            }>
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                (selected === dataItem.id || multiple.includes(dataItem.id)) && (
                                    <div className="text-orange-300 text-sm">
                                        <p>{dataItem.content}</p>
                                    </div>
                                )
                            }
                        </div>
                     )
                )}
            </div>
        </div>
    )
}