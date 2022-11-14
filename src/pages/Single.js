import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FeaturedItems from '../components/FeaturedItems';
import ProductsContext from '../contexts/ProductsContext';
import CartContext from '../contexts/CartConxtext';

const Single = () => {

    const { products, setProducts } = useContext(ProductsContext);
    const { cart, setCart } = useContext(CartContext);

    const params = useParams();
    const navigate = useNavigate();


    let product = products.filter(prod => {
        if (prod.id == params.id) {
            return prod;
        }
    });


    let option = [];
    for (let i = 1; i < product[0].stock; i++) {
        option.push(<option key={i} value={`${i}`}>{i}</option>)
    }

    const addToCart = (event) => {
        event.preventDefault();

        let tempIdx;
        let tempProd = cart.filter((item, idx) => {
            if (item.id == params.id) {
                tempIdx = idx;
                return item;
            }
        });


        if (tempProd.length > 0) {
            setCart((prev) => {
                prev[tempIdx].qty =
                    Number(prev[tempIdx].qty) + Number(event.target.quantity.value);
                return [...prev];
            })
        } else {
            let newCartItem = {
                id: params.id,
                img: product[0].thumbnail,
                brand: product[0].brand,
                category: product[0].category,
                name: product[0].title,
                price: product[0].price,
                rating: product[0].rating,
                desc: product[0].description,
                qty: event.target.quantity.value
            };
            
            setCart(cart => [...cart, newCartItem])
        }

        navigate("/products");
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
                    <form onSubmit={addToCart}>
                        <hr />
                        <label>Quantity</label>
                        <select name="quantity">
                            {option}
                        </select>
                        <button type='submit'>Add to cart</button>
                    </form>
                </div>
            </article>
            <FeaturedItems />
        </section>
    );
};

export default Single;