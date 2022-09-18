import Navbar from "../Header/Navbar";
import Splashscreen from "./Splashscreen/Splashscreen";
import WhoAreWe from "./Who-are-we/WhoAreWe";
import OurCells from "./Our-cells/OurCells";
import OurEvents from "./Our-events/OurEvents";
import Footer from "../Footer/Footer";
import SvgBackground from "../_UI/SvgBackground";

const Accueil = () => {
    return <>
        <Navbar/>
        <Splashscreen/>
        <WhoAreWe/>
        {/*<div style={{*/}
        {/*    position:"relative",*/}
        {/*    height:"200px",*/}
        {/*    zIndex:-1*/}
        {/*}}>*/}
        {/*    <svg width="300px" height="300px" viewBox="0 0 1488 1488" fill="none" xmlns="http://www.w3.org/2000/svg" style={{*/}
        {/*        position:"absolute",*/}
        {/*        left:0,*/}
        {/*        transform:"translate(-50%,-50%)",*/}

        {/*    }}>*/}
        {/*        <circle cx="744" cy="744" r="744" fill="url(#paint0_linear_117_3)"/>*/}
        {/*        <defs>*/}
        {/*            <linearGradient id="paint0_linear_117_3" x1="744" y1="0" x2="744" y2="1488" gradientUnits="userSpaceOnUse">*/}
        {/*                <stop stop-color="#3F72AF"/>*/}
        {/*                <stop offset="1" stop-color="#E751FF"/>*/}
        {/*            </linearGradient>*/}
        {/*        </defs>*/}
        {/*    </svg>*/}
        {/*</div>*/}
        <OurCells/>
        <OurEvents/>
        <Footer/>
        {/*<SvgBackground top={"100vh"} left={0}>*/}
        {/*    <svg width="70vw" height="70vw" viewBox="0 0 1488 1488" fill="none" xmlns="http://www.w3.org/2000/svg" style={{*/}
        {/*        position:'absolute',*/}
        {/*        right:0,*/}
        {/*        transform:"translate(40%,-50%)"*/}
        {/*    }}>*/}
        {/*        <circle cx="744" cy="744" r="744" fill="url(#paint0_linear_117_3)"/>*/}
        {/*        <defs>*/}
        {/*            <linearGradient id="paint0_linear_117_3" x1="744" y1="0" x2="744" y2="1488" gradientUnits="userSpaceOnUse">*/}
        {/*                <stop stop-color="#3F72AF"/>*/}
        {/*                <stop offset="1" stop-color="#E751FF"/>*/}
        {/*            </linearGradient>*/}
        {/*        </defs>*/}
        {/*    </svg>*/}


        {/*</SvgBackground>*/}
    </>
}

export default Accueil;