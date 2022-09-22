import Navbar from "../Header/Navbar";
import Splashscreen from "./Splashscreen/Splashscreen";
import WhoAreWe from "./Who-are-we/WhoAreWe";
import OurCells from "./Our-cells/OurCells";
import OurEvents from "./Our-events/OurEvents";
import Footer from "../Footer/Footer";
import Highlight from "./Higlight/Highlight";


const Accueil = () => {
    return <>
        <Navbar/>
        <Splashscreen/>
        <WhoAreWe  sectionId={1}/>
        <Highlight sectionId={2}/>
        <OurCells  sectionId={3}/>
        <OurEvents sectionId={4}/>
        <Footer/>
    </>
}

export default Accueil;