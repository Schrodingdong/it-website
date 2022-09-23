import {Box, Container, Tabs, Tab, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import TabContent from "./TabContent";
import TabPanel from "../../_UI/TabPanel";
import src from "../static/ic_sharp-model-training.png";
import MainDiv from "../../_UI/MainDiv";
import {useTheme} from "@mui/material/styles";

const cellInfo = [
    {
        training: {
            title: "Training",
            text: "TRAINING - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna sit amet accumsan tincidunt. Nullam ultricies hendrerit mi, eu tempor purus. Maecenas in turpis tellus. Vestibulum scelerisque sollicitudin velit vel aliquet. Integer non velit nec enim varius auctor vitae vel massa. Phasellus imperdiet molestie risus eget ullamcorper",
            img: src
        }
    },
    {
        design: {
            title: "Design",
            text: "DESIGN - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna sit amet accumsan tincidunt. Nullam ultricies hendrerit mi, eu tempor purus. Maecenas in turpis tellus. Vestibulum scelerisque sollicitudin velit vel aliquet. Integer non velit nec enim varius auctor vitae vel massa. Phasellus imperdiet molestie risus eget ullamcorper",
            img: src
        }
    },
    {
        event: {
            title: "Event",
            text: "EVENT - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna sit amet accumsan tincidunt. Nullam ultricies hendrerit mi, eu tempor purus. Maecenas in turpis tellus. Vestibulum scelerisque sollicitudin velit vel aliquet. Integer non velit nec enim varius auctor vitae vel massa. Phasellus imperdiet molestie risus eget ullamcorper",
            img: src
        }
    },
    {
        sposoring: {
            title: "Sponsoring",
            text: "SPONSORING - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna sit amet accumsan tincidunt. Nullam ultricies hendrerit mi, eu tempor purus. Maecenas in turpis tellus. Vestibulum scelerisque sollicitudin velit vel aliquet. Integer non velit nec enim varius auctor vitae vel massa. Phasellus imperdiet molestie risus eget ullamcorper",
            img: src
        }
    },
    {
        cp: {
            title: "Competitive programming",
            text: "CP - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna sit amet accumsan tincidunt. Nullam ultricies hendrerit mi, eu tempor purus. Maecenas in turpis tellus. Vestibulum scelerisque sollicitudin velit vel aliquet. Integer non velit nec enim varius auctor vitae vel massa. Phasellus imperdiet molestie risus eget ullamcorper",
            img: src
        }
    },
    {
        media: {
            title: "Media",
            text: "MEDIA - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna sit amet accumsan tincidunt. Nullam ultricies hendrerit mi, eu tempor purus. Maecenas in turpis tellus. Vestibulum scelerisque sollicitudin velit vel aliquet. Integer non velit nec enim varius auctor vitae vel massa. Phasellus imperdiet molestie risus eget ullamcorper",
            img: src
        }
    },
    {
        infosec: {
            title: "Infosec",
            text: "INFOSEC - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna sit amet accumsan tincidunt. Nullam ultricies hendrerit mi, eu tempor purus. Maecenas in turpis tellus. Vestibulum scelerisque sollicitudin velit vel aliquet. Integer non velit nec enim varius auctor vitae vel massa. Phasellus imperdiet molestie risus eget ullamcorper",
            img: src
        }
    }
]

const OurCells = ({ sectionId }) => {
    const [value, setValue] = useState(0);
    const [width,setWidth] = useState(0);
    const theme = useTheme();
    // Functions
    function a11yProps(index) {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }
    const tabSX = (selectedValue, tabValue) => {
        const isSelected = (selectedValue === tabValue)
        const width = (isSelected)? "100%":"90%";
        const borderColor = (isSelected)? "secondary":"divider";
        const background = (isSelected)? "linear-gradient(-90deg,rgba(231,81,255,0.05) 0%, rgba(0,0,0,0) 100% )":null;
        return {
            borderRight: 2,
            borderColor: borderColor,
            background:background,
            alignItems:"end",
            textAlign:"right",
            maxWidth:"none",
            width: width,
            height:"100px",
            transition: ".4s",
            fontSize:"1.5rem",
            fontWeight:"400"
        }
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const generateTabPanel = (el,index) => {
        const cellName = Object.keys(el)[0];
        el = el[cellName];
        return (
            <TabPanel value={value} index={index}>
                <TabContent img={el.img}>
                    {el.text}
                </TabContent>
            </TabPanel>
        )
    }
    const generateTab = (el,index) => {
        const cellName = Object.keys(el)[0];
        el = el[cellName];
        return <Tab sx={tabSX(value,index)} label={el.title} {...a11yProps(index)}></Tab>
    }
    const generateTab_Mobile = (el,index) => {
        const cellName = Object.keys(el)[0];
        el = el[cellName];
        return <Tab sx={{
            fontSize:"1.5rem",
            fontWeight:"400",
        }} label={el.title} {...a11yProps(index)}></Tab>
    }

    // Styling
    const sectionTitleSX = {
        textAlign: (sectionId%2)? "left" : "right",
        [theme.breakpoints.down('sm')]: {
            textAlign:"center",
        },
    }
    const tabGroupSX = {
        width:"35%",
        position:"absolute",
        left:0,
        top:"192px",
        "& [aria-label]":{
            alignItems:"start"
        }
    }
    const tabIndcatorsProps = {
        sx:{
            display: "none"
        }
    }
    const tabBoxSX ={
        display:"flex",
        flexDirection:"row",
        justifyContent:"end",
        alignItems:"center",
        marginTop:"80px",
        marginLeft:"auto",
        height:"700px",
        width:"60%"
    }
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    });
    return (
        <MainDiv>
            <Container maxWidth={"xl"}>
                <Typography variant={"h1"} color={"primary.dark"} align={"right"} sx={sectionTitleSX}>
                    OUR <Typography variant={"span"} color={"primary"}>CELLS</Typography>
                </Typography>
                {
                    width <= theme.breakpoints.values.sm ?
                    <Box>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            indicatorColor="secondary"
                            textColor="secondary"
                            scrollButtons
                            allowScrollButtonsMobile
                            aria-label="scrollable auto tabs example"
                            sx={{ margin:"auto" }}
                        >
                            { cellInfo.map(generateTab_Mobile) }
                        </Tabs>
                        { cellInfo.map(generateTabPanel) }
                    </Box>
                    :
                    <Box sx={ tabBoxSX }>
                        { cellInfo.map(generateTabPanel) }
                        <Tabs
                            orientation="vertical"
                            sx={ tabGroupSX }
                            textColor="secondary"
                            indicatorColor="secondary"
                            aria-label="Our cells"
                            value={value}
                            onChange={handleChange}
                            TabIndicatorProps={ tabIndcatorsProps }>
                            { cellInfo.map(generateTab) }
                        </Tabs>
                    </Box>
                }



            </Container>
        </MainDiv>
    )
}

export default OurCells;