'use client';

import { useContext, useState } from "react";
import { FeatureFlagsContext } from "./context/context";
import Accordion from "../Accordion";
import LightDarkMode from "../LightDarkMode";
import TicTacToe from "../TicTacToe";
import TreeView from "../TreeView/TreeView";
import RandomColor from "../randomColor";
import menus from "@/app/treeview/data";
import QRCodeGenerator from "../QrCodeGenerator";

// Sample data for the Accordion component
const AccordionData = [
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

const FeatureFlags = () => {
    const context = useContext(FeatureFlagsContext);
    
    const [color, setColor] = useState<string>('#000002');
    const [colorString, setColorString] = useState<string>('#000002');
    const [colortype, setColorType] = useState<string>('hex');
    // Handle the case where context might be undefined
    if (!context) {
        return <h1>Error: FeatureFlagsContext not found. Make sure to wrap this component with FeatureFlagGlobalState.</h1>;
    }

    const { loading, enableFlags } = context;


    const componentsToRender = () => [
        {
            key: 'showLightAndDarkMode',
            component: <LightDarkMode />
        },
        {
            key: 'showTicTacToe',
            component: <TicTacToe />
        },
        {
            key: 'showRandomColorGenerator',
            component: <RandomColor setColor={setColor} setColorString={setColorString} setColorType={setColorType} />
        },
        {
            key: 'showQRCodeGenerator',
            component: <QRCodeGenerator />
        },
        {
            key: 'showTreeView',
            component: <TreeView menuList={menus} />
        },
        {
            key: 'showAccordion',
            component: <Accordion data={AccordionData} />
        }
    ];

    if (loading) return <h1>Loading...</h1>;

    return (
        <div>
            <h1>Feature Flags</h1>
            {enableFlags && Object.keys(enableFlags).length > 0 ? 
                componentsToRender().map((item) => (
                    enableFlags[item.key as keyof typeof enableFlags] ? item.component : null
                )) : null
            }
        </div>
    );
};

export default FeatureFlags;
