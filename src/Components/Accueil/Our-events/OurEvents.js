import {Box, Container, Tab, Tabs, Typography} from "@mui/material";
import TabContent from "../Our-cells/TabContent";
import src from "../static/ic_sharp-model-training.png";
import TabPanel from "../../_UI/TabPanel";
import {useState} from "react";

import styles from "./OurEvent.module.css"



function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const ITHOLICSX = {
    borderColor: "secondary",
    backgroundImage: "linear-gradient(47deg, var(--primary-dark) 100%, rgba(231,81,255,1) 100%)",
    color:"white!important",

}

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


const OurEvents = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div style={{width:"100%", position:"relative", margin:"200px 0"}}>
            <Container maxWidth={"xl"}>
                <Typography variant={"h1"} color={"primary.dark"} align={"left"}>
                    OUR <Typography variant={"span"} color={"primary"}>EVENTS</Typography>
                </Typography>
                <Box sx={{ display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", marginTop:"80px", marginLeft:"auto",  height:"600px", width:"60%" }}>
                    <Tabs
                        orientation="vertical"
                        sx={{
                            width:"37%",
                            position:"absolute",
                            left:0,
                            top:"192px",
                            "& [aria-label]":{
                                alignItems:"start"
                            }
                        }}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="Our cells"
                        value={value}
                        onChange={handleChange}
                        TabIndicatorProps={{
                            sx:{
                                display: "none"
                            }
                        }}
                    >
                        <Tab sx={tabSX(value,0)} className={(value==0)? styles.itholicSelected:null} label="ITHOLIC" {...a11yProps(0)}></Tab>
                        <Tab sx={tabSX(value,1)} label="SecureIT" {...a11yProps(1)}></Tab>
                        <Tab sx={tabSX(value,2)} label="Code Challenge" {...a11yProps(2)}></Tab>
                        <Tab sx={tabSX(value,3)} label="Ewa hadi kdba bayna" {...a11yProps(3)}></Tab>
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <TabContent img={src}>
                            TRAINING - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna sit amet accumsan tincidunt. Nullam ultricies hendrerit mi, eu tempor purus. Maecenas in turpis tellus. Vestibulum scelerisque sollicitudin velit vel aliquet. Integer non velit nec enim varius auctor vitae vel massa. Phasellus imperdiet molestie risus eget ullamcorper
                        </TabContent>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <TabContent img={src}>
                            DESIGN - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna sit amet accumsan tincidunt. Nullam ultricies hendrerit mi, eu tempor purus. Maecenas in turpis tellus. Vestibulum scelerisque sollicitudin velit vel aliquet. Integer non velit nec enim varius auctor vitae vel massa. Phasellus imperdiet molestie risus eget ullamcorper
                        </TabContent>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <TabContent img={src}>
                            EVENT - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna sit amet accumsan tincidunt. Nullam ultricies hendrerit mi, eu tempor purus. Maecenas in turpis tellus. Vestibulum scelerisque sollicitudin velit vel aliquet. Integer non velit nec enim varius auctor vitae vel massa. Phasellus imperdiet molestie risus eget ullamcorper
                        </TabContent>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <TabContent img={src}>
                            SPONSORING - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna sit amet accumsan tincidunt. Nullam ultricies hendrerit mi, eu tempor purus. Maecenas in turpis tellus. Vestibulum scelerisque sollicitudin velit vel aliquet. Integer non velit nec enim varius auctor vitae vel massa. Phasellus imperdiet molestie risus eget ullamcorper
                        </TabContent>
                    </TabPanel>

                </Box>
            </Container>
        </div>
    )
}

export default OurEvents;