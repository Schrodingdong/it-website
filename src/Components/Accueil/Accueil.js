import Navbar from "../Header/Navbar";
import Splashscreen from "./Splashscreen/Splashscreen";
import WhoAreWe from "./Who-are-we/WhoAreWe";
import OurCells from "./Our-cells/OurCells";
import OurEvents from "./Our-events/OurEvents";
import Footer from "../Footer/Footer";

const Accueil = () => {
    return <>
        <Navbar/>
        <Splashscreen/>
        <WhoAreWe/>
        <OurCells/>
        <OurEvents/>
        <Footer/>
    </>
}

export default Accueil;