// 'use client';

// import { useEffect } from 'react';
// import useLocalStorage from '../app/hooks/useLocalStorage';

// const LightDarkMode = () => {
//     const [theme, setTheme] = useLocalStorage('theme', 'light');

//     useEffect(() => {
//         document.documentElement.setAttribute('data-theme', theme);
//     }, [theme]);

//     const toggleTheme = () => {
//         setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//     };

//     return (
//         <div className="light-dark-mode">
//             <span>
//                 <p>Current Theme: {theme}</p>
//                 <button onClick={toggleTheme}>Toggle Theme</button>
//             </span>
//         </div>
//     );
// }

// export default LightDarkMode;
'use client';

import { useEffect } from 'react';
import useLocalStorage from '../app/hooks/useLocalStorage';

const LightDarkMode = () => {
    const [theme, setTheme] = useLocalStorage('theme', 'light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className="light-dark-mode min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <div className="text-center">
                <p className="text-2xl mb-4">Current Theme: {theme}</p>
                <button 
                    onClick={toggleTheme} 
                    className="px-4 py-2 rounded bg-gray-800 text-gray-100 dark:bg-gray-200 dark:text-gray-800"
                >
                    Toggle Theme
                </button>
            </div>
        </div>
    );
}

export default LightDarkMode;
