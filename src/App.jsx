/*TODO:
 - fix link bug
 - logo color picking
 - skilldata from a database
 - reusable animations
 - sexy navbar
 - logo/assets from stablediffusion
 - database making
 - storing assets in db
 - sexy grid
 - email functionality
 - MongoDB Cluster Password- fTNzi1BR4YM4V4Lk
*/

import { useEffect, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Project from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  const scrollRef = useRef(null)

  // useEffect(() => {
  //   const divNode = scrollRef.current;

  //     const elementNode = divNode.querySelectorAll('li')[1];
  //     console.log(elementNode)
  // },[])
 
  function scrollToIndex(index) {
    if (scrollRef.current) {
      const divNode = scrollRef.current;

      const elementNode = divNode.querySelectorAll('.sect')[index];
      console.log(elementNode)
      elementNode.scrollIntoView({behavior: 'smooth'});
    }
  }

  return (
    <div className="App bg-main px-[3%]">
      <Navbar scrollHandler={scrollToIndex(1)}/>
      <div className='Body' ref={scrollRef}>
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
