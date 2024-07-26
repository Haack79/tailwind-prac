import { useEffect, useState, useCallback } from "react";

const LoadMoreData = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState<{name: string, description: string, thumbnail: string}[]>([]);
    const [count, setCount] = useState(0);

    const loadMoreProducts = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const data = await response.json();
            setProducts(data.prodcuts); // Add type annotation as any[]
            setCount(count + 10);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    },[count]);
    useEffect(() => {
        loadMoreProducts();
    },[loadMoreProducts]);

    return (
        <div className="flex-col gap-3">
            <h1>Products</h1>
            <div>
                {
                    products && products.length > 0 ? 
                        products.map((product, index) => (
                            <div key={index}>
                                <h3>{product.name}</h3>
                                <img src={product.thumbnail} alt={product.name} />
                                <p>{product.description}</p>
                            </div>
                        ))
                        : <div>No products found</div>
                }
            </div>
            <div>
                <button onClick={}>Load more products</button>
            </div>
        </div>
    );
}

export default LoadMoreData;
