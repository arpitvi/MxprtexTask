
import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Card from "./Components/Card" 
import StoryDetails from './Components/StoryDetails';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (  
    <>
     <Navbar/>
     <Routes>
      
     <Route path="/" element={<Card />} />
       <Route path="/story-details/:id" element={<StoryDetails />} />
     </Routes>  
    </>
  );
};

export default App;

