'use client';

import useFetch from "@/app/hooks/useFetchHook";
interface Product {
    name: string;
    description: string;
}
interface ProductResponse {
    products: Product[];
}
const ScrollToTopAndBottom = () => {
    const { data, error, pending } = useFetch<ProductResponse>('https://dummyjson.com/products',{});

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const scrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    };
    
    return (
        <div>
        <button onClick={scrollToBottom}>Scroll to bottom</button>
        {pending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {data && data.products && data.products.length > 0 && (
            <div>
                {data.products.map((product, index) => (
                    <div key={index} className="flex-col gap-2.5 p-2 border">
                        <h3>{product.name}</h3>
                        <div></div>
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>
        )}
        <button onClick={scrollToTop}>Scroll to top</button>
        </div>
    );
}

export default ScrollToTopAndBottom;    
