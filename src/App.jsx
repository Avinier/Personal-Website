/*TODO:
 - email mechanism
 - skilldata from a database
 - database making
 - storing assets in db
 - MongoDB Cluster Password- fTNzi1BR4YM4V4Lk
 - final touches
 - finished!
*/

import { useState } from 'react';
import { useRef } from 'react';
import './App.css';
import Connect from './components/Connect.js';
import Hero from './components/Hero.js';
import Navbar from './components/Navbar.js';
import Project from './components/Projects/Projects.js';
import Skills from './components/Skills/Skills.js';
import Toggler from './components/UI/Toggler.js';

function App() {
  const scrollRef = useRef(null)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`App ${!darkMode && `dark`}`}>
      <div className='bg-main dark:bg-main--light ' ref={scrollRef}>
        <Navbar scrollRef={scrollRef} isDark={darkMode}/>
        <Toggler clickHandler={() => { setDarkMode(!darkMode) }} isDark={darkMode} />
        <div className='sect pt-[50px] max-[768px]:pt-[30px]'>
          <Hero isDark={darkMode}/>
        </div>
        <div className='sect pt-[100px] max-[768px]:pt-[8rem]'>
          <Skills />
        </div>
        <div className='sect pt-[100px] max-[768px]:pt-[8rem]'>
          <Project isDark={darkMode}/>
        </div>
        <div className='sect pt-[100px] max-[768px]:pt-[8rem]'>
          <Connect />
        </div>
      </div>
    </div>
  );
}

export default App;
