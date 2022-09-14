import {useState} from "react";
import {Box, Container, Tab, Tabs, Typography} from "@mui/material";
import TabContent from "../Our-cells/TabContent";
import TabPanel from "../../_UI/TabPanel";
import MainDiv from "../../_UI/MainDiv";
import src from "../static/ic_sharp-model-training.png";
import styles from "./OurEvent.module.css";

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

const OurEvents = () => {
    // Hooks
    const [value, setValue] = useState(0);

    // Functions
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const tabSX = (selectedValue, tabValue) => {
        const isSelected = (selectedValue === tabValue);
        const isITHOLIC = (0 === tabValue);

        var width = (isSelected)? "100%":"90%";
        var borderColor = (isSelected)? "secondary":"divider";
        var background = (isSelected)? "linear-gradient(-90deg,rgba(231,81,255,0.05) 0%, rgba(0,0,0,0) 100% )":null;
        var generalStyle = (isITHOLIC)? ITHOLICSX:{
            borderRight: 2,
            background:background
        };
        return {
            ...generalStyle,
            borderColor: borderColor,
            alignItems:"end",
            maxWidth:"none",
            width: width,
            height:"150px",
            transition: ".4s",
            fontSize:"1.5rem",
            fontWeight:"400",
        }
    }
    function a11yProps(index) {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }
    const generateTab = (el,index) => {
        const cellName = Object.keys(el)[0];
        el = el[cellName];
        if (index === 0)
            return <Tab sx={tabSX(value,index)} className={(value === 0)? styles.itholicSelected:null} label={el.title} {...a11yProps(index)}></Tab>;
        return <Tab sx={tabSX(value,index)} label={el.title} {...a11yProps(index)}></Tab>;
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

    // Styling
    const ITHOLICSX = {
        borderColor: "secondary",
        backgroundImage: "linear-gradient(47deg, var(--primary-dark) 100%, rgba(231,81,255,1) 100%)",
        color:"white!important",
    }
    const tabGroupSX = {
        width:"37%",
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
    const tabBoxSX = {
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginTop:"80px",
        marginLeft:"auto",
        height:"600px",
        width:"60%"
    }

    return (
        <MainDiv>
            <Container maxWidth={"xl"}>
                <Typography variant={"h1"} color={"primary.dark"} align={"left"}>
                    OUR <Typography variant={"span"} color={"primary"}>EVENTS</Typography>
                </Typography>
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
                </Box>
            </Container>
        </MainDiv>
    )
}

export default OurEvents;