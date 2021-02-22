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
                <h3>Club Africain Volley Ball section </h3>
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
                <h3>Club Africain Volley Ball section </h3>
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
                <h3>Club Africain Volley Ball section </h3>
                <p>
                  Création d'un site web pour la section volleyball de club
                  africain
                  <br />
                  en utilisant Reactjs , Nodejs , Expressjs , MongoDB , HTML5 ,
                  CSS3 , Bootstrap4
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
