import React from 'react';
import { GiReceiveMoney } from 'react-icons/gi';
import { FaTruck, FaHeadset, FaCreditCard } from 'react-icons/fa';

const Info = () => {
    return (
        <section className="info container">
            <div>
                <GiReceiveMoney className='i'/>
                <h4>Money back guarantee</h4>
                <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div>
                <FaTruck className='i'/>
                <h4>Free delivery</h4>
                <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div>
                <FaHeadset className='i'/>
                <h4>24/7 support</h4>
                <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div>
                <FaCreditCard className='i'/>
                <h4>Secure payment</h4>
                <p>Lorem ipsum dolor sit amet</p>
            </div>
        </section>
    )
}

export default Info;