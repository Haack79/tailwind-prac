'use client';
import { useState } from "react";
import Tabs from "./Tabs"

function RandomComponent() {
    return <div>Random component</div>
}

const TabTest = () => {
    const [index, setIndex] = useState(0)
    const tabs = [
        {label: 'Tab 1', content: <div>Tab 1 content cause this is the day that the enemy came, they came not for you but your rights.</div>},
        {label: 'Tab 2', content: <div>Tab 2 content</div>},
        {label: 'Tab 3', content: <RandomComponent/>}
    ]
    const handleChange = (index: number) => {
        console.log(index)
        setIndex(index)
    }
    return (
        <>
            <Tabs tabsContent={tabs} onTabChange={handleChange}/>
            <p className="flex flex-row justify-center items-center">You have clicked on tab {index}</p>
        </>
    )
}
export default TabTest;