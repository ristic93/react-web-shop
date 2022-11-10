import React, { useState, useEffect } from 'react';
import img1 from '../../src/img/boots.jpg';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=10')
            .then(res => res.json())
            .then((data) => {
                setProducts(data.products);
            })
            .catch((err) => console.log(err));
    }, [])

    console.log(products);

    return (
        <section className="products">
            <article className='heading'>
                <h2>#Products</h2>
            </article>
            <article className='container'>
                {products.map((product, idx) => {
                    return (
                        <div className="item">
                            <a href={`single/${product.id}`}>
                                <img src={product.thumbnail} alt="" />
                                <h3>{product.title}</h3>
                                <p>${product.price}</p>
                            </a>
                        </div>
                    )
                })}

            </article>
        </section>
    )
}

export default Products;