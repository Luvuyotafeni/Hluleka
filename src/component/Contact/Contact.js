import React from 'react';
import './contact.css'

const Contact = () => {
  return (
    <>
      <section id='contact' >
        <div className='contact'>
            <p>Contact US</p>
        
            <div className='contact-container'>
          
            <form>
                <div className='form-row'>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' />
                </div>
                <div className='form-row'>
                  <label htmlFor='email'>Email</label>
                  <input type='email' id='email' />
                </div>
                <div className='form-row'>
                <label htmlFor='subject'>Subject</label>
                <input type='text' id='subject' />
                </div>
                <div className='form-row'>
                <label htmlFor='message'>Message</label>
                <textarea rows={5} id='message'></textarea>
                </div>
                <button type='submit'>Send</button>
            </form>
            </div>
        </div>
    </section>
    </>
  );
};

export default Contact;
