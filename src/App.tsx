import React from 'react';
import './App.scss';

import Header from './components/Header/Header';
import LiveWorkTogether from './components/LiveWorkTogether/LiveWorkTogether';
import SectionOne from './components/SectionOne/SectionOne';
import SectionThree from './components/SectionThree/SectionThree';
import SectionTwo from './components/SectionTwo/SectionTwo';
import SeperationBar from './components/SeperationBar/SeperationBar';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SeperationBar />
        <SectionOne />
        <LiveWorkTogether />
        <SectionTwo />
        <SectionThree />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
