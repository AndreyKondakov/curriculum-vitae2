import React, {Component} from "react";
import './Resume.scss';
import portret from './portret.jpg'
class Resume extends Component {

  render() {
    return (
      <section className="resume-section section" >
        <div className='info'>
        <div className="about">
          <h3>ABOUT MYSELF:</h3>
          <p>My full name Andrey Kondakov. I am an engineer, have higher technical education. Now on
          the second year of postgraduate studies. I want to start a
          career in Front-end developer.</p>
          <p>Date of birth: December 14, 1993 (25 years)</p>
        </div>
        <div className="work">
          <h3>WORK IN PROJECTS:</h3>
          <ul>
            <li> Haltron Group: (RoR, Front-end of the whole project)</li>
            <li> PureProtein: (Work on the Front-end)</li>
            <li> WaySport: (front-end correction)</li>
            <li> Royal-Rangers (JS Dev)</li>
          </ul>
        </div>
        <div className="qualities">
          <h3>PERSONAL QUALITIES:</h3>
          <ul>
            <li>The desire to learn</li>
            <li>Responsibility</li>
            <li>Politeness</li>
            <li>I work well in a team</li>
          </ul>
        </div>
        </div>
        <div>
          <img src={portret} alt='Myphoto' width="426px" height="640px" />
        </div>
      </section>
    );
  }
}

export default Resume;