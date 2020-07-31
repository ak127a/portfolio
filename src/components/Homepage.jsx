import React from "react";

// COMPONENTS
import Typography from "@material-ui/core/Typography";
import { ProjectCard, SkillsCard } from "../components/Card";
import { Grid } from "@material-ui/core";

// REACT-SPRING AND HELPERS
import { Spring } from "react-spring/renderprops";
import { useSpring, animated } from "react-spring";
import { useTopdown } from "../hooks/useTopdown";
import { useBottomup } from "../hooks/useBottomup";
import VisibilitySensor from "react-visibility-sensor";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

// RESOURCES
import yellowtriangle from "../images/yellowtriangle.svg";
import greytriangle from "../images/greytriangle.svg";
import greycross from "../images/greycross.svg";
import rightArrow from "../images/next.svg";
import leftArrow from "../images/back.svg";
import model from "../images/model.svg";
import square from "../images/square.svg";
import closegrey from "../images/closegrey.svg";
import closeblue from "../images/closeblue.svg";
import ring from "../images/ring.svg";
import code from "../images/code.svg";
import circle from "../images/circle.svg";
import user from "../images/user.svg";
import fork from "../images/fork.svg";
import cloud from "../images/cloud.svg";
import mobiledev from "../images/mobiledev.svg";
import webdev from "../images/webdev.svg";
import tools from "../images/tools.svg";

