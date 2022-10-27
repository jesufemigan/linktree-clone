import './App.css';

import face from './assets/profile.jpg';
import share from './assets/share-icon.svg';
import ellipsis from './assets/horizontal-ellipsis.svg';
import camera from './assets/camera.svg';

function App() {
  return (
    <div className="App">
      <section className="profile">
        <div>
          <div className="img-container">
            <img src={face} alt="profile" id="profile__img" style={{ width: '100%' }}/>
            <div className="overlay">
              <img src={camera} alt="" />
            </div>
          </div>
          <p id='twitter'>Jesufemigan</p>
          <p id='slack' style={{ display: 'none' }}>Jesufemi</p>
        </div>
        <div className="circle">
          <img src={share} alt="share-button" id='desktop'/>
          <img src={ellipsis} alt="ellipsis" id='mobile'/>
        </div>
      </section>
    </div>
  );
}

export default App;
