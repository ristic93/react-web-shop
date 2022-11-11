import React, { useContext } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductsContext from '../contexts/ProductsContext';
import { Link } from 'react-router-dom';


const FeaturedItems = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    const { products, setProducts } = useContext(ProductsContext);

    return (
        <section className="featuredItems container">
            <h2>Featured items</h2>
            <Carousel
                className="carousel"
                swipeable={false}
                draggable={false}
                showDots={false}
                arrows={false}
                stopOnHover={true}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                customTransition="transform 1s ease-in-out"
                transitionDuration={1000}>

                {products.map(product => {
                    return (
                        <div key={product.id} className="item">
                            <Link to="single1.html">
                                <img src={product.thumbnail} alt="" />
                                <h3>{product.title.substring(0, 17)}</h3>
                                <p>${product.price}</p>
                            </Link>
                        </div>
                    )
                })}
            </Carousel>
        </section>
    )
}

export default FeaturedItems;


