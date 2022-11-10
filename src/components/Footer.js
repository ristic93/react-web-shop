import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { BiMobileVibration } from 'react-icons/bi';


const Footer = () => {
    return (
        <footer>
            <article>
                <h3>
                    <Link className="logo" to="/"><BiMobileVibration style={{color: 'white', marginRight: '10px'}}/>Fusion shop</Link>
                </h3>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="products">Products</Link>
                        </li>
                        <li>
                            <Link to="about">About us</Link>
                        </li>
                        <li>
                            <Link to="contact">Contact us</Link>
                        </li>
                    </ul>
                </nav>
                <div className="icons">
                    <span><a href="/"><FaFacebook className='i'/></a></span>
                    <span><a href="/"><FaInstagram className='i'/></a></span>
                    <span><a href="/"><FaTwitter className='i'/></a></span>
                </div>
            </article>
            <article>
                <p>&copy; Fusion shop 2022</p>
            </article>
        </footer>
    )
}

export default Footer;