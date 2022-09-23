import {Box, Container, Typography} from "@mui/material";
import { styled } from "@mui/material/styles";
import {useState} from "react";
import { useTheme } from '@mui/material/styles';
import Timeline from "./Timeline";
import GlassCard from "../../_UI/GlassCard";
import logo from "./img/logo.png";
import cardImage1 from "../../../static/img/rr.jpg"
import cardImage2 from "../../../static/img/49022249_1125614244278950_7211991186590924800_n.jpg"
import MainDiv from "../../_UI/MainDiv";

const WhoAreWe = ({ sectionId }) => {
    // Hooks
    // const [ cardYear, setCardYear ] = useState(2022);
    const theme = useTheme();

    // styling
    const sectionTitleSX = {
        textAlign: (sectionId%2)? "left" : "right",
        [theme.breakpoints.down('sm')]: {
            textAlign:"center",
        },
    }
    const TextBox = styled('div')(({ theme }) => ({
        display:"flex",
        alignItems:"center",
        marginBottom : "5rem",
        [theme.breakpoints.down('sm')]: {
            gap:"2rem",
            flexDirection: "column",
        },
        [theme.breakpoints.up('sm')]: {
            gap:"3rem",
            flexDirection: "row",
        }
    }));
    const TextWrapper = styled('div')(({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
            width:"95%",
        },
        [theme.breakpoints.up('sm')]: {
            width:"60%"
        }
    }));
    const mainParagraphSX = {
        paddingLeft: "1.5rem",
        position: "relative",
        borderLeft : "solid 7px" + theme.palette.primary.main,
        [theme.breakpoints.down('sm')]: {
            paddingLeft : 0 ,
            borderLeft : "none",
        },
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
                <TextBox>
                    <TextWrapper>
                        <Typography variant={"h1"} color={"primary.dark"} sx={sectionTitleSX}>
                            WHO ARE <Typography variant={"span"} color={"primary"}>WE ?</Typography>
                        </Typography>
                        <Box sx={ mainParagraphSX }>
                            <Typography  variant={"justifiedText"} color={"text.primary"}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna sit amet accumsan tincidunt. Nullam ultricies hendrerit mi, eu tempor purus. Maecenas in turpis tellus. Vestibulum scelerisque sollicitudin velit vel aliquet. Integer non velit nec enim varius auctor vitae vel massa. Phasellus imperdiet molestie risus eget ullamcorper.</p>
                            </Typography>
                        </Box>
                    </TextWrapper>
                    <Box sx={{ width:"40%" }}>
                        <img style={ logoStyle } src={ logo } alt={ "logo" }/>
                    </Box>
                </TextBox>
            </Container>
        </MainDiv>
    )
}

export default WhoAreWe;