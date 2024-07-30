'use client'
import { useState, useEffect } from 'react';
const ScrollIndicator = ({url}: {url: string}) => {
    const [data, setData] = useState<{id: number, title: string}[]>([])
    const [loading, setLoading] = useState(false)
    const [errMessage, setErrMessage] = useState('')
    const [scrollPercentage, setScrollPercentage] = useState(0)

    const handleScrollPercentage = () => {
        const scrollHeight = document.documentElement.scrollHeight
        const scrollTop = document.documentElement.scrollTop
        const clientHeight = document.documentElement.clientHeight
        const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100
        setScrollPercentage(scrollPercent)
    }
    const handleScrollBarClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const scrollBar = event.currentTarget;
        const clickPosition = event.clientX - scrollBar.getBoundingClientRect().left;
        const scrollBarWidth = scrollBar.clientWidth;
        const newScrollPercentage = (clickPosition / scrollBarWidth) * 100;

        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const newScrollTop = ((scrollHeight - clientHeight) * newScrollPercentage) / 100;

        window.scrollTo({ top: newScrollTop, behavior: 'smooth' });
    };

    const fetchData = async (url: string) => {
        try {
            setLoading(true)
            const response = await fetch(url)
            const data = await response.json()
            if (data && data.products && data.products.length > 0) {
                setData(data.products)
                setLoading(false)
            }
        } catch (error) {
            console.error(error)
            setLoading(false)
            setErrMessage('Error fetching data')
        }
    }
    useEffect(() => {
        fetchData(url)
    }, [url])
    console.log(data, loading)
    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage)
        return () => {
            window.removeEventListener('scroll', handleScrollPercentage)
        }
    },[])
    if (errMessage) return <div>{errMessage}</div>
    if (loading) return <div>Loading...</div>
    return (
        <div>
            <div className="fixed top-7 z-50 w-full mt-5">
                <h1>Custom Scroll</h1>
                <div 
                    className='relative w-full h-2 bg-gray-300'
                    onClick={handleScrollBarClick}
                >
                    <div 
                        className="absolute top-0 left-0 h-full bg-blue-500"
                        style={{width: `${scrollPercentage}%`}}
                    >
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-3 mt-3 pt-3">
                {
                    data && data.length > 0 ? 
                        data.map((product, index) => <div key={product.id}>{product.title}</div>
                    ) : <div>No products found</div>
                }
            </div>
        </div>
    )
}

export default ScrollIndicator;