/*TODO:
 - logo color picking
 - skilldata from a database
 - sexy navbar
 - logo/assets from stablediffusion
 - database making
 - storing assets in db
 - sexy grid
 - zindex bug
 - email functionality
 - sound effect
 - MongoDB Cluster Password- fTNzi1BR4YM4V4Lk
 - finished!
*/

import { useEffect, useRef } from 'react';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Project from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Grid from './components/UI/Grid';

function App() {
  const scrollRef = useRef(null)

  // useEffect(() => {
  //   const divNode = scrollRef.current;

  //     const elementNode = divNode.querySelectorAll('li')[1];
  //     console.log(elementNode)
  // },[])
 
  return (
    <div className="App bg-main">
      <Navbar scrollRef={scrollRef}/>
      {/* <Grid /> */}
      <div className='Body' ref={scrollRef}>
        <div className='sect pt-[10rem] max-[768px]:pt-[80px]'>
          <Hero/>
        </div>
        <div className='sect pt-[10rem]'>
          <Skills />
        </div>
        <div className='sect pt-[10rem]'>
          <Project />
        </div>
      </div>
    </div>
  );
}

export default App;
