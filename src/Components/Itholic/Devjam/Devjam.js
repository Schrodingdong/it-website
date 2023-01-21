import Navbar from "../../Header/Navbar";
import bgVid from "../static/bgVid.mp4";
import Timer from "../Timer";
import {useTheme} from "@mui/material/styles";
import {Box, Button, Typography} from "@mui/material";
import DevjamNutshell from "./DevjamNutshell";
import Theme from "./Theme";
import React from "react";
import Rules from "../Rules";
import Rating from "../Rating";
import Socials from "../Socials";

const Devjam = () => {
    const theme = useTheme();

    const videoContainerStyle = {
        position:"fixed",
        top:0,
        left:0,
        width : "100vw",
        height : "100vh",
        zIndex: -1,
        // background: "linear-gradient(-45deg,  #112D4E,#3c0063)",
        // backgroundSize: "400% 400%",
        // animation: "gradient 15s ease infinite",
        backgroundColor: "black"
    }
    const backgroundVideoStyle = {
        width: "100%",
        height: "100%",
        objectFit : "cover",
        position : "absolute",
        left : 0,
        top : 0,
        opacity : 0.3,
    }
    const centerContainerStyle = {
        position: "absolute",
        top: "0",
        left: "50%",
        transform: "translate(-50%,30vh)",
        color: "white",
        width:{
            xs:"86%",
            sm:"75%"
        }
    }
    const devjamInfoStyle = {
        backgroundColor:"white",
        borderRadius:{
            xs:"2rem 2rem 0 0",
            sm:"2rem"
        },
        padding: "3rem",
        boxSizing:"border-box",
        width:"100%",
        alignItems:"center",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        gap:"3rem"
    }

    // content
    const rulesContent = {
        text:""+
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna sit amet accumsan" +
            "tincidunt. Nullam ultricies hendrerit mi, eu tempor purus. Maecenas in turpis tellus. Vestibulum" +
            "scelerisque sollicitudin velit vel aliquet. Integer non velit nec enim varius auctor vitae vel massa." +
            "Phasellus imperdiet molestie risus eget ullamcorper."
    }
    const ratingContent = {
        text:""+
            "RATING DAVJAM - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna sit amet accumsan" +
            "tincidunt. Nullam ultricies hendrerit mi, eu tempor purus. Maecenas in turpis tellus. Vestibulum" +
            "scelerisque sollicitudin velit vel aliquet. Integer non velit nec enim varius auctor vitae vel massa." +
            "Phasellus imperdiet molestie risus eget ullamcorper."
    }


    return <>
        <Navbar/>
        {/* VIDEO PLAYER FOR BACKGROUND THINGY*/}
        <div style={ videoContainerStyle }>
            <video autoPlay loop muted playsInline style={ backgroundVideoStyle }>
                <source src={ bgVid } type='video/mp4' />
            </video>
        </div>

        <Box sx={centerContainerStyle}>
            <div id="title-text">
                <Typography variant={"h1"} sx={{ color:"white",fontSize: {xs :"4rem", sm:"7rem"},textAlign:"center" }}>DEVJAM</Typography>
                {/*<h1 style={{textAlign:"center",margin:"1rem 0",fontSize:"7rem"}}>DEVJAM</h1>*/}
                <p style={{textAlign:"center",margin:"0 0 5rem 0",fontSize:"1.3rem"}}>From Concept to Creation, unleash your IT MIND</p>
            </div>
            <Box id={"devjam-info"} sx={devjamInfoStyle}>
                <Timer targetDate={new Date('2023-02-01T08:00:00')} dark/>
                <Button variant="contained" href={"https://docs.google.com/forms/d/1KsKnxalgPh8hY-HYTAPSNtRymzjK-lt3hOoLujsR-wM"} >
                    <h2 style={{margin:"10px"}}>Join the JAM !</h2>
                </Button>
                <DevjamNutshell/>
                <Theme/>
                <Rules content={rulesContent}/>
                <Rating content={ratingContent}/>
                <Socials/>
            </Box>
        </Box>


    </>
}

export default Devjam;