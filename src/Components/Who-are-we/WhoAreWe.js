import {Box, Container, Typography} from "@mui/material";
import Timeline from "./Timeline";
import styles from "./WhoAreWe.module.css";
import logo from "./img/logo.png";
import {useState} from "react";
import GlassCard from "../_UI/GlassCard";
import cardImage1 from "../../static/img/rr.jpg"
import cardImage2 from "../../static/img/49022249_1125614244278950_7211991186590924800_n.jpg"

const timelineHistory = {
    2018:{
        img: cardImage1,
        caption: "2018 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna sit amet accumsan tincidunt. Nullam ultricies hendrerit mi, eu tempor purus. Maecenas in turpis tellus."
    },
    2019:{
        img: cardImage2,
        caption: "2019 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna sit amet accumsan tincidunt. Nullam ultricies hendrerit mi, eu tempor purus. Maecenas in turpis tellus."
    },
    2020:{
        img: cardImage1,
        caption: "2020 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna sit amet accumsan tincidunt. Nullam ultricies hendrerit mi, eu tempor purus. Maecenas in turpis tellus."
    },
    2021:{
        img: cardImage2,
        caption: "2021 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna sit amet accumsan tincidunt. Nullam ultricies hendrerit mi, eu tempor purus. Maecenas in turpis tellus."
    },
    2022:{
        img: cardImage1,
        caption: "2022 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna sit amet accumsan tincidunt. Nullam ultricies hendrerit mi, eu tempor purus. Maecenas in turpis tellus."
    },
    null:{
        img: null,
        caption: ""
    }

}


const WhoAreWe = () => {
    const [ cardYear, setCardYear ] = useState(2022)

    return (
        <div style={{width:"100%", position:"relative", margin:"200px 0"}}>
            <Container className={styles.WhoAreWe} maxWidth={"xl"} >
                <Box sx={{
                    display:"flex",
                    alignItems:"center",
                    gap:"1rem"
                }}>
                    <Box sx={{ width:"60%" }}>
                        <Typography variant={"h1"} color={"primary.dark"}>
                            WHO ARE <Typography variant={"span"} color={"primary"}>WE ?</Typography>
                        </Typography>

                        <Box className={styles.paragraph} sx={{
                            borderLeft : "solid 7px #3F72AF"
                        }}>
                            <Typography  variant={"justifiedText"} color={"text.primary"}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna sit amet accumsan tincidunt. Nullam ultricies hendrerit mi, eu tempor purus. Maecenas in turpis tellus. Vestibulum scelerisque sollicitudin velit vel aliquet. Integer non velit nec enim varius auctor vitae vel massa. Phasellus imperdiet molestie risus eget ullamcorper.</p>
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ width:"40%" }}>
                        <img className={styles.logo} src={ logo } alt={ "logo" }/>
                    </Box>
                </Box>
                <Box sx={{
                    width:"90%",
                    margin:"auto",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"center",
                    transition:"0.2s",
                    height:"600px",
                    zIndex:"0"
                }}>
                    <Timeline cardYear={cardYear} setCardYear={ setCardYear }/>
                    <GlassCard src={timelineHistory[cardYear].img} isShown={cardYear !== null} year={cardYear}>
                        {timelineHistory[cardYear].caption}
                    </GlassCard>
                </Box>
            </Container>
        </div>

    )
}

export default WhoAreWe;