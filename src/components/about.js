import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './about.css'


export default class About extends Component {
  constructor(props){
    super(props)
    this.state = {
    anchors:['page1']
  }}
  render () {
    return (
      <ScrollableAnchor >
      <section id={'section2'}>
      <div className="about">
        <div className="columns">
          <div className="column">
            <a className="icon ion-md-arrow-dropup-circle" href="#section1">Up</a>
          </div>
        </div>
        <div className="columns">
          <div className="column">
          <h1 className = "title1"> Lets work together!</h1>
            <p className="intro1">I create responsive, semantic and accessible Single Page Applications. Although I can work with other libraries, frameworks and languages, I specialize within JavaScript and React. I am very passionate about development and can adapt quickly to new challenges
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column ">
            <table className="tble">
              <thead className="head" id="pls">
              <tr>
              <th> Frontend/Backend Ux Development</th>
              </tr>
              </thead>
                <tbody>
                    <tr className="rows">React</tr>
                    <tr className="rows">JS, Html, CSS, NodeJS</tr>
                    <tr className="rows">CSS frameworks(BootStrap,Bulma,Material,etc.)</tr>
                    <tr className="rows">Git, Github, team project websites</tr>
                    <tr className="rows">Adobe Photoshop and other editing softwares </tr>
                    <tr className="rows">Fluent in German</tr>
                </tbody>
              </table>
          </div>
          <div className="column ">
          <p className="bottominfo">I am a self-driven, hardworking individual who fell in love with coding during my internship with Bosch. That’s when I decided to become an Object-Oriented Programmer. I started teaching myself web-development over a year ago and with the help of Bloc Dev. Bootcamp I have learned the tools to become a frontend and backend developer. I specialize in building React SPA’s from scratch and can quickly adapt to new frameworks. I look forward for the new challenges I will face in the future because that’s what being a programmer is all about.</p>
                </div>
              </div>
              <footer className="foot">
              <a className="icon ion-md-arrow-dropdown-circle" href="#section3">Down</a>
              </footer>
      </div>
      </section>
      </ScrollableAnchor >


)}}
