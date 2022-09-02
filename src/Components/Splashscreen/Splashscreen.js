import {Box, Container, Typography } from "@mui/material";

import itholicCeremony from "./img/itholic_ceremony.png";
import img2 from "./img/49022249_1125614244278950_7211991186590924800_n.jpg";
import styles from "./Splashscreen.module.css";
import {TypeAnimation} from "react-type-animation";
import Carousel from 'react-material-ui-carousel'

const Splashscreen = () => {
    return (
        <Container className={styles.splashscreen} maxWidth={"xl"}>
            <Box className={styles.backgroundImage}>
                <div className={styles.overlay}></div>
                <Carousel indicators={null}>
                    {[
                        <img src={itholicCeremony} alt={"itholic ceremony"}/>,
                        <img src={img2} alt={"itholic ceremony"}/>
                    ]}

                </Carousel>

            </Box>
            <Box className={styles.frontText} textAlign={"center"}>
                <Typography variant={"bigTitle"} color={"primary"}>ENSIAS IT CLUB</Typography>
                <Typography variant={"codeLike"} color={"common.white"}>
                    <TypeAnimation sequence={[1000,"Where IT minds get creative"]}
                                   wrapper="p"
                                   style={{ margin: 0 }}
                                   speed={1}/>
                    {/*Where <Typography variant={"span"} color={"primary"}>IT</Typography> minds get creative*/}
                </Typography>
            </Box>
        </Container>
    )
}

export default Splashscreen;