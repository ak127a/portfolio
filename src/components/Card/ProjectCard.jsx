import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import styles from "./ProjectCard.module.css";
import { Typography, Link, Button, CardMedia } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import i1 from "../../images/pessocial1.png";
import i2 from "../../images/pessocial2.png";

function ProjectCard({ title, desc, link, images }) {
  const [index, setIndex] = React.useState(0);

  return (
    <>
      <Fade left>
        <Card className={styles.card}>
          {images && (
            <div className={styles.imageGallery}>
              <Gallery
                enableKeyboard={false}
                index={index}
                onRequestChange={(i) => {
                  setIndex(i);
                }}
              >
                {images.map((img, key) => (
                  <GalleryImage objectFit="cover" key={key} src={img.src} />
                ))}
              </Gallery>
            </div>
          )}
          <CardContent>
            <Typography variant="h4">{title}</Typography>
            <Typography className={styles.desc} variant="body1">
              {desc}
            </Typography>
            <Button
              variant="contained"
              className={styles.projectlink}
              target="_blank"
              href={link}
            >
              Check it out
            </Button>
          </CardContent>
        </Card>
      </Fade>
    </>
  );
}

export default ProjectCard;
