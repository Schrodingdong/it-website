import {AppBar, Box, Container, Toolbar, Typography} from "@mui/material"

import logo from "./logo.png"
import styles from "./Navbar.module.css"
import {Link} from "react-router-dom";

const headerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
}
const headerAppBar = {
    boxShadow: "none"
}

const Navbar = () => {
    return <AppBar position="absolute" color={"transparent"} sx={headerAppBar}>
        <Toolbar >
            <Container maxWidth={"xl"} sx={headerStyle}>
                <Link to={"/"}>
                    <Box className={styles.logo}>
                        <img src={ logo } alt={"logo"}/>
                        <Typography variant={"h6"} color={"common.white"}>
                            ENSIAS IT CLUB
                        </Typography>
                    </Box>
                </Link>


                <Box className={styles.links}>
                    <ul>
                        <li><Link to={"/"}>
                            <Typography variant={"p"} color={"common.white"}>ACCUEIL</Typography>
                        </Link></li>
                        <li><Link to={"/meet-the-team"}>
                            <Typography variant={"p"} color={"common.white"}>MEET THE TEAM</Typography>
                        </Link></li>
                        <li><Link to={"/event"}>
                            <Typography variant={"p"} color={"common.white"}>EVENT</Typography>
                        </Link></li>
                        <li><Link to={"/itholic"}>
                            <Typography variant={"p"} color={"white"} hov>ITHOLIC</Typography>
                        </Link></li>
                    </ul>
                </Box>
            </Container>

        </Toolbar>
    </AppBar>
}

export default Navbar;