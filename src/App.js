import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './routes/Home';
import './App.scss';
import About from './routes/About';
import Navigation from './components/Navigation';

function App(){
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;
