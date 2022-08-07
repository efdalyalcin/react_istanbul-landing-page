import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import LiveWorkTogether from './components/LiveWorkTogether/LiveWorkTogether';
import SectionOne from './components/SectionOne/SectionOne';
import SectionThree from './components/SectionThree/SectionThree';
import SectionTwo from './components/SectionTwo/SectionTwo';
import SeperationBar from './components/SeperationBar/SeperationBar';


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
      </main>
      <div className="App-bosluk"></div>
      {/* dont forget to remove bosluk from app.scss 
        make the map clickable and sent it to googlemaps
      */}
    </div>
  );
}

export default App;
