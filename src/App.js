import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from 'react-bulma-components';
import  Nav  from "./components/nav.js";
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import  Intro  from "./components/intro.js";
import mountains from "./images/01.jpg";
import About from "./components/about.js";
import sky from "./images/beach-foam-iphone-wallpaper-533923.jpg";

function App() {
  return (
    <div className="App">
    <Fullpage>

       <FullPageSections>

         <FullpageSection style={{
           backgroundImage: `url(${mountains})`,
           height: '100vh',
           padding: '1em',
         }}><Nav/><Intro/></FullpageSection>
         <FullpageSection style={{
             backgroundImage: `url(${sky})`,
           padding: '1em',
         }}><About/></FullpageSection>
         <FullpageSection style={{
           backgroundColor: 'firebrick',
           padding: '1em',
         }}>3</FullpageSection>

       </FullPageSections>

     </Fullpage>
    </div>
  );
}

export default App;
