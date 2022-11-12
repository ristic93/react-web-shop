import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductsContext from '../contexts/ProductsContext';

const Products = () => {

    const { products, setProducts } = useContext(ProductsContext);


    return (
        <section className="products">
            <article className='heading'>
                <h2>#Products</h2>
            </article>
            <article className='container'>
                {products.map((product) => {
                    return (
                        <div key={product.id} className='item'>
                            <Link to={`/single/${product.id}`} className="">
                                <div className='image'>
                                    <img src={product.thumbnail} alt="product photo" />
                                </div>
                                <div className='text'>
                                    <h3>{product.title.substring(0, 17)}</h3>
                                    <p>${product.price}</p>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </article>
        </section>
    );
};

export default Products;