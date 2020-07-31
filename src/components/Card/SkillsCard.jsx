import React, { useState } from "react";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";
import Fade from "react-reveal/Fade";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import clsx from "clsx";
import styles from "./SkillsCard.module.css";
import { CardActions } from "@material-ui/core";

function SkillsCard({ img, desc, details, i }) {
  const fadeProps = {};

  fadeProps.left = true;

  switch (i) {
    case 0:
      fadeProps.delay = 200;
      break;
    case 1:
      fadeProps.delay = 400;
      break;
    case 2:
      fadeProps.delay = 600;
      break;
    default:
      break;
  }

  return (
    <Fade {...fadeProps}>
      <Card style={{ height: "100%" }} className={styles.card}>
        <CardMedia
          src={img}
          component="img"
          className={styles.cardimg}
          title={desc}
        />
        {/* <Divider style={{ backgroundColor: "#002402" }} variant="middle" /> */}
        <CardContent>
          <Typography className={styles.body} variant="h4">
            {desc}
          </Typography>
          <Divider style={{ backgroundColor: "#000" }} variant="fullWidth" />
          <Typography className={styles.details} variant="h6">
            {details}
          </Typography>
        </CardContent>
      </Card>
    </Fade>
  );
}

export default SkillsCard;
