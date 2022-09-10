import React from 'react';
import {Box, Container, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import Carousel from 'react-material-ui-carousel';
import styles from "./Splashscreen.module.css";
import img1 from "./img/itholic_ceremony.png";
import img2 from "./img/49022249_1125614244278950_7211991186590924800_n.jpg";
import img3 from "./img/75233701_1341316452708727_7337963230217633792_n.jpg";

const carouselImages = [img1,img2,img3];

const Splashscreen = () => {
    return (
        <Container className={styles.splashscreen} maxWidth={"xl"}>
            <Box className={styles.backgroundImage}>
                <div className={styles.overlay}></div>
                <Carousel indicators={null} className={styles.image} >
                    {
                        carouselImages.map(img => <img src={img} alt={"SplashScreen"}/>)
                    }
                </Carousel>
            </Box>

            <Box className={styles.frontText} textAlign={"center"}>
                <Typography variant={"bigTitle"} color={"primary"}>ENSIAS IT CLUB</Typography>
                <Typography variant={"codeLike"} color={"common.white"}>
                    <TypeAnimation sequence={[1000,"Where IT minds get creative"]}
                                   wrapper="p"
                                   style={{ margin: 0 }}
                                   speed={1}/>
                </Typography>
            </Box>
        </Container>
    )
}

export default Splashscreen;