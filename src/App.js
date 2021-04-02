import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import { DisplayContextProvider } from './displayContext';
// import Footer from './Components/Footer';
// import ReactGA from 'react-ga';
// import $ from 'jquery';
// import Contact from './Components/Contact';
// import Testimonials from './Components/Testimonials';
// import Portfolio from './Components/Portfolio';


function App() {
  const [resumeData, setresumeData] = useState({});
 
  async function fetchData() {
    const response = await fetch('/resumeData.json');
    const jsonData = await response.json()

    setresumeData(jsonData);
    console.log('***JSON_LOG:***', resumeData);
  }

  useEffect(() => {
    fetchData()
  }, [])
 
  return (
    <DisplayContextProvider value={'none'}>
      <div className="App">
        <Header data={resumeData.main}/>
        <About data={resumeData.main}/>
        <Resume data={resumeData.resume}/>
        {/* <Portfolio data={resumeData.portfolio}/> */}
        {/* <Testimonials data={resumeData.testimonials}/> */}
        {/* <Contact data={resumeData.main}/> */}
        {/* <Footer data={resumeData.main}/> */}
      </div>
    </DisplayContextProvider>
  )

}

export default App;
