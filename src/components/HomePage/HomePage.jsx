import React from "react";
import styles from "./HomePage.module.css";
import { animated } from "react-spring";

import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { ProjectCard, SkillsCard } from "../../components/Card";
import { Grid, TextareaAutosize } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import ReactTypingEffect from "react-typing-effect";

// SVG OBJECTS
import yellowtriangle from "../../images/yellowtriangle.svg";
import greytriangle from "../../images/greytriangle.svg";
import greycross from "../../images/greycross.svg";
import rightArrow from "../../images/next.svg";
import leftArrow from "../../images/back.svg";
import model from "../../images/model.svg";
import square from "../../images/square.svg";
import closegrey from "../../images/closegrey.svg";
import closeblue from "../../images/closeblue.svg";
import ring from "../../images/ring.svg";
import code from "../../images/code.svg";
import circle from "../../images/circle.svg";
import user from "../../images/user.svg";
import fork from "../../images/fork.svg";
import cloud from "../../images/cloud.svg";
import mobiledev from "../../images/mobiledev.svg";
import webdev from "../../images/webdev.svg";
import tools from "../../images/tools.svg";
import BackgroundSVG from "../BackgroundSVG/BackgroundSVG";
import { useTopdown } from "../../hooks/useTopdown";
import { useBottomup } from "../../hooks/useBottomup";
import manlaptop from "../../images/manlaptop.png";

const pesSocialImages = [
  { src: require("../../images/pessocial1.png") },
  { src: require("../../images/pessocial2.png") },
  { src: require("../../images/pessocial3.png") },
];

const weatherImages = [
  { src: require("../../images/weather1.png") },
  { src: require("../../images/weather2.png") },
];

const messImages = [
  { src: require("../../images/mess1.png") },
  { src: require("../../images/mess2.png") },
  { src: require("../../images/mess3.png") },
  { src: require("../../images/mess4.png") },
  { src: require("../../images/mess5.png") },
];

const covidImages = [
  { src: require("../../images/covid1.png") },
  { src: require("../../images/covid2.png") },
];

function HomePage() {
  return (
    <>
      <div className={styles.landingpage}>
        <div className={styles.animatedbg}>
          <animated.img
            src={yellowtriangle}
            style={{
              width: "8vw",
              position: "absolute",
              top: "10%",
              right: "10%",
            }}
          />
          <animated.img
            style={{
              ...useTopdown(3000, "25vh"),
              position: "absolute",
              top: "110%",
              right: "40%",
              width: "45px",
            }}
            src={circle}
            alt="triangle"
          />
          <animated.img
            style={{
              ...useTopdown(100, "5%"),
              position: "absolute",
              top: "60%",
              left: "60%",
              width: "40px",
            }}
            src={greytriangle}
            alt="triangle"
          />
          <animated.img
            style={{
              ...useTopdown(0, "10vh"),
              position: "absolute",
              top: "20%",
              left: "70%",
              width: "40px",
            }}
            src={greytriangle}
            alt="triangle"
          />
          <animated.img
            style={{
              ...useTopdown(700, "30vh"),
              position: "absolute",
              top: "5%",
              left: "60%",
              width: "45px",
            }}
            src={closegrey}
            alt="close"
          />
          <animated.img
            style={{
              ...useBottomup(700, "30vh"),
              position: "absolute",
              top: "175%",
              right: "40%",
              width: "30px",
            }}
            src={closegrey}
            alt="close"
          />
          <animated.img
            style={{
              position: "absolute",
              top: "115%",
              left: "20%",
              width: "5vw",
            }}
            src={closegrey}
            alt="close"
          />
          <animated.img
            style={{
              position: "absolute",
              top: "70%",
              right: "15%",
              width: "7vw",
            }}
            src={ring}
            alt="cross"
          />
          <img
            style={{
              position: "absolute",
              top: "190%",
              left: "10%",
              width: "60px",
            }}
            src={user}
            alt="user"
          />
        </div>
        <div className={styles.navContainer} />
        <div className={styles.firstContainer}>
          <div className={styles.introimg}>
            <img alt="man" src={manlaptop} className={styles.manlaptopimg} />
          </div>
          <div className={styles.intro}>
            <div>
              <Fade delay={200} bottom>
                <Typography variant="h4" className={styles.tagline}>
                  Hi , I'm
                </Typography>
              </Fade>
              <Slide right delay={400}>
                <Typography variant="h1" className={styles.name}>
                  Akshat Khandelwal
                </Typography>
              </Slide>
              <Fade bottom delay={1200}>
                <Typography className={styles.tagline} variant="h4">
                  A quick Learner, A creative thinker
                </Typography>
              </Fade>
            </div>
          </div>
        </div>

        <div className={styles.introContainer}></div>
      </div>
      <div className={styles.projectsContainer}>
        <div className={styles.projectsHeading}>
          <Bounce left>
            <Typography variant="h2">Projects</Typography>
          </Bounce>
        </div>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          spacing={2}
          className={styles.projectsGrid}
        >
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <ProjectCard
              title="PesSocial"
              desc="A fully secure social networking website with a robust UI and reliable backend."
              link="https://pessocial-a007f.firebaseapp.com"
              images={pesSocialImages}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <ProjectCard
              title="Mess Timetable"
              desc="A simple, to the point app to check mess meals being served in the hostel."
              link="https://play.google.com/store/apps/details?id=com.akshatk.messtimetable"
              images={messImages}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <ProjectCard
              title="Covid-19 tracker"
              desc="A web app to check the current stats for covid-19 pandemic."
              link="https://elegant-ramanujan-197a5e.netlify.app/"
              images={covidImages}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <ProjectCard
              title="Weather PWA "
              desc="A progressive web app to check the current weather in searched area."
              link="https://inspiring-kirch-28370d.netlify.app/"
              images={weatherImages}
            />
          </Grid>
        </Grid>
      </div>
      <div className={styles.skillsContainer}>
        <div className={styles.skillsHeading}>
          <Bounce left>
            <Typography variant="h2">Skills</Typography>
          </Bounce>
        </div>
        <Grid
          container
          direction="row"
          alignItems="stretch"
          spacing={0}
          className={styles.skillsGrid}
        >
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <SkillsCard
              img={mobiledev}
              desc="Mobile App Development"
              details="Java , Android Studio, React Native"
              i={0}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <SkillsCard
              img={webdev}
              desc="Web Development"
              details="HTML5, CSS3, React"
              i={1}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <SkillsCard
              img={tools}
              desc="Tools and Utilities"
              details="Redux, Firebase, GCP functions, Firebase, Postman"
              i={2}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default HomePage;
