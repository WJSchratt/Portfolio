import React, { Component } from 'react';
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import ScrollableAnchor from 'react-scrollable-anchor';
import "./project.css";
import jams from ".././images/Screen Shot 2019-05-09 at 2.17.11 PM.png";
import chat from ".././images/Screen Shot 2019-05-15 at 5.16.43 PM 2.png";
import todo from ".././images/Screen Shot 2019-05-09 at 2.46.39 PM 2.png";

export default class Projects extends Component {
  constructor(props){
    super(props)
  }
  render () {
    return (
      <ScrollableAnchor >
         <section id={'section3'}>
           <div className="arrow">
             <a className="icon ion-md-arrow-dropup-circle" href="#section2">Up</a>
           </div>
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
                     <h1> To-do-List </h1>
                       <p> A Simple React-Site </p>
                       <a href="https://to-do-react.netlify.com"> <img className="chat" src={ todo }/></a>
                   </div>
             </div>
           <footer>
           <div className="row">
             <div className="col-sm">

             </div>
             </div>
           </footer>

         </section>
       </ScrollableAnchor>
)
}
}
