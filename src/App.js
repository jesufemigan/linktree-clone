import './App.css';

import face from './assets/profile.jpg';
import share from './assets/share-icon.svg';
import ellipsis from './assets/horizontal-ellipsis.svg';
import camera from './assets/camera.svg';
import Link from './components/Link';
import slack from './assets/slack.svg'
import github from './assets/github.svg'
import zuri from './assets/zuri.svg'
import i4G from './assets/I4G.svg'

function App() {
  return (
    <>
      <div className="App">
        <section className="profile">
          <div>
            <div className="img-container">
              <img src={face} alt="profile" id="profile__img" style={{ width: '100%' }}/>
              <div className="overlay">
                <img src={camera} alt="" />
              </div>
            </div>
            <div>
              <p id='twitter'>jesufemigan</p>
            </div>
            <p id='slack' style={{ display: 'none' }}>Jesufemi</p>
          </div>
          <div className="circle">
            <img src={share} alt="share-button" className='desktop'/>
            <p className='share__text desktop'>Share Link</p>
            <img src={ellipsis} alt="ellipsis" id='mobile'/>
          </div>
        </section>

        <section className='links'>
          <Link name="Twitter Link" url="https://twitter.com/jesufemigan" />
          <Link name="Zuri Team" id='btn__zuri' url="https://training.zuri.team/" />
          <Link name="Zuri Books" url="http://books.zuri.team/" id='books'/>
          <Link name="Python Books" id='book__python' url="http://books.zuri.team/python-for-beginners?ref_id=jesufemi" />
          <Link name='Background check for coders' id='pitch' url='https://background.zuri.team'/>
          <Link name='Design Books' id='book__design' url='https://books.zuri.team/design-rules'/>
        </section>
        <section className="social">
          <img src={slack} alt="slack" />
          <img src={github} alt="github" />
        </section>
      </div>
      <footer>
        <img src={zuri} alt="zuri" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={i4G} alt="i4G" />
      </footer>
    </>
  );
}

export default App;
