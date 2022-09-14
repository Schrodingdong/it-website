import {Box, Container, Tabs, Tab, Typography} from "@mui/material";
import {useState} from "react";
import TabContent from "./TabContent";
import TabPanel from "../../_UI/TabPanel";
import src from "../static/ic_sharp-model-training.png";
import MainDiv from "../../_UI/MainDiv";

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
            title: "Competitive Programming",
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

const OurCells = () => {
    const [value, setValue] = useState(0);

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
        const background = (isSelected)? "linear-gradient(90deg,rgba(231,81,255,0.05) 0%, rgba(0,0,0,0) 100% )":null;
        return {
            borderLeft: 2,
            borderColor: borderColor,
            background:background,
            alignItems:"start",
            textAlign:"left",
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
        return <Tab sx={tabSX(value,index)} label={el.title} {...a11yProps(index)}></Tab>
    }

    // Styling
    const tabGroupSX = {
        width:"37%",
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
    const tabBoxSX ={
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginTop:"80px",
        height:"700px",
        width:"60%"
    }

    return (
        <MainDiv>
            <Container maxWidth={"xl"}>
                <Typography variant={"h1"} color={"primary.dark"} align={"right"}>
                    OUR <Typography variant={"span"} color={"primary"}>CELLS</Typography>
                </Typography>
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
                        TabIndicatorProps={ tabIndcatorsProps }
                    >
                        { cellInfo.map(generateTab) }
                    </Tabs>
                </Box>
            </Container>
        </MainDiv>
    )
}

export default OurCells;