import {useEffect, useState} from "react";
import {Box, Container, Tab, Tabs, Typography} from "@mui/material";
import TabContent from "../Our-cells/TabContent";
import TabPanel from "../../_UI/TabPanel";
import MainDiv from "../../_UI/MainDiv";
import src from "../static/ic_sharp-model-training.png";
import styles from "./OurEvent.module.css";
import {useTheme} from "@mui/material/styles";

const eventInfo = [
    {
        itholic: {
            title: "ITHOLIC",
            text: "ITHOLIC - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna sit amet accumsan tincidunt. Nullam ultricies hendrerit mi, eu tempor purus. Maecenas in turpis tellus. Vestibulum scelerisque sollicitudin velit vel aliquet. Integer non velit nec enim varius auctor vitae vel massa. Phasellus imperdiet molestie risus eget ullamcorper",
            img: src
        }
    },
    {
        event1: {
            title: "event1",
            text: "EVENT1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna sit amet accumsan tincidunt. Nullam ultricies hendrerit mi, eu tempor purus. Maecenas in turpis tellus. Vestibulum scelerisque sollicitudin velit vel aliquet. Integer non velit nec enim varius auctor vitae vel massa. Phasellus imperdiet molestie risus eget ullamcorper",
            img: src
        }
    },
    {
        event2: {
            title: "event2",
            text: "EVENT2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna sit amet accumsan tincidunt. Nullam ultricies hendrerit mi, eu tempor purus. Maecenas in turpis tellus. Vestibulum scelerisque sollicitudin velit vel aliquet. Integer non velit nec enim varius auctor vitae vel massa. Phasellus imperdiet molestie risus eget ullamcorper",
            img: src
        }
    },
    {
        event3: {
            title: "event3",
            text: "EVENT3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna sit amet accumsan tincidunt. Nullam ultricies hendrerit mi, eu tempor purus. Maecenas in turpis tellus. Vestibulum scelerisque sollicitudin velit vel aliquet. Integer non velit nec enim varius auctor vitae vel massa. Phasellus imperdiet molestie risus eget ullamcorper",
            img: src
        }
    }
]

const OurEvents = ({ sectionId }) => {
    // Hooks
    const [value, setValue] = useState(0);
    const [width,setWidth] = useState(window.innerWidth);
    const theme = useTheme();

    // Functions
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const tabSX = (selectedValue, tabValue) => {
        const isSelected = (selectedValue === tabValue);
        const isITHOLIC = (0 === tabValue);

        var width = (isSelected)? "100%":"90%";
        var borderColor = (isSelected)? "secondary":"divider";
        var background = (isSelected)? "linear-gradient(90deg,rgba(231,81,255,0.05) 0%, rgba(0,0,0,0) 100% )":null;
        var generalStyle = (isITHOLIC)? ITHOLICSX:{
            borderLeft: 2,
            background:background
        };
        return {
            ...generalStyle,
            borderColor: borderColor,
            alignItems:"start",
            maxWidth:"none",
            width: width,
            height:"150px",
            transition: ".4s",
            fontSize:"1.5rem",
            fontWeight:"400",
        }
    }
    const tabITHOLICSX_mobile = (selectedValue, tabValue) =>{
        const isSelected = (selectedValue === tabValue);
        const isITHOLIC = (0 === tabValue);
        var borderColor = (isSelected)? "secondary":"divider";
        var background = (isSelected)? "linear-gradient(0deg,rgba(231,81,255,0.05) 0%, rgba(0,0,0,0) 100% )":null;
        var generalStyle = (isITHOLIC)? ITHOLICSX:{
            borderLeft: 2,
            background:background
        };
        return {
            ...generalStyle,
            width:"150px",
            transition: ".4s",
            borderRadius:"10px 10px 0 0"
        }
    }
    function a11yProps(index) {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }
    const generateTabPanel =(el,index) => {
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
        if (index === 0)
            return <Tab sx={tabSX(value,index)} className={(value === 0)? styles.itholicSelected:null} label={el.title} {...a11yProps(index)}></Tab>;
        return <Tab sx={tabSX(value,index)} label={el.title} {...a11yProps(index)}></Tab>;
    }
    const generateTab_Mobile = (el,index) => {
        const cellName = Object.keys(el)[0];
        el = el[cellName];
        if (index === 0)
            return <Tab sx={{
                fontSize:"1.5rem",
                fontWeight:"400",
                height:"75px",
                // ...tabITHOLICSX_mobile(value,index)
            }} /*className={(value === 0)? styles.itholicSelectedMobile:null}*/ label={el.title} {...a11yProps(index)}></Tab>;
        return <Tab sx={{
            fontSize:"1.5rem",
            fontWeight:"400",
            height:"75px"
        }} label={el.title} {...a11yProps(index)}></Tab>;

    }

    // Styling
    const sectionTitleSX = {
        textAlign: (sectionId%2)? "left" : "right",
        [theme.breakpoints.down('sm')]: {
            textAlign:"center",
        },
    }
    const ITHOLICSX = {
        borderColor: "secondary",
        backgroundImage: "linear-gradient(47deg, var(--primary-dark) 100%, rgba(231,81,255,1) 100%)",
        color:"white!important",
    }
    const tabGroupSX = {
        width:"35%",
        position:"absolute",
        right:0,
        top:"192px",
        "& [aria-label]":{
            alignItems:"end"
        }
    }
    const tabIndcatorsProps = {
        sx:{
            display: "none"
        }
    }
    const tabBoxSX = {
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginTop:"80px",
        height:"600px",
        width:"60%"
    }

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    });
    return (
        <MainDiv id={"events"}>
            <Container maxWidth={"xl"}>
                <Typography variant={"h1"} color={"primary.dark"} align={"left"} sx={sectionTitleSX}>
                    OUR <Typography variant={"span"} color={"primary"}>EVENTS</Typography>
                </Typography>
                {
                    width > theme.breakpoints.values.sm ?
                        <Box sx={ tabBoxSX }>
                            <Tabs
                                orientation="vertical"
                                sx={ tabGroupSX }
                                textColor="secondary"
                                indicatorColor="secondary"
                                aria-label="Our cells"
                                value={value}
                                onChange={ handleChange }
                                TabIndicatorProps={ tabIndcatorsProps }
                            >
                                { eventInfo.map(generateTab) }
                            </Tabs>
                                { eventInfo.map(generateTabPanel) }
                        </Box> :
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
                            sx={{ margin:"auto"}}
                            >
                                { eventInfo.map(generateTab_Mobile) }
                            </Tabs>
                                { eventInfo.map(generateTabPanel) }
                        </Box>
                }
            </Container>
        </MainDiv>
    )
}

export default OurEvents;