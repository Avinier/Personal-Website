/*TODO:
 - logo color picking
 - skilldata from a database
 - logo/assets from stablediffusion
 - database making
 - storing assets in db
 - email functionality
 - scroll animations
 - MongoDB Cluster Password- fTNzi1BR4YM4V4Lk
 - final touches
 - finished!
*/

import { useState } from 'react';
import { useEffect, useRef } from 'react';
import './App.css';
import Connect from './components/Connect.js';
import Hero from './components/Hero.js';
import Navbar from './components/Navbar.js';
import Project from './components/Projects/Projects.js';
import Skills from './components/Skills/Skills.js';
import Toggler from './components/UI/Toggler.js';

function App() {
  const scrollRef = useRef(null)
  const [darkMode, setDarkMode] = useState(true)

  // useEffect(() => {
  //   const divNode = scrollRef.current;

  //     const elementNode = divNode.querySelectorAll('li')[1];
  //     console.log(elementNode)
  // },[])

  return (
    <div className={`App ${!darkMode && `dark`}`}>
      <div className='Body bg-main dark:bg-main--light' ref={scrollRef}>
        <Navbar scrollRef={scrollRef} />
        <Toggler clickHandler={() => { setDarkMode(!darkMode) }} />
        <div className='sect pt-[10rem] max-[768px]:pt-[80px]'>
          <Hero isDark={darkMode}/>
        </div>
        <div className='sect pt-[10rem]'>
          <Skills />
        </div>
        <div className='sect pt-[10rem]'>
          <Project />
        </div>
        <div className='sect py-[10rem]'>
          <Connect />
        </div>
      </div>
    </div>
  );
}

export default App;
