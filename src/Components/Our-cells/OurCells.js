import {Box, Container, Tabs, Tab, Typography} from "@mui/material";
import {useState} from "react";
import TabContent from "./TabContent";
import TabPanel from "../_UI/TabPanel";
import src from "./ic_sharp-model-training.png";



function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const tabSX = (selectedValue, tabValue) => {
    const isSelected = (selectedValue === tabValue)
    var width = (isSelected)? "100%":"90%";
    var borderColor = (isSelected)? "secondary":"divider";
    var background = (isSelected)? "linear-gradient(90deg,rgba(231,81,255,0.05) 0%, rgba(0,0,0,0) 100% )":null;
    var borderVertical = (tabValue === 0)? 0:"2px solid rgb(0,0,0,20%)";
    return {
        borderLeft: 2,
        borderColor: borderColor,
        background:background,
        alignItems:"start",
        maxWidth:"none",
        width: width,
        height:"100px",
        transition: ".4s",
        fontSize:"1.5rem",
        fontWeight:"400"
    }
}

const OurCells = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div style={{width:"100%", position:"relative", margin:"6rem 0"}}>
            <Container maxWidth={"xl"}>
                <Typography variant={"h1"} color={"primary.dark"} align={"right"}>
                    OUR <Typography variant={"span"} color={"primary"}>CELLS</Typography>
                </Typography>
                <Box sx={{ display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", marginTop:"80px", height:"700px", width:"60%" }}>
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
                    <TabPanel  value={value} index={4}>
                        <TabContent img={src}>
                             CP - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna sit amet accumsan tincidunt. Nullam ultricies hendrerit mi, eu tempor purus. Maecenas in turpis tellus. Vestibulum scelerisque sollicitudin velit vel aliquet. Integer non velit nec enim varius auctor vitae vel massa. Phasellus imperdiet molestie risus eget ullamcorper
                        </TabContent>
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        <TabContent img={src}>
                            MEDIA - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna sit amet accumsan tincidunt. Nullam ultricies hendrerit mi, eu tempor purus. Maecenas in turpis tellus. Vestibulum scelerisque sollicitudin velit vel aliquet. Integer non velit nec enim varius auctor vitae vel massa. Phasellus imperdiet molestie risus eget ullamcorper
                        </TabContent>
                    </TabPanel>
                    <TabPanel value={value} index={6}>
                        <TabContent img={src}>
                            INFOSEC - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna sit amet accumsan tincidunt. Nullam ultricies hendrerit mi, eu tempor purus. Maecenas in turpis tellus. Vestibulum scelerisque sollicitudin velit vel aliquet. Integer non velit nec enim varius auctor vitae vel massa. Phasellus imperdiet molestie risus eget ullamcorper
                        </TabContent>
                    </TabPanel>
                    <Tabs
                        orientation="vertical"
                        sx={{
                            width:"37%",
                            position:"absolute",
                            right:0,
                            top:"192px",
                            "& [aria-label]":{
                                alignItems:"end"
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
                        <Tab sx={tabSX(value,0)} label="Training" {...a11yProps(0)}></Tab>
                        <Tab sx={tabSX(value,1)} label="Design" {...a11yProps(1)}></Tab>
                        <Tab sx={tabSX(value,2)} label="Event" {...a11yProps(2)}></Tab>
                        <Tab sx={tabSX(value,3)} label="Sponsoring" {...a11yProps(3)}></Tab>
                        <Tab sx={tabSX(value,4)} label="Competitive programing" {...a11yProps(4)}></Tab>
                        <Tab sx={tabSX(value,5)} label="Media" {...a11yProps(5)}></Tab>
                        <Tab sx={tabSX(value,6)} label="Infosec" {...a11yProps(6)}></Tab>
                    </Tabs>
                </Box>
            </Container>
        </div>
    )
}

export default OurCells;