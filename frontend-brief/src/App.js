import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import SideBare from './components/SideBare';
import NavBar from './components/NavBar';
// import { Promotion, Home, Brief, apprenants } from './pages';
import Home from './pages/Home';

import './App.css'; 
import { Root } from 'postcss';

const App = () => {
    const activeMenu = true;

  return (
    <div>

        <Home />
        {/* <BrowserRouter>
            <div className='flex relative dark:bg-main-dark-bg'>
                <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
                    <TooltipComponent content="setting" >
                        <button type='button' className='text-2xl p-3 hover:drop-shadow-xl
                             hover:bg-light-gray text-white' 
                             style={{ background: '#FF7A00', borderRadius: '50%' }}>
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                </div>
                {activeMenu ? (
                  <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                    <SideBare />
                  </div>
                ) : (
                    <div className='w-0 dark:bg-secondary-dark-bg'>
                    <SideBare />
                    </div>
                )}
                    <div className={
                        `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`
                    }>
                        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                            <NavBar />
                        </div> 
                    </div>

                    <div>
                        <Routes>
                            <Route path='/' element={Home}/>
                            <Route path='/Home' element={Home}/>
                            <Route path='/Promotion' element={Promotion}/>
                            <Route path='/Apprenants' element={apprenants}/>
                            <Route path='/Brief' element={Brief}/>
                        </Routes>
                    </div>
            </div>
        </BrowserRouter> */}

    </div>
  )
}

export default App