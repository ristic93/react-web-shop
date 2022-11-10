import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from '../../src/img/boots.jpg';
import img2 from '../../src/img/gloves.jpg';
import img3 from '../../src/img/jackets.jpg';


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
                transitionDuration={1000}
            >
                <div className="item">
                    <a href="single1.html">
                        <img src={img1} alt=""/>
                        <h3>Boots</h3>
                        <p>$220</p>
                    </a>
                </div>
                <div className="item">
                    <a href="single2.html">
                        <img src={img2} alt=""/>
                        <h3>GLoves</h3>
                        <p>$20</p>
                    </a>
                </div>
                <div className="item">
                    <a href="single3.html">
                        <img src={img1} alt=""/>
                        <h3>Jackets</h3>
                        <p>$290</p>
                    </a>
                </div>
                <div className="item">
                    <a href="single4.html">
                        <img src={img2} alt=""/>
                        <h3>Pants</h3>
                        <p>$110</p>
                    </a>
                </div>
                <div className="item">
                    <a href="single5.html">
                        <img src={img1} alt=""/>
                        <h3>Poles</h3>
                        <p>$50</p>
                    </a>
                </div>
                <div className="item">
                    <a href="single6.html">
                        <img src={img2} alt=""/>
                        <h3>Shirts</h3>
                        <p>$80</p>
                    </a>
                </div>
                <div className="item">
                    <a href="single7.html">
                        <img src={img1} alt=""/>
                        <h3>Skirts</h3>
                        <p>$90</p>
                    </a>
                </div>
                <div className="item">
                    <a href="single8.html">
                        <img src={img3} alt=""/>
                        <h3>Socks</h3>
                        <p>$10</p>
                    </a>
                </div>
            </Carousel>

        </section>
    )
}

export default FeaturedItems;


