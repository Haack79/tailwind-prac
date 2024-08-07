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
/*
Basic type for count:
Yes, count being a number (a primitive type) is part of why this works. When you update a primitive state value in React, it doesn't create a new reference, unlike with objects or arrays.
useCallback:
Memoizes a callback function.
Returns a memoized version of the callback that only changes if one of the dependencies has changed.
Useful for optimizing child component re-renders when passing callbacks.
Syntax: useCallback(fn, dependencies)
useMemo:
Memoizes a value.
Returns a memoized value that only recomputes when one of the dependencies has changed.
Useful for expensive calculations.
Syntax: useMemo(() => computeExpensiveValue(a, b), [a, b])
The key differences:
useCallback returns a memoized callback function, while useMemo returns a memoized value.
Both hooks will recompute their result if any dependency in their dependency array changes.
useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).
In both cases, these hooks are checking if any of their dependencies have changed since the last render. If none of the dependencies have changed, they return the memoized value (or function in the case of useCallback) from the previous render.
They're not specifically checking if a prop or state changes, but rather if any of the values listed in their dependency array have changed. These dependencies can be props, state, or any other values that the memoized function or value depends on.
Using these hooks helps in performance optimization by avoiding unnecessary re-computations or re-creations of functions, especially in scenarios where equality comparisons of these values or functions might cause unnecessary re-renders of child components.
https://medium.com/@jan.hesters/usecallback-vs-usememo-c23ad1dc60
useCallback and useMemo both expect a function and an array of dependencies. 
The difference is that useCallback returns its function when the dependencies change 
while useMemo calls its function and returns the result.
*/