// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Home, Sikojas, About, Detail, Dashboard, Login } from '../../pages';
// const Rutes = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/data' element={<Sikojas />} />
//         <Route path='/detail/:id' element={<Detail />} />
//         <Route path='/dashboard' element={<Dashboard />} />
//         <Route path='/login' element={<Login />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default Rutes

import { useRoutes } from "react-router-dom";
import GuestRoutes from "./GuestRoutes";


export default function ThemeRoutes() {
  return useRoutes([GuestRoutes])
}