import React from 'react';
import Newsletter from '../components/Newsletter';

const Contact = () => {
    return (
        <>
            <section className="contact">
                <article className='heading'>
                    <h2>#Contact us</h2>
                </article>
                <article className='container'>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181139.3549157967!2d20.282514026447256!3d44.81540328868933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa3d7b53fbd%3A0x1db8645cf2177ee4!2sBelgrade!5e0!3m2!1sen!2srs!4v1668003455907!5m2!1sen!2srs"
                            width="100%"
                            height="500"
                            style={{ border: '1px solid $black', borderRadius: '20px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div>
                        <form>
                            <input type="text" placeholder="Name" required />
                            <input type="email" placeholder="Email" required />
                            <textarea rows="10" placeholder="Message....." required></textarea>
                            <button>Send message</button>
                        </form>
                    </div>
                </article>
            </section>
            <Newsletter></Newsletter>
        </>
    )
}

export default Contact;