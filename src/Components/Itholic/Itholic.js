import Navbar from "../Header/Navbar";
import {useTheme} from "@mui/material/styles";
import bgVid from "./static/bgVid.mp4";
import Timer from './Timer'
import Speakers from "./speakers/Speakers";
import {Button} from "@mui/material";

const Itholic = () => {
    // theme instance
    const theme = useTheme();

    // styling
    const videoContainerStyle = {
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
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        color: "white"
    }
    const buttonContainerStyle = {
        margin:"2rem 0",
        display:"flex",
        flexDirection:"row",
        gap:"1rem",
    }
    const buttonStyle = {
        width:"50%",
        color:"white",
        borderColor:"#ffffff60"
    }


    return <>
        <Navbar/>
        {/* VIDEO PLAYER FOR BACKGROUND THINGY*/}
        <div style={ videoContainerStyle }>
            <video autoPlay loop muted playsInline  className='background-video' style={ backgroundVideoStyle }>
                <source src={ bgVid } type='video/mp4' />
            </video>
        </div>

        {/* TIMER SECTION */}
        <div style={centerContainerStyle}>
            <h1 style={{ textAlign:"center" }}>COMING SOON</h1>
            <Timer targetDate={ new Date('2023-02-10T16:00:00') }/>
            <div style={buttonContainerStyle}>
                <Button variant="outlined" style={buttonStyle}>Sign up for DEVJAM</Button>
                <Button variant="outlined" style={buttonStyle}>Sign up for CP</Button>
            </div>
        </div>

        {/*<Speakers />*/}
    </>
}

export default Itholic;