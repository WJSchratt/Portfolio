import React from 'react';

import './App.css';
import { Navbar } from 'react-bulma-components';
import  Nav  from "./components/nav.js";
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import  Intro  from "./components/intro.js";
import mountains from "./images/01.jpg";
import About from "./components/about.js";
import sky from "./images/beach-foam-iphone-wallpaper-533923.jpg";
import Project from "./components/project.js";
import forest from "./images/bird-s-eye-view-forest-green-113338.jpg";

function App() {
  return (
    <div className="App">
    <Fullpage>

       <FullPageSections>

         <FullpageSection style={{
           backgroundImage: `url(${mountains})`,
           backgroundColor:'white',
           height: '100vh',
           padding: '1em',
         }}><Nav/><Intro/></FullpageSection>
         <FullpageSection style={{
             backgroundImage: `url(${sky})`,
             height: '100vh',
           padding: '1em',
         }}><About/></FullpageSection>
         <FullpageSection style={{
           backgroundImage: `url(${forest})`,
           height: '100vh',
           padding: '1em',
         }}><Project/>
         </FullpageSection>

       </FullPageSections>

     </Fullpage>
    </div>
  );
}

export default App;