// STYLES
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <div>
      <Parallax pages={4.5}>
        {/* !-----------FIRST PAGE------------! */}
        <ParallaxLayer className={styles.bg} offset={0} factor={5} />
        <ParallaxLayer offset={0.7} speed={0.7}>
          <animated.img
            style={useBottomup(0)}
            className={styles.ringTwo}
            src={ring}
            alt="ring"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.6} speed={0.7}>
          <img className={styles.rightArrow} src={rightArrow} alt="arrow" />
          <img className={styles.leftArrow} src={leftArrow} alt="arrow" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.65} speed={0.3}>
          <img className={styles.model} src={model} alt="model" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.2} speed={0.6}>
          <animated.img
            className={styles.yellowtriangle}
            style={useTopdown(1500, "15%")}
            src={yellowtriangle}
            alt="triangle"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.05} speed={0}>
          <animated.img
            style={{
              ...useTopdown(100, "5%"),
              position: "absolute",
              left: "40%",
              width: "40px",
            }}
            src={greytriangle}
            alt="triangle"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.8} speed={0}>
          <animated.img
            style={{
              ...useBottomup(100, "-25%"),
              position: "absolute",
              right: "35%",
              width: "40px",
            }}
            src={greytriangle}
            alt="triangle"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.2} speed={0}>
          <animated.img
            style={{
              ...useTopdown(1000, "25%"),
              position: "absolute",
              right: "15%",
              width: "35px",
            }}
            src={code}
            alt="triangle"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.2} speed={0}>
          <animated.img
            style={{
              ...useTopdown(1000, "25%"),
              position: "absolute",
              right: "40%",
              width: "45px",
            }}
            src={circle}
            alt="triangle"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.05} speed={0}>
          <animated.img
            style={{
              position: "absolute",
              left: "5%",
              width: "40px",
              opacity: "60%",
            }}
            src={square}
            alt="square"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={0.4}>
          <animated.img
            style={{
              ...useTopdown(2000, "20%"),
              position: "absolute",
              left: "5%",
              width: "40px",
              opacity: "60%",
            }}
            src={square}
            alt="square"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.15} speed={0.4}>
          <animated.img
            style={{
              position: "absolute",
              left: "20%",
              width: "50px",
              opacity: "60%",
            }}
            src={square}
            alt="triangle"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={0}>
          <animated.img
            className={styles.closegrey}
            style={useTopdown(700, "30%")}
            src={closegrey}
            alt="close"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.7} speed={0.5}>
          <animated.img
            className={styles.closeblue}
            style={{ position: "absolute", right: "20%", width: "100px" }}
            src={closeblue}
            alt="close"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={0.2}>
          <animated.img
            className={styles.ring}
            style={useTopdown(4000, "25%")}
            src={ring}
            alt="cross"
          />
        </ParallaxLayer>
        {/* !-----------SECOND PAGE------------! */}
        <ParallaxLayer offset={1.7} speed={0.7}>
          <animated.img
            style={useBottomup(0)}
            className={styles.ringTwo}
            src={ring}
            alt="ring"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.6} speed={0.7}>
          <img className={styles.rightArrow} src={rightArrow} alt="arrow" />
          <img className={styles.leftArrow} src={leftArrow} alt="arrow" />
        </ParallaxLayer>
        <ParallaxLayer offset={1.65} speed={0.3}>
          <img
            style={{ position: "absolute", left: "10%", width: "60px" }}
            src={user}
            alt="user"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.4} speed={0.2}>
          <animated.img
            className={styles.yellowtriangle}
            style={{
              position: "absolute",
              left: "50%",
              width: "50px",
              opacity: "60%",
            }}
            src={fork}
            alt="triangle"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.05} speed={0}>
          <animated.img
            style={{
              ...useTopdown(100, "5%"),
              position: "absolute",
              left: "40%",
              width: "40px",
            }}
            src={greytriangle}
            alt="triangle"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.8} speed={0.2}>
          <animated.img
            style={{
              ...useTopdown(100, "15%"),
              position: "absolute",
              right: "45%",
              width: "70px",
            }}
            src={cloud}
            alt="cloud"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.8} speed={0}>
          <animated.img
            style={{
              ...useBottomup(100, "-25%"),
              position: "absolute",
              right: "35%",
              width: "40px",
            }}
            src={greytriangle}
            alt="triangle"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.2} speed={0}>
          <animated.img
            style={{
              ...useTopdown(1000, "25%"),
              position: "absolute",
              right: "15%",
              width: "35px",
            }}
            src={code}
            alt="triangle"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.2} speed={0}>
          <animated.img
            style={{
              ...useTopdown(1000, "25%"),
              position: "absolute",
              right: "40%",
              width: "45px",
            }}
            src={circle}
            alt="triangle"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.05} speed={0}>
          <animated.img
            style={{
              position: "absolute",
              left: "5%",
              width: "40px",
              opacity: "60%",
            }}
            src={square}
            alt="square"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.5} speed={0.4}>
          <animated.img
            style={{
              ...useTopdown(2000, "20%"),
              position: "absolute",
              left: "5%",
              width: "40px",
              opacity: "60%",
            }}
            src={square}
            alt="square"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.15} speed={0.4}>
          <animated.img
            style={{
              position: "absolute",
              left: "20%",
              width: "50px",
              opacity: "60%",
            }}
            src={square}
            alt="triangle"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.1} speed={0}>
          <animated.img
            className={styles.closegrey}
            style={useTopdown(700, "30%")}
            src={closegrey}
            alt="close"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.7} speed={0.5}>
          <animated.img
            className={styles.closeblue}
            style={{ position: "absolute", right: "20%", width: "100px" }}
            src={closeblue}
            alt="close"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.1} speed={0.2}>
          <animated.img
            className={styles.ring}
            style={useTopdown(4000, "25%")}
            src={ring}
            alt="cross"
          />
        </ParallaxLayer>

        {/* !---------------THIRD PAGE-------------! */}
        <ParallaxLayer offset={3.2} speed={0}>
          <animated.img
            style={{
              ...useTopdown(1000, "25%"),
              position: "absolute",
              right: "40%",
              width: "45px",
            }}
            src={circle}
            alt="triangle"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={3.25} speed={0}>
          <animated.img
            style={{
              position: "absolute",
              left: "5%",
              width: "40px",
              opacity: "60%",
            }}
            src={square}
            alt="square"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={3.35} speed={0.4}>
          <animated.img
            style={{
              ...useTopdown(2000, "20%"),
              position: "absolute",
              left: "5%",
              width: "40px",
              opacity: "60%",
            }}
            src={square}
            alt="square"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2.85} speed={0}>
          <animated.img
            style={{
              position: "absolute",
              right: "35%",
              width: "40px",
              opacity: "60%",
            }}
            src={square}
            alt="square"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={3.05} speed={0.4}>
          <animated.img
            style={{
              ...useTopdown(2000, "20%"),
              position: "absolute",
              right: "15%",
              width: "40px",
              opacity: "60%",
            }}
            src={square}
            alt="square"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={3.15} speed={0.4}>
          <animated.img
            style={{
              position: "absolute",
              left: "20%",
              width: "50px",
              opacity: "60%",
            }}
            src={square}
            alt="triangle"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2.9} speed={0}>
          <animated.img
            className={styles.closegrey}
            style={useTopdown(700, "30%")}
            src={closegrey}
            alt="close"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={3.2} speed={0.5}>
          <animated.img
            className={styles.closeblue}
            style={{ position: "absolute", right: "20%", width: "100px" }}
            src={closeblue}
            alt="close"
          />
        </ParallaxLayer>

        {/* !---------------THIRD PAGE-------------! */}
        <ParallaxLayer offset={2.2} speed={0}>
          <animated.img
            style={{
              ...useTopdown(1000, "25%"),
              position: "absolute",
              right: "40%",
              width: "45px",
            }}
            src={circle}
            alt="triangle"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2.25} speed={0}>
          <animated.img
            style={{
              position: "absolute",
              left: "5%",
              width: "40px",
              opacity: "60%",
            }}
            src={square}
            alt="square"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2.35} speed={0.4}>
          <animated.img
            style={{
              ...useTopdown(2000, "20%"),
              position: "absolute",
              left: "5%",
              width: "40px",
              opacity: "60%",
            }}
            src={square}
            alt="square"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2.25} speed={0}>
          <animated.img
            style={{
              position: "absolute",
              right: "35%",
              width: "40px",
              opacity: "60%",
            }}
            src={square}
            alt="square"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2.35} speed={0.4}>
          <animated.img
            style={{
              ...useTopdown(2000, "20%"),
              position: "absolute",
              right: "15%",
              width: "40px",
              opacity: "60%",
            }}
            src={square}
            alt="square"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2.45} speed={0.4}>
          <animated.img
            style={{
              position: "absolute",
              left: "20%",
              width: "50px",
              opacity: "60%",
            }}
            src={square}
            alt="triangle"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2.3} speed={0}>
          <animated.img
            className={styles.closegrey}
            style={useTopdown(700, "30%")}
            src={closegrey}
            alt="close"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2.7} speed={0.5}>
          <animated.img
            className={styles.closeblue}
            style={{ position: "absolute", right: "20%", width: "100px" }}
            src={closeblue}
            alt="close"
          />
        </ParallaxLayer>

        {/* !--------------FIRST PAGE CONTENT--------------! */}
        <ParallaxLayer offset={0.25} speed={0.8}>
          <Typography variant="h4" className={styles.tagline}>
            Hi , I'm
          </Typography>
          <Typography variant="h1" className={styles.name}>
            Akshat Khandelwal
          </Typography>
          <Typography className={styles.tagline} variant="h4">
            A quick learner , A creative thinker
          </Typography>
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <Spring
                delay={300}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(-10%)",
                }}
              >
                {(props) => (
                  <Typography
                    style={props}
                    className={styles.projectheading}
                    variant="h2"
                  >
                    Projects
                  </Typography>
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </ParallaxLayer>
        {/* !--------------SECOND PAGE CONTENT--------------! */}
        <ParallaxLayer offset={1}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={6}
            style={{ marginTop: "140px" }}
          >
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <ProjectCard
                title="PesSocial"
                desc="A fully secure social networking website with a robust UI and reliable backend."
                link="https://pessocial-a007f.firebaseapp.com"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <ProjectCard
                title="Mess Timetable"
                desc="A simple, to the point app to check mess meals being served in the hostel."
                link="https://play.google.com/store/apps/details?id=com.akshatk.messtimetable"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <ProjectCard
                title="Covid-19 tracker"
                desc="A web app to check the current stats for covid-19 pandemic."
                link="https://elegant-ramanujan-197a5e.netlify.app/"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <ProjectCard
                title="Weather PWA "
                desc="A progressive web app to check the current weather in searched area."
                link="https://inspiring-kirch-28370d.netlify.app/"
              />
            </Grid>
          </Grid>
        </ParallaxLayer>
        {/* !--------------THIRD PAGE CONTENT--------------! */}
        <ParallaxLayer offset={2.7}>
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <Spring
                delay={300}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(-10%)",
                }}
              >
                {(props) => (
                  <Typography
                    style={props}
                    className={styles.skillsheading}
                    variant="h2"
                  >
                    Skills
                  </Typography>
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0}>
          <Grid
            container
            direction="row"
            justify="center"
            // alignItems="center"
            spacing={6}
            className={styles.skillsgrid}
          >
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <SkillsCard
                img={mobiledev}
                desc="Mobile App Development"
                details="Java , Android Studio, React Native"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <SkillsCard
                img={webdev}
                desc="Web Development"
                details="HTML5, CSS3, React, Redux"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <SkillsCard
                img={tools}
                desc="Tools and Utilities"
                details="Redux, Firebase, GCP functions, Firebase, Postman"
              />
            </Grid>
          </Grid>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Homepage;
