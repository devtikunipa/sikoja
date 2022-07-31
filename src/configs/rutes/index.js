import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Sikojas, About, Detail } from '../../pages';
const Rutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/data' element={<Sikojas />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rutes