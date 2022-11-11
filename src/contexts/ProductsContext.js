import { createContext, useState, useEffect } from "react";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=10')
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
            })
            .catch(err => console.log(err));
    }, []);
    
    console.log(products);

    return (
        <ProductsContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContext;