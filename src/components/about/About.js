import React, { Component } from "react";
import classes from "./About.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

class About extends Component {
  render() {
    return (
      <div className={classes.box} id="about">
        <ScrollAnimation
          offset="0"
          animateIn="fadeInLeft"
          duration="2.4"
          animateOnce="true"
          initiallyVisible={true}
        >
          <span className={classes.head}>À PROPOS</span>
          <h2 className={classes.heading}>QUI EST FERES BEN SASSI ?</h2>
          <div className={classes.About}>
            <p>
              {" "}
              Je m'appel Féres Ben Sassi , un développeur fullstack web et
              mobile de Nabeul en Tunisie. Actuellement un développeur MERN
              Stack chez RMG agency.
            </p>
            <p className={classes.br}>
              Je suis doué par les frameworks de JavaScript ainsi que Flutter &
              React Native pour le développement mobile Cross-plateformes.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default About;
