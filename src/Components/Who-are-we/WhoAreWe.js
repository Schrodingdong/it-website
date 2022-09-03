import {Box, Card, Container, Typography} from "@mui/material";

import Timeline from "./Timeline";
import styles from "./WhoAreWe.module.css";
import logo from "./img/logo.png";

const WhoAreWe = () => {
    return (
        <Container className={styles.WhoAreWe} maxWidth={"xl"} >
            <Box sx={{ display:"flex", alignItems:"center" }}>
                <Box sx={{ width:"60%" }}>
                    <Typography variant={"h1"}>
                        WHO ARE <Typography variant={"span"} color={"primary"}>WE ?</Typography>
                    </Typography>

                    <Box className={styles.paragraph} sx={{
                        borderLeft : "solid 7px #3F72AF"
                    }}>
                        <Typography variant={"justifiedText"}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna sit amet accumsan tincidunt. Nullam ultricies hendrerit mi, eu tempor purus. Maecenas in turpis tellus. Vestibulum scelerisque sollicitudin velit vel aliquet. Integer non velit nec enim varius auctor vitae vel massa. Phasellus imperdiet molestie risus eget ullamcorper.</p>
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ width:"40%" }}>
                    <img className={styles.logo} src={ logo } alt={ "logo" }/>
                </Box>
            </Box>
            <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"50vh"}}>
                <Timeline/>
            </Box>

        </Container>
    )
}

export default WhoAreWe;