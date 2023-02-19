import React from 'react'
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Experience from './Experience';
import Navbar from './Navbar';
import Leftsidebar from './Leftsidebar';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";

import Rightsidebar from './Rightsidebar';

function App(){
  return(

    <>
   
    <Navbar/>
    <Leftsidebar/>
    <Rightsidebar/>
    <About />
    <Experience/>
    <Work/>
    <Contact/>
   
      

      <Routes>
        
        
  <Route path='/about/:about' element={<About/>}/>
  <Route path='/work/:work' element={<Work/>}/>
  <Route path='/experience/:experience' element={<Experience/>}/>
  <Route path='/contact/:contact' element={<Contact/>}/>
 


      </Routes>

    
    
   </>
  
  )
}
export default App;