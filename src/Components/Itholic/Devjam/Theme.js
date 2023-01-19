import {Box, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";

const Theme = () => {
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
    const themeBox = {
        height:"200px",
        borderRadius:"2rem",
        backgroundColor:"red",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        background: "radial-gradient(circle, rgba(126,0,147,1) 0%, rgba(77,0,89,1) 100%)"
    }


    return <div id={"devjam-in-a-nutshell"}>
        <Typography variant={"h1"} color={"primary.dark"} sx={sectionTitleSX}>
            <Typography variant={"span"} color={"primary"}>THEME</Typography>
        </Typography>
        <Box sx={ mainParagraphSX }>
            <Box sx={ themeBox }>
                <Typography variant={"h2"}>
                    ?
                </Typography>
            </Box>
            <Typography variant={"justifiedText"} color={"black"}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna sit amet accumsan
                    tincidunt. Nullam ultricies hendrerit mi, eu tempor purus. Maecenas in turpis tellus. Vestibulum
                    scelerisque sollicitudin velit vel aliquet. Integer non velit nec enim varius auctor vitae vel massa.
                    Phasellus imperdiet molestie risus eget ullamcorper.
                </p>
            </Typography>
        </Box>
    </div>
}

export default Theme;