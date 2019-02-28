import React, {Component} from "react";
import './Skills.scss';

class Contacts extends Component {



  render() {
    return (
      <section className="professional-skills-section section" id="professional-skills-section">
        <div className="skills-img">
          <i className="fas fa-code"></i>
          <i className="fab fa-css3-alt"></i>
        </div>

        <div className="skills-block">
          <ul className="skills">
            <li> HTML</li>
            <li> CSS</li>
            <li> JavaScript</li>
            <li> Ruby (basic)</li>
            <li>Ruby on Rails (basic)</li>
            <li>SASS</li>
            <li>Bootstrap</li>
            <li>JQuery</li>
            <li>Gulp</li>
            <li>WebPack</li>
            <li><i className="fab fa-github"></i> Git</li>
            <li> Team work experience</li>
          </ul>
          <i className="fas fa-users users-img"></i>
        </div>
        <div className="skills-img">
          <i className="fab fa-js"></i>
          <i className="fas fa-gem"></i>
        </div>

      </section>
    );
  }
}

export default Contacts;