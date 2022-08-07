import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import LiveWorkTogether from './components/LiveWorkTogether/LiveWorkTogether';
import SectionOne from './components/SectionOne/SectionOne';
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
      </main>
    </div>
  );
}

export default App;
