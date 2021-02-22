import React, { Component } from "react";
import classes from "./Interest.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

class Interest extends Component {
  render() {
    return (
      <div className={classes.box} id="interest">
        <ScrollAnimation
          offset="0"
          animateIn="fadeInLeft"
          duration="2.4"
          animateOnce="true"
          initiallyVisible={true}
        >
          <span className={classes.head}>QUE Ce JE FAIS?</span>
          <h2 className={classes.heading}>VOICI QUELQUES DE MON EXPERTISE</h2>
          <div className={classes.Interest}>
            <ScrollAnimation
              offset="0"
              animateIn="fadeInLeft"
              duration="2.4"
              animateOnce="true"
              initiallyVisible={true}
            >
              <div className={classes.web}>
                <h3>Club Africain section Volley Ball </h3>
                <p>
                  Création d'un site web pour la section volleyball de club
                  africain
                  <br />
                  en utilisant Reactjs , Nodejs , Expressjs , MongoDB , HTML5 ,
                  CSS3 , Bootstrap4
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              offset="0"
              animateIn="fadeInLeft"
              duration="2.4"
              animateOnce="true"
              initiallyVisible={true}
            >
              <div className={classes.web}>
                <h3>Best Price </h3>
                <p>
                  Création d'un site web et d'une application mobile ,
                  comparateur de prix
                  <br />
                  en utilisant Flutter , Reactjs , Nodejs , Expressjs , MongoDB
                  , HTML5 , CSS3 , Bootstrap4
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              offset="0"
              animateIn="fadeInLeft"
              duration="2.4"
              animateOnce="true"
              initiallyVisible={true}
            >
              <div className={classes.web}>
                <h3>Kouka Travel Event</h3>
                <p>
                  Création d'un site web d'une agence de voyage
                  <br />
                  en utilisant JavaScript , HTML5 , CSS3 , Bootstrap4
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Interest;
