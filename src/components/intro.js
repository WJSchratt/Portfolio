import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ".././components/intro.css";
import complogo from '.././images/IMG_0268.jpeg';
import linkedin from ".././images/LinkedIn-Blue-14-┬«@2x.png";
import git from ".././images/GitHub-Logo.png";


export default class Intro extends Component {
  render () {
    return (
    <div className="intro">
    <section id={'section1'}>
    <div className="columns">
      <div className="column">
        <div className="walt">
          <h1 className="main"> Hey there, I am Walter John Schratt</h1>
          <p className="short"> a Frontend Developer that is passionate about Solving Issues, Creating and Designing Responsive and Modern Web-Applications </p>
        </div>
      </div>
    </div>
      <div className="columns">
        <div className="column">
        <footer className="foot">
            <AnchorLink href='#section3'><a className="icon ion-md-arrow-dropdown-circle">Down</a></AnchorLink>
        </footer>
        </div>
        </div>
        </section>
        </div>







    )}}
