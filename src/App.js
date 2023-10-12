import {HashRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import React from 'react';
import Header from './Header';
import About from './About';
import Resume from './Resume';
import Experience from  './Experience';
import Work from './Work';
import Contact from './Contact';
import Aside from './Aside';

function App() {
  return (
    <>
    <div className='main_page'>
    <div className='container box'>
    <Router>
      <Header/>
      <div className='row main_content'>
        <aside className='col-12 col-md-12 col-lg-2 left_contentbox'> 
        <Aside/>
        </aside>
        <div className='col-12 col-md-12 col-lg-10'> 
          <Routes>
            <Route path='/' element={< About/>}/>
            <Route index element={<About/>}/>
            <Route path='/Resume' element={< Resume/>}/>
            <Route path='/Experience' element={< Experience/>}/>
            <Route path='/Work' element={< Work/>}/>
            <Route path='/Contact' element={< Contact/>}/>
          </Routes>
          </div>
        </div>
    </Router>
    
    </div>
    </div>
    </>
  );
}

export default App;