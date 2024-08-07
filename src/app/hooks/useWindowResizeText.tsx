'use client';

import useWindowResize from './useWindowResize';

const UseWindowResizeText = () => {
    const { width, height } = useWindowResize();
    return (
        <div>
            <h1>Window Resize Hook</h1>
            <p>Width is {width}</p>
            <p>Height is {height}</p>
        </div>
    );
    };

export default UseWindowResizeText;