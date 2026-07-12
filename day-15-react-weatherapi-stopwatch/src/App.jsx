import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Content from './components/Content';
import Stopwatch from "./components/Stopwatch";
import WeatherAPI from "./components/WeatherAPI";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Content />} />
            <Route path="/stopwatch" element={<Stopwatch />} />
            <Route path="/weather" element={<WeatherAPI />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
