import Navbar from "../../Header/Navbar";
import bgVid from "../static/bgVid.mp4";
import Timer from "../Timer";
import {useTheme} from "@mui/material/styles";
import {Box, Button, List, ListItem, ListSubheader, Typography} from "@mui/material";
import DevjamNutshell from "./DevjamNutshell";
import Theme from "./Theme";
import React from "react";
import Rules from "../Rules";
import Rating from "../Rating";
import Socials from "../Socials";
import CircleIcon from '@mui/icons-material/Circle';
import Prize from "../Prize";

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
        gap:"3rem",
    }

    // content
    const rulesContent = {
        text:
            <ul>
                <li>
                    <b>The teams should be constituted of 4 people.</b>
                    <ul>
                        <li><em>- If you still don't have a team, consider checking out discord server, in the
                        <code> Looking-for-team</code> section</em></li>
                    </ul>
                </li><br/>
                <li>
                    <b>A list of what you should give us at the end of the contest :</b>
                    <ul>
                        <li><em>- A Video (less than 3min) containing a description of the prototype and explaining its
                            relation to the devjam theme, and the technologies you have used.</em></li>
                        <li><em>- Documents describing the technologies you have used and how you used them.</em></li>
                        <li><em>- A way for us to test your working prototype.</em></li>
                    </ul>
                </li><br/>
                <li>
                    <b>The working prototype could be either a :</b>
                    <ul>
                        <li><em>- Web app.</em></li>
                        <li><em>- Mobile app.</em></li>
                    </ul>
                </li>
            </ul>
    }
    const ratingContent = {
        text:"The ranking will consist mainly on the creativity and the relation of the project with the annouced " +
            "theme of the Devjam"
    }
    const prizeContent = {
        text:"Will be annouced soon ;) be sure to follow our socials !"
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
                <Typography variant={"h1"} sx={{ color:"white",fontSize: {xs :"3rem", md:"7rem"},textAlign:"center" }}>DEVJAM</Typography>
                {/*<h1 style={{textAlign:"center",margin:"1rem 0",fontSize:"7rem"}}>DEVJAM</h1>*/}
                <p style={{textAlign:"center",margin:"0 0 5rem 0",fontSize:"1.3rem"}}>From Concept to Creation, unleash your IT MIND</p>
            </div>
            <Box id={"devjam-info"} sx={devjamInfoStyle}>
                <Timer targetDate={new Date('2023-02-01T12:00:00')} dark/>
                <Button variant="contained" href={"https://docs.google.com/forms/d/1lAlvFEnIfKedeFGK_OMRCZYCCQG-mu9Cpk6Iu_5r27o/prefill"} target={"_blank"}>
                    <h2 style={{margin:"10px"}}>Join the JAM !</h2>
                </Button>
                <DevjamNutshell/>
                <Theme/>
                <Rules content={rulesContent}/>
                {/*<Rating content={ratingContent}/>*/}
                <Prize content={ prizeContent }/>
                <Socials/>
            </Box>
        </Box>


    </>
}

export default Devjam;