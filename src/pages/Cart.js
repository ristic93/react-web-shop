import React from 'react';
import FeaturedItems from '../components/FeaturedItems';

const Cart = () => {
    return (
        <div className='cart'>
            <article className='heading'>
                <h2>#Cart</h2>
            </article>
            <FeaturedItems/>
        </div>
    );
};

export default Cart;