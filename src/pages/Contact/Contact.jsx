import Footer from '../../components/Footer';
import './contact.css';

const Contact = () => {
  return (
    <>
      <div className='contact-container'>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask about anything you have in mind.</p>

        <form>
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
            <textarea name="" id="message" placeholder="Send me a message and I'll reply as soon as possible" />
          </div>
          <div className='checkbox-container'>
          <label className="checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
            <p>You agree to providing your data to Jesufemi who may contact you.</p>
          </div>

          <button type='submit' id='btn__submit'>Send Message</button>
        </form>
      </div>
      <Footer />
    </>
  )
}
export default Contact