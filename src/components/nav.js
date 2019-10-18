import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import ".././components/nav.css";
import git from ".././images/GitHub-Logo.png";
import { goToAnchor } from 'react-scrollable-anchor';
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default class Nav extends Component {


  render () {
    return (
      <div className="Nav">
        <nav className="navbar is-fixed-top " role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
          </div>
        <div id="navbarBasicExample is-size-6" className="navbar-menu">
          <div className="navbar-start">
            <AnchorLink href='#section2' className="navbar-item is-size-3" id="about">About me</AnchorLink>
          
          <div className="navbar-item has-dropdown is-hoverable">
            <a id="more" href="#" className="navbar-link is-size-3">
              More
            </a>
        <div id="clear" className="navbar-dropdown">
          <a id="clear" href="https://github.com/WJSchratt" className="navbar-item">
            GitHub
          </a>
          <a id="clear" href="https://www.linkedin.com/in/walter-schratt-876202177/" className="navbar-item">
            Linked-In
          </a>
          <hr id="clear" className="navbar-divider"/>
          <a href="mailto:john.schratt1@gmail.com"  id="clear" className="navbar-item">
            Contact
          </a>
          </div>
        </div>
      </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a  href="https://github.com/WJSchratt" className="button is-primary">
                  <strong>GitHub</strong>
                </a>
                <a  href="https://www.linkedin.com/in/walter-schratt-876202177/" className="button is-light">
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
