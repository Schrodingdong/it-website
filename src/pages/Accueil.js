import Navbar from "../Components/Header/Navbar";
import Splashscreen from "../Components/Splashscreen/Splashscreen";
import WhoAreWe from "../Components/Who-are-we/WhoAreWe";
import SvgBackground from "../Components/_UI/SvgBackground";
import OurCells from "../Components/Our-cells/OurCells";
import OurEvents from "../Components/Our-events/OurEvents";
import Footer from "../Components/Footer/Footer";

const Accueil = () => {
    return <>
        <Navbar/>
        <Splashscreen/>
        <WhoAreWe/>
        <OurCells/>
        <OurEvents/>
        <Footer/>
        {/*<SvgBackground top={"100vh"} left={"0"}>*/}
        {/*    <svg width="1488" height="1488" viewBox="0 0 1488 1488" fill="none" xmlns="http://www.w3.org/2000/svg"*/}
        {/*        style={{*/}
        {/*            position:"absolute",*/}
        {/*            top:"50px",*/}
        {/*            right:"50px",*/}
        {/*            transform:'translate(50%,-50%)'*/}
        {/*        }}>*/}
        {/*        <circle cx="744" cy="744" r="744" fill="url(#paint0_linear_117_3)"/>*/}
        {/*        <defs>*/}
        {/*            <linearGradient id="paint0_linear_117_3" x1="744" y1="0" x2="744" y2="1488" gradientUnits="userSpaceOnUse">*/}
        {/*                <stop stop-color="#3F72AF"/>*/}
        {/*                <stop offset="1" stop-color="#E751FF"/>*/}
        {/*            </linearGradient>*/}
        {/*        </defs>*/}
        {/*    </svg>*/}
        {/*    <svg width="705" height="705" viewBox="0 0 705 705" fill="none" xmlns="http://www.w3.org/2000/svg"*/}
        {/*         style={{*/}
        {/*             position:"absolute",*/}
        {/*             top:"1300px",*/}
        {/*             left:"70px",*/}
        {/*             transform:'translate(-50%,-50%)'*/}
        {/*         }}>*/}
        {/*        <circle cx="352.619" cy="352.619" r="352.239" transform="rotate(-143.539 352.619 352.619)" fill="url(#paint0_linear_118_4)"/>*/}
        {/*        <defs>*/}
        {/*            <linearGradient id="paint0_linear_118_4" x1="352.619" y1="0.38031" x2="352.619" y2="704.858" gradientUnits="userSpaceOnUse">*/}
        {/*                <stop stop-color="#3F72AF"/>*/}
        {/*                <stop offset="1" stop-color="#E751FF"/>*/}
        {/*            </linearGradient>*/}
        {/*        </defs>*/}
        {/*    </svg>*/}


        {/*</SvgBackground>*/}
    </>
}

export default Accueil;