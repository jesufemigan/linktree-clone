import AnchorTags from "../../components/AnchorTags";

import face from '../../assets/profile.jpg';
import share from '../../assets/share-icon.svg';
import ellipsis from '../../assets/horizontal-ellipsis.svg';
import camera from '../../assets/camera.svg';
import slack from '../../assets/slack.svg'
import github from '../../assets/github.svg'
import Footer from "../../components/Footer";

import { Link } from "react-router-dom";


const Homepage = () => {
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
            <AnchorTags name="Twitter Link" url="https://twitter.com/jesufemigan" />
            <AnchorTags name="Zuri Team" id='btn__zuri' url="https://training.zuri.team/" />
            <AnchorTags name="Zuri Books" url="http://books.zuri.team/" id='books'/>
            <AnchorTags name="Python Books" id='book__python' url="http://books.zuri.team/python-for-beginners?ref_id=jesufemi" />
            <AnchorTags name='Background Check for Coders' id='pitch' url='https://background.zuri.team'/>
            <AnchorTags name='Design Books' id='book__design' url='https://books.zuri.team/design-rules'/>
            <Link to='/contact'>
              <AnchorTags name='Contact Me' id='contact'/>
            </Link>
          </section>
          <section className="social">
            <img src={slack} alt="slack" />
            <img src={github} alt="github" />
          </section>
        </div>
        <Footer />
    </>
  )
}
export default Homepage