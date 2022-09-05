import {Box, Container, Tabs, Tab, Typography} from "@mui/material";
import { motion } from 'framer-motion';
import PropTypes from "prop-types";
import {useState} from "react";


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

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
    var borderVertical = (tabValue === 0)? 0:"2px solid rgb(0,0,0,20%)";
    return {
        borderLeft: 2,
        borderColor: borderColor,
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
        <div style={{width:"100%", position:"relative"}}>
            <Container maxWidth={"xl"}>
                <Typography variant={"h1"} color={"primary.dark"} align={"right"}>
                    OUR <Typography variant={"span"} color={"primary"}>CELLS</Typography>
                </Typography>
                <Box sx={{ display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", marginTop:"80px", height:"700px", width:"60%" }}>
                    <TabPanel value={value} index={0}>
                        Item One
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Item four
                    </TabPanel>
                    <TabPanel  value={value} index={4}>
                        Item five
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        Item six
                    </TabPanel>
                    <TabPanel value={value} index={6}>
                        Item seven
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
                        <Tab sx={tabSX(value,3)} label="Sponsoring" {...a11yProps(1)}></Tab>
                        <Tab sx={tabSX(value,4)} label="Competitive programing" {...a11yProps(2)}></Tab>
                        <Tab sx={tabSX(value,5)} label="Media" {...a11yProps(1)}></Tab>
                        <Tab sx={tabSX(value,6)} label="Infosec" {...a11yProps(2)}></Tab>
                    </Tabs>
                </Box>
            </Container>
        </div>
    )
}

export default OurCells;