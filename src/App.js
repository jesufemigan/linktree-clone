import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './pages/HomePage/Homepage';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
