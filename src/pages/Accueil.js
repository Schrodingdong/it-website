import {CssBaseline} from "@mui/material";
import Navbar from "../Components/Header/Navbar";
import Splashscreen from "../Components/Splashscreen/Splashscreen";
import WhoAreWe from "../Components/Who-are-we/WhoAreWe";

const Accueil = () => {
    return <>
        <CssBaseline/>
        <Navbar/>
        <Splashscreen/>
        <WhoAreWe/>
    </>
}

export default Accueil;