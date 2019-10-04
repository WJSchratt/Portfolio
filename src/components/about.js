import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './about.css'


export default class About extends Component {
  constructor(props){
    super(props)
    this.state = {
    anchors:['page1']
  }}

  render () {
    return (
      <section id={'section2'}>
      <div className="about">
        <div className="columns">
          <div className="column">
            <AnchorLink href='#section1'> <a className="icon ion-md-arrow-dropup-circle">Up</a></AnchorLink>
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
                    <tr className="rows">React,SPA,OOP</tr>
                    <tr className="rows">JS, Html, CSS, NodeJS, Elementary Java</tr>
                    <tr className="rows">CSS frameworks(BootStrap,Bulma,Material,etc.)</tr>
                    <tr className="rows">Git, Github, Team Project Websites</tr>
                    <tr className="rows">Webpack,Client-Side Preferred Programming</tr>
                    <tr className="rows">Adobe Photoshop and other editing softwares </tr>
                    <tr className="rows">Fluent in German</tr>
                </tbody>
              </table>
          </div>

              </div>
              <footer className="foot">
              <AnchorLink href='#section3'><a className="icon ion-md-arrow-dropdown-circle">Down</a></AnchorLink>
              </footer>
      </div>
      </section>



)}}
