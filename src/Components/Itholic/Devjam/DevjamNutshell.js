import {Box, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";

const DevjamNutshell = () => {
    const theme = useTheme();

    const sectionTitleSX = {
        margin:"0 0 2rem 0",
        [theme.breakpoints.down('sm')]: {
            textAlign:"center",
        },
    }
    const mainParagraphSX = {
        position: "relative",
    }

    return <div id={"devjam-in-a-nutshell"}>
        <Typography variant={"h1"} color={"primary.dark"} sx={sectionTitleSX}>
            <Typography variant={"span"} color={"primary"}>DEVJAM</Typography> IN A NUTSHELL
        </Typography>
        <Box sx={ mainParagraphSX }>
            <Typography variant={"justifiedText"} color={"black"}>
                <p>
                    DEVJAM is a competition where teams of 3 to 6 people will create a working prototype within the
                    period on 1 week that answers the thematic that we will annouce once the competition will start at
                    the 1st of February.  Once the time period ends the competing teams will send multiple delivrables
                    to be judged and eventually win the competition !
                </p>
            </Typography>
        </Box>
    </div>
}

export default DevjamNutshell;