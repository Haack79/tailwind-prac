'use client';

import { useLayoutEffect, useState } from "react";

const useWindowResize = () => {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });
    const handleResize = () => {
        // Update windowSize state with the width and height of the window
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }
    // uselayout will run after the DOM has been updated before the browser paints the screen, synchronously.
    useLayoutEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);
    return windowSize;
}
export default useWindowResize;