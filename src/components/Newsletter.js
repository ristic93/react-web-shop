import React from 'react';

const Newsletter = () => {
    return (
        <section className="subscribe">
            <article className="container">
                <h2>Newsletter</h2>
                <h4>Get timely updates from your favourite products and special offers</h4>
                <form>
                    <input type="text" placeholder="Your email..." />
                    <input type="submit" value="Subscribe" />
                </form>
            </article>
        </section>
    )
}

export default Newsletter;