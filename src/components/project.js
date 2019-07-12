import React, { Component } from 'react';
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import "./project.css";
import jams from ".././images/Screen Shot 2019-05-22 at 10.31.58 AM 2.png";
import chat from ".././images/Screen Shot 2019-07-12 at 3.29.15 PM 2.png";
import todo from ".././images/Screen Shot 2019-05-09 at 2.46.39 PM 2.png";
import wed from ".././images/wedding-pproj.png";


export default class Projects extends Component {
  constructor(props){
    super(props)
  }
  render () {

    return (

         <section id={'section3'}>
           <div className="arrow">
            <AnchorLink href='#section2'>  <a className="icon ion-md-arrow-dropup-circle" href="#section2">Up</a></ AnchorLink> 
           </div>
           <div className="body">
             <div className="columns">
                 <div className="column">
                     <h1> Music Player App </h1>
                       <p> A music player SPA that was built through create-react-app from scratch. Completly responsive and fast</p>
                       <a href="https://jams-react.netlify.com"><img className="jams" src={ jams }/></a>
                   </div>
                   <div className="column">
                     <h1> Chat-App </h1>
                       <p> A chatt SPA that uses firbase as the dataBase to create messages and users. Still in development stage. </p>
                       <a href="https://chatt-app.netlify.com"> <img className="chat" src={ chat }/> </a>
                   </div>
                   <div className="column">
                     <h1> Client-Website </h1>
                       <p className="space"> A prototype example of a responsive SPA built for a client</p>
                       <a href="https://beas-wed.netlify.com/"> <img className="chat" src={ wed }/></a>
                   </div>
                   <div className="column">
                     <h1> To-do-List </h1>
                       <p className="space"> A Simple React-Site that is still in progress </p>
                       <a href="https://to-do-react.netlify.com"> <img className="chat" src={ todo }/></a>
                   </div>
             </div>
           <footer>
           This is a moblie friendly react-app made from scratch
           </footer>
           </div>
         </section>

)
}
}
