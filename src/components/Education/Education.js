import React, { Component } from "react";
import classes from "./Education.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import { MdSchool } from "react-icons/md";
import { MdWork } from "react-icons/md";
// import { FaSchool } from "react-icons/fa";

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id="education">
        <ScrollAnimation
          offset="0"
          animateIn="fadeInLeft"
          duration="2"
          animateOnce="true"
          initiallyVisible={true}
        >
          <span className={classes.head}>EDUCATION</span>
          <section className={classes.container}>
            <div className={classes.container_content}>
              <div className={classes.row}>
                <div className={classes.row_md_12}>
                  <div className={classes.timeline_centered}>
                    <ScrollAnimation
                      offset="0"
                      animateIn="fadeInLeft"
                      duration="2.4"
                      animateOnce="true"
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={classes.timeline_icon}>
                          <MdSchool />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Parcours universitaire <span>2018-2020</span>
                          </h2>
                          <p>
                            Licence appliqué en Développement des Systèmes
                            d'Information , validation de soutenance avec
                            mention Bien.
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>

                    <ScrollAnimation
                      offset="0"
                      animateIn="fadeInLeft"
                      duration="2.4"
                      animateOnce="true"
                      initiallyVisible={true}
                    >
                      <article>
                        <div
                          className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}
                        >
                          <MdWork />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Parcours secondaire <span>2014-2017</span>
                          </h2>
                          <p>
                            Choisir la section "Science Informatique" en 2015.
                            <br /> Admis en Bac 2017 session principal avec
                            mention passable
                          </p>
                        </div>
                        <div className={classes.timeline_entry_inner}>
                          <div
                            className={
                              classes.timeline_icon_3 || classes.color_none
                            }
                          ></div>
                        </div>
                      </article>
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Education;
