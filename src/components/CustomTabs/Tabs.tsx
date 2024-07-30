'use client';
import { useState } from "react"

interface TabContent {
    label: string;
    content: JSX.Element;
}
interface TabsProps {
    tabsContent: TabContent[];
    onTabChange: (index: number) => void;
}
const activeTab = 'flex inline-flex text-3xl text-center font-bold font-weight-600 py-2 px-4 pointer-cursor border-none text-white bg-blue-800 rounded-md'
const inactiveTab = 'flex inline-flex text-3xl text-center font-bold font-weight-600 py-2 px-4 pointer-cursor border-none text-black bg-gray-200 rounded-md'
const Tabs = ({tabsContent, onTabChange}: TabsProps) => {
   const [currentTabIndex, setCurrentTabIndex] = useState(0)
    const handleOnClick = (currentIndex: number) => {
         setCurrentTabIndex(currentIndex)
         onTabChange(currentIndex)
    }

    return (
        <div className="p-2 bg-blue-50">
            <div className="flex justify-center mb-4">
                {tabsContent.map((tab: TabContent, index: number) => (
                    <div className={currentTabIndex === index ? activeTab : inactiveTab} key={tab.label} onClick={() => handleOnClick(index)}>
                        <span>
                            {tab.label}
                        </span>
                    </div>
                ))}
            </div>
            <div className="py-4 px-2 h-25 overflow-auto bg-white">
                {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
            </div>
        </div>
    )
}
export default Tabs;