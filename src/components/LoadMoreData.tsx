'use client';
import { useEffect, useState, useCallback } from "react";

const LoadMoreData = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState<{name: string, description: string, thumbnail: string}[]>([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false);

    const loadMoreProducts = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const data = await response.json();
            if (data && data.products && data.products.length > 0) {
                setProducts((prevData) => {
                    return [...prevData, ...data.products];
                });
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    },[count]);
    useEffect(() => {
        loadMoreProducts();
    },[count, loadMoreProducts]);
    useEffect(() => {
        if (products.length >= 100) {
            setDisableButton(true);
        }
    },[products]);
    return (
        <div className="flex flex-col gap-3">
            <h1>Products</h1>
            <div className="grid grid-cols-4 gap-2.5 border border-black">
                {
                    products && products.length > 0 ? 
                        products.map((product, index) => (
                            <div key={index} className="flex-col gap-2.5 p-2 border">
                                <h3>{product.name}</h3>
                                <img src={product.thumbnail} alt={product.name}/>
                                <p>{product.description}</p>
                            </div>
                        ))
                        : <div>No products found</div>
                }
            </div>
            <div>
                <button disabled={disableButton} onClick={() => setCount(count + 1)} className={disableButton ? "rounded-md border border-grey bg-grey" : "rounded-md border border-black bg-gray-400"}>{disableButton ? 'Max products loaded' : 'Load more products'}</button>
            </div>
        </div>
    );
}

export default LoadMoreData;
