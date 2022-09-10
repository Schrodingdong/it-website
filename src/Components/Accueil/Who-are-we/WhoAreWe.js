import {Box, Container, Typography} from "@mui/material";
import {useState} from "react";
import { useTheme } from '@mui/material/styles';
import Timeline from "./Timeline";
import GlassCard from "../../_UI/GlassCard";
import logo from "./img/logo.png";
import cardImage1 from "../../../static/img/rr.jpg"
import cardImage2 from "../../../static/img/49022249_1125614244278950_7211991186590924800_n.jpg"
import MainDiv from "../../_UI/MainDiv";

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
    // Hooks
    const [ cardYear, setCardYear ] = useState(2022);
    const theme = useTheme();

    // styling
    const textBoxSX = {
        display:"flex",
        alignItems:"center",
        gap:"1rem"
    }
    const mainParagraphSX = {
        paddingLeft: "1.5rem",
        position: "relative",
        borderLeft : "solid 7px" + theme.palette.primary.main
    }
    const timelineSX = {
        width:"90%",
        margin:"auto",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        transition:"0.2s",
        height:"600px",
        zIndex:"0"
    }
    const logoStyle = {
        width: "100%",
        maxWidth: "500px",
        display: "block",
        marginLeft: "auto"
    }

    return (
        <MainDiv>
            <Container maxWidth={"xl"} >
                <Box sx={ textBoxSX }>
                    <Box sx={{ width:"60%" }}>
                        <Typography variant={"h1"} color={"primary.dark"}>
                            WHO ARE <Typography variant={"span"} color={"primary"}>WE ?</Typography>
                        </Typography>
                        <Box sx={ mainParagraphSX }>
                            <Typography  variant={"justifiedText"} color={"text.primary"}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna sit amet accumsan tincidunt. Nullam ultricies hendrerit mi, eu tempor purus. Maecenas in turpis tellus. Vestibulum scelerisque sollicitudin velit vel aliquet. Integer non velit nec enim varius auctor vitae vel massa. Phasellus imperdiet molestie risus eget ullamcorper.</p>
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ width:"40%" }}>
                        <img style={ logoStyle } src={ logo } alt={ "logo" }/>
                    </Box>
                </Box>
                <Box sx={ timelineSX }>
                    <Timeline cardYear={cardYear} setCardYear={ setCardYear }/>
                    <GlassCard src={timelineHistory[cardYear].img} isShown={cardYear !== null} year={cardYear}>
                        { timelineHistory[cardYear].caption }
                    </GlassCard>
                </Box>
            </Container>
        </MainDiv>
    )
}

export default WhoAreWe;