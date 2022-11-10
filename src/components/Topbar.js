import React from 'react';
import { Link } from 'react-router-dom';
import { BiMobileVibration } from 'react-icons/bi';

const Topbar = () => {
  return (
    <section className="topbar">
      <article className='information'>
        <div>
          <p><a href='/'>Phone: 062 123 456</a> | <a href='/'>Email: info@fusion.com</a></p>
        </div>
        <div>
          <a href='/'><p>Register | Login </p></a>
        </div>
      </article>
      <h1>
        <Link className="logo" to="/"><BiMobileVibration style={{ color: 'black', marginRight: '10px' }}/>Fusion shop</Link>
      </h1>
    </section>
  )
}

export default Topbar;