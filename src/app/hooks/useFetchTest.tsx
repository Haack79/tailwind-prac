'use client';
import useFetch from "./useFetchHook";

interface Product {
    name: string;
    description: string;
    thumbnail: string;
}

interface ProductsResponse {
    products: Product[];
}

const UseFetchHookTest = () => {
    const { data, error, pending } = useFetch<ProductsResponse>('https://dummyjson.com/products?limit=20&skip=0');

    return (
        <div>
            <h1>Use Fetch Hook</h1>
            {pending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && data.products && data.products.length > 0 ? (
                <div className="grid grid-cols-4 gap-2.5 border border-black">
                    {data.products.map((product, index) => (
                        <div key={index} className="flex-col gap-2.5 p-2 border">
                            <h3>{product.name}</h3>
                            <img src={product.thumbnail} alt={product.name} />
                            <p>{product.description}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div>No products found</div>
            )}
        </div>
    );
};

export default UseFetchHookTest;
