import React, { Component } from "react";
import classes from "./Interest.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import SkillBar from "react-skillbars";
class Skills extends Component {
  render() {
    const skills = [
      { type: "HTML5", level: 90 },
      { type: "CSS3", level: 75 },
      { type: "Bootstrap4", level: 80 },
      { type: "Node js (express)", level: 85 },
      { type: "PHP5", level: 70 },
      { type: "React js", level: 80 },
      { type: "MongoDB", level: 80 },
      { type: "MySQL", level: 85 },
      { type: "Flutter", level: 65 },
      { type: "React Native", level: 60 },
      { type: "Android", level: 55 },
      { type: "WordPress", level: 70 },
      { type: "Git", level: 85 },
      { type: "Heroku", level: 85 },
    ];
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
        <SkillBar skills={skills} />
      </div>
    );
  }
}

export default Skills;
