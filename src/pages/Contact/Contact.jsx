import Footer from '../../components/Footer';
import './contact.css';

import { useRef, useState } from 'react';

const Contact = () => {
  const name = 'Jesufemi'

  const messageRef = useRef(null)
  const [messageToSend, setMessageToSend] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (messageToSend === '') {
      messageRef.current.classList.add('error')
    }
    messageRef.current.nextSibling.style.display = 'block'

  }

  if (messageToSend !== '') {
    messageRef.current.classList.remove('error')
    messageRef.current.nextSibling.style.display = 'none'
  }
  
  return (
    <>
      <div className='contact-container'>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask about anything you have in mind.</p>

        <form onSubmit={handleSubmit}>
          <div className='name'>
            <div className='input'>
              <label htmlFor="first_name">First name</label>
              <input type="text" id='first_name' placeholder='Enter your first name'/>
            </div>
            <div className='input'>
              <label htmlFor="last_name">Last name</label>
              <input type="text" id='last_name' placeholder='Enter your last name'/>
            </div>
          </div>
          <div className='input'>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' placeholder='yourname@email.com'/>
          </div>
          <div className='input'>
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Send me a message and I'll reply as soon as possible" ref={messageRef} value={messageToSend} onChange={(e) => setMessageToSend(e.target.value)}/>
            <small>Please enter a message</small>
          </div>
          <div className='checkbox-container'>
          <label className="checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
            <p>You agree to providing your data to {name} who may contact you.</p>
          </div>

          <button type='submit' id='btn__submit'>Send Message</button>
        </form>
      </div>
      <Footer />
    </>
  )
}
export default Contact