import React, { Component } from 'react';
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
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
      <div className="about">
        <div class="columns">
          <div class="column">
            <a className="icon ion-md-arrow-dropup-circle" href="#section1">Up</a>
          </div>
        </div>
        <div class="columns">
          <div class="column">
          <h1 className = "title1"> Lets work together!</h1>
            <p className="intro1">I create responsive, semantic and accessible Single Page Applications. Although I can work with other libraries, frameworks and languages, I specialize within JavaScript and React. I am very passionate about development and can adapt quickly to new challenges
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column is-two-thirds">
            <table className="tble">
              <thead className="head" id="pls">
              <th class="head" id="pls" > Frontend/Backend Ux Development</th>
              </thead>
                <tbody>
                  <ul classname="list-group">
                    <tr class="rows">React</tr>
                    <tr class="rows">JS, Html, CSS, NodeJS</tr>
                    <tr class="rows">CSS frameworks(BootStrap,Bulma,Material)</tr>
                    <tr class="rows"> Git, Github, team project websites</tr>
                    <tr class="rows">Adobe Photoshop and other editing softwares </tr>
                    <tr class="rows">Fluent in German</tr>
                  </ul>
                </tbody>
              </table>
          </div>
            <div class="column">
            </div>
        </div>
      </div>

)}}
