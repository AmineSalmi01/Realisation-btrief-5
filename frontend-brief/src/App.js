import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideBare from './components/SideBare';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import './App.css'; 
import Promotion from './pages/Promotion';
import Aprrenants from './pages/Aprrenants'
import Brief from './pages/Brief';

const App = () => {
    const activeMenu = true;

  return (
    <div>
        <NavBar />  
        <div className='flex'>
            <BrowserRouter>
                <div>
                
                <SideBare />
                </div>
                <div>
                    
                        <Routes>
                            <Route path='/' element={<Home />}/>
                            <Route path='/Home' element={<Home />}/>
                            <Route path='/Promotion' element={<Promotion />}/>
                            <Route path='/Aprrenants' element={<Aprrenants />}/>
                            <Route path='/Brief' element={<Brief />}/>
                        </Routes>
                    
                </div>
            </BrowserRouter>
        </div>
    </div>
  )
}

export default App