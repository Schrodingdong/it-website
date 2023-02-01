import {Box, Tabs, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import dxcLogo from "./static/DXC_logo.png";
import eurafricLogo from "./static/EURAFRIC_logo.png";




const OurSponsors = ()=> {
    const theme = useTheme();

    const sectionTitleSX = {
        margin:"0 0 2rem 0",
        [theme.breakpoints.down('sm')]: {
            textAlign:"center",
        }
    }
    const mainParagraphSX = {
        position: "relative",
    }
    const imgStyle = {
        width:"200px",
        padding:""
    }
    const tabBoxSX ={
        display:"flex",
        alignItems:"center",
        marginTop:"80px",
        height:"700px",
        width:"60%"
    }

    return <Box sx={ tabBoxSX }>
        <Typography variant={"h1"} color={"primary.dark"} sx={sectionTitleSX}>
            OUR <Typography variant={"span"} color={"primary"}>SPONSORS</Typography>
        </Typography>
        <Box sx={ mainParagraphSX }>
            <img style={imgStyle} src={dxcLogo}/>
            <img style={imgStyle} src={eurafricLogo}/>
        </Box>
    </Box>
}

export default OurSponsors;