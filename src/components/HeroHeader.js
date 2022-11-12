import React from 'react';
import { Link } from 'react-router-dom';

const HeroHeader = () => {
  return (
    <header>
      <article className="container hero">
        <div>
          <h3>Grab-n-go tech</h3>
          <h1>FUSION SHOP</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, suscipit!</p>
          <Link to="products"><button>Order now</button></Link>
        </div>
      </article>
    </header>
  )
}

export default HeroHeader;