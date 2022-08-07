import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import SectionOne from './components/SectionOne/SectionOne';
import SeperationBar from './components/SeperationBar/SeperationBar';


function App() {
  return (
    <div className="App">
      <Header />
      <SeperationBar />
      <SectionOne />
    </div>
  );
}

export default App;
