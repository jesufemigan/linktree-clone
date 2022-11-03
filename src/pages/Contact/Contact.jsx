import './contact.css';

const Contact = () => {
  return (
    <div className='contact-container'>
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask about anything you have in mind</p>

      <form>
        <div>
          <div>
            <label htmlFor="first_name">First name</label>
            <input type="text" id='first_name'/>
          </div>
          <div>
            <label htmlFor="last_name">Last name</label>
            <input type="text" id='last_name'/>
          </div>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id='email'/>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="" id="message"></textarea>
        </div>
        <div>
          <input type="checkbox"/>
          <p>You agree to providing your data to Jesufemi who may contact you.</p>
        </div>

        <button type='submit' id='btn__submit'>Send Message</button>
      </form>
    </div>
  )
}
export default Contact