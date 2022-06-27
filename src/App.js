import React from 'react';
import './App.css';
import Header from './components/Header'
import AddBlog from './components/pages/AddBlog'
import Getblog from './components/pages/Getblog';
import Imgupload from './components/pages/Imgupload';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/addblog' element={<AddBlog />} />
        <Route exact path='/get' element={<Getblog />} />
        <Route exact path='/upload' element={<Imgupload />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
