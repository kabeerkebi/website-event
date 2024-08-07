import React from 'react'
import "../assets/styles/main.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Interface from './Interface';


const HomePage = () => {
  return (
 <>
 
 <Routes>
          <Route path="/" element={<Interface />} />
        </Routes>
 
 </>
  )
}

export default HomePage