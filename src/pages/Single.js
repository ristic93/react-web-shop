import React from 'react';
import { useParams } from 'react-router-dom';
import FeaturedItems from '../components/FeaturedItems';

const Single = () => {

  const params = useParams();

  return (
    <section className="single">
        <article className='heading'>
          <h2>#Single product</h2>
        </article>
        <article className='container'>
            <div id="slika">
                <img src="img/boots.jpg" alt="BootsPhoto"/>
            </div>
            <div>
                <h3 id="naziv">Boots</h3>
                <div className="price">$210</div>
                <p id="opis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, iste voluptatem? Dolorem
                    soluta natus iste tenetur suscipit. Corporis velit esse deleniti animi dolore nam autem voluptatibus
                    porro obcaecati, nisi eveniet beatae fuga magni!
                    Eos corrupti maiores suscipit odit, ipsam ratione culpa nihil quo vitae ullam nobis labore tenetur
                    fuga beatae a accusantium eum id fugiat!</p>
                <form>
                    <label>Quantity</label>
                    <select id="qty" name="kolicina">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <button>Order now</button>
                </form>
                <hr/>
                <span>Category:
                <div className="category">
                    <a href="/">Men</a>,
                    <a href="/">Boots</a>
                </div>
                </span>
                <hr/>
            </div>
        </article>
        <FeaturedItems/>
    </section>
  )
}

export default Single;