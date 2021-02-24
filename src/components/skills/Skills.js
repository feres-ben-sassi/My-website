import React, { Component } from "react";
import classes from "./Interest.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
// import SkillBar from "react-skillbars";
class Skills extends Component {
  render() {
    // const skills = [
    //   { type: "Java", level: 85 },
    //   { type: "Javascript", level: 75 },
    // ];
    return (
      <div className={classes.box} id="skills">
        <ScrollAnimation
          offset="0"
          animateIn="fadeInLeft"
          duration="2.4"
          animateOnce="true"
          initiallyVisible={true}
        >
          <span className={classes.head}>Que ce je maîtrise?</span>
          <h2 className={classes.heading}>
            VOICI les technologies et frameworks que je préfère
          </h2>
          <div className={classes.Interest}></div>
        </ScrollAnimation>
        {/* <SkillBar skills={skills} /> */}
      </div>
    );
  }
}

export default Skills;
