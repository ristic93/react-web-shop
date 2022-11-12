import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import FeaturedItems from '../components/FeaturedItems';
import ProductsContext from '../contexts/ProductsContext';

const Single = () => {

    const params = useParams();
    const { products, setProducts } = useContext(ProductsContext);

    let product = products.filter(prod => {
        if (prod.id == params.id) {
            return prod;
        }
    });

    let option = [];

    for (let i = 1; i < product[0].stock; i++) {
        option.push(<option key={i} value={`${i}`}>{i}</option>)
        
    }

    return (
        <section className="single">
            <article className='heading'>
                <h2>#Single product</h2>
            </article>
            <article className='container'>
                <div>
                    <img src={product[0].thumbnail} alt="Singlephoto" />
                </div>
                <div>
                    <h4>{product[0].brand}</h4>
                    <h4>Category: {product[0].category}</h4>
                    <h3>{product[0].title}</h3>
                    <p id='price'>${product[0].price}</p>
                    <p>Rating: {product[0].rating}</p>
                    <p>{product[0].description}</p>
                    <form>
                        <hr />
                        <label>Quantity</label>
                        <select name="quantity">
                            {option}
                        </select>
                        <button>Add to cart</button>
                    </form>
                </div>
            </article>
            <FeaturedItems />
        </section>
    );
};

export default Single;