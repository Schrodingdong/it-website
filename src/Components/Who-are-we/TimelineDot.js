import React from 'react';
import {Box, Typography} from "@mui/material";

const labelPlacement = (year) => {
    return (year%2 === 0)? '100%': '-150%';
}

const TimelineDot = (props) => {
    const year = props.year;
    return (
        <Box sx={{position:"relative"}}>

            <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18.0673" cy="17.5" r="17.5" fill="#003688"/>
            </svg>
            <Typography variant={"h3"} sx={{
                position:"absolute",
                top: labelPlacement(year),
                left:"50%",
                transform:"translateX(-50%)"
            }}>
                {year}
            </Typography>
        </Box>
    )
}

export default TimelineDot;