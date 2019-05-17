import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import ".././components/nav.css";
import complogo from '.././images/IMG_0268.jpeg';
import linkedin from ".././images/LinkedIn-Blue-14-┬«@2x.png";
import git from ".././images/GitHub-Logo.png";


export default class Nav extends Component {
  render () {
    return (
      <div className="Nav">
        <nav class="navbar is-fixed-top " role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
          </div>
        <div id="navbarBasicExample is-size-6" class="navbar-menu">
          <div class="navbar-start">
            <a className="navbar-item is-size-3" id="home" href="#section1">Home</a>
            <a className="navbar-item is-size-3" id="about"href="#section2">About me</a>
            <a className="navbar-item is-size-3"  id="projects"href='#section3'> Projects </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a id="more" class="navbar-link is-size-3">
              More
            </a>
        <div id="clear" class="navbar-dropdown">
          <a id="clear" class="navbar-item">
            GitHub
          </a>
          <a id="clear" class="navbar-item">
            Linked-In
          </a>
          <hr id="clear" class="navbar-divider"/>
          <a  id="clear" class="navbar-item">
            Contact
          </a>
          </div>
        </div>
      </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>GitHub</strong>
                </a>
                <a class="button is-light">
                  Linked in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>

)
}}
