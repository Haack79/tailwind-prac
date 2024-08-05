'use client'
import { createContext, ReactNode, useEffect, useState } from 'react';
import featureFlagDataServiceCall from './data';

export interface FeatureFlags {
    showLightAndDarkMode: boolean;
    showTicTacToe: boolean;
    showRandomColorGenerator: boolean;
    showQRCodeGenerator: boolean;
    showTreeView: boolean;
    showAccordion: boolean;
}

export interface FeatureFlagsContextType {
    loading: boolean;
    enableFlags: FeatureFlags;
}
export const FeatureFlagsContext = createContext<FeatureFlagsContextType | undefined>(undefined);

export default function FeatureFlagGlobalState({ children }: { children: ReactNode }) {
    const [loading, setLoading] = useState(false);
    const [enableFlags, setEnableFlags] = useState<FeatureFlags>({
        showLightAndDarkMode: false,
        showTicTacToe: false,
        showRandomColorGenerator: false,
        showQRCodeGenerator: false,
        showTreeView: false,
        showAccordion: false
    });

    const fetchFeatureFlags = async () => {
         try {
            setLoading(true);
            const response = await featureFlagDataServiceCall()
            setEnableFlags(response as FeatureFlags);
            setLoading(false);
         } catch (err) {
            console.error(err);
            setLoading(false);
            if (err instanceof Error) {
                throw new Error(err.message); 
            }
         }
    }
    useEffect(() => {
        fetchFeatureFlags();
    },[])
    return <FeatureFlagsContext.Provider value={{ loading, enableFlags }}>{children}</FeatureFlagsContext.Provider>
}
