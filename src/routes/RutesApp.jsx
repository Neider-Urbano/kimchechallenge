import React from 'react'
import { Route, Routes } from "react-router-dom";
import Error404 from '../Pages/Error/Error404';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';

const RutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={ <Login /> }/>
      <Route path="/home" element={<Home />}/>
      <Route path="/*" element={<Error404 />}/>
    </Routes>
  )
}

export default RutesApp