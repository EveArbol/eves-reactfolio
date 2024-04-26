/* eslint-disable no-unused-vars */

import './App.css'
import AboutMeSection from './components/AboutMeSection';
import Header from './components/Header';
import ProjectsSection from './components/ProyectsSection';
import React from 'react'
import Footer from './components/Footer';

function App() {
  

  return (
    <>
      <Header />
      <main>
        <AboutMeSection />
        <ProjectsSection />
      </main>
      <footer>
        <Footer />
      </footer>
      </>
  );
}


export default App
