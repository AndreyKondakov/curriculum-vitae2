import React, {Component} from "react";
import './Home.scss';


class Home extends Component {

  // constructor(props) {
  //   super(props);
    // this.tp2p = React.createRef();
  // }

  // componentDidMount() {
  //   this.context = this.tp2p.current.getContext('2d');
  // }

  render() {
    // var ms =  this.tp2p;
    // var tp = this.context;
    // ms.height = window.innerHeight;
    // ms.width = window.innerWidth;
    // var tp2p = "TEMPLATEP2P";
    // tp2p = tp2p.split("");
    // var font_size = 10;
    // var columns = ms.width / font_size;
    // var drops = [];
    // for (var x = 0; x < columns; x++)
    //   drops[x] = 1;
    //
    // function draw() {
    //   tp.fillStyle = "rgba(0, 0, 0, 0.05)";
    //   tp.fillRect(0, 0, ms.width, ms.height);
    //   tp.fillStyle = "#686160";
    //   tp.font = font_size + "px arial";
    //   for (var i = 0; i < drops.length; i++) {
    //     var text = tp2p[Math.floor(Math.random() * tp2p.length)];
    //     tp.fillText(text, i * font_size, drops[i] * font_size);
    //     if (drops[i] * font_size > ms.height && Math.random() > 0.975)
    //       drops[i] = 0;
    //     drops[i]++;
    //   }
    // }
    //
    // setInterval(draw, 47);

    return (
      <section className="about-me-section section" id="about-me-section">
        <div className="university">
          <ul className='img-list'>
            <li><i className="fas fa-atom"></i></li>
            <li><i className="fas fa-book"></i></li>
            <li><i className="fas fa-calculator"></i></li>
            <li><i className="fas fa-university"></i></li>
            <li><i className="fab fa-windows"></i></li>
          </ul>
          <p>2009 - 2013 Specialty: "Maintenance of machine tools with software control and
            systems" Qualification: electro mechanics, CPT (junior specialist)</p>
          <p>2013 - 2016 Faculty of Computer Technologies of Mechanical Engineering and
            Design. Qualification: engineer-designer, CSTU, (bachelor, specialist) diploma with
            honors.</p>
          <p>2017 - till now Ph.D., CSTU.</p>
          <i className="fas fa-frown smile"></i>
        </div>
        <div className="web">
          <ul className="img-list">
            <li><i className="fas fa-laptop"></i></li>
            <li><i className="fas fa-wifi"></i></li>
            <li><i className="fas fa-globe"></i></li>
            <li><i className="fab fa-chrome"></i></li>
            <li><i className="fab fa-ubuntu"></i></li>
          </ul>
          <p>Self learning web development :</p>
          <ol className="learning">
            <li>YouTube</li>
            <li>htmlbook.ru</li>
            <li>rusrails.ru</li>
            <li>learn.javascript.ru</li>
            <li>habr.com</li>
            <li>dou.ua</li>
          </ol>
          <p>2018 – till now GeekHub – JavaScript (8 th season)</p>
          <i className="fas fa-smile-beam smile"></i>
        </div>
        <canvas id="tp2p" ref={this.tp2p} ></canvas>
      </section>
    );
  }
}

export default Home;