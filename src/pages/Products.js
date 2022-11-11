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
                        <div key={product.id} className="item">
                            <Link to={`single/${product.id}`}>
                                <img src={product.thumbnail} alt="" />
                                <h3>{product.title.substring(0, 17)}</h3>
                                <p>${product.price}</p>
                            </Link>
                        </div>
                    )
                })}
            </article>
        </section>
    )
}

export default Products;