import React, {useEffect, useState} from 'react';
import {Box, Typography} from "@mui/material";
import { motion } from "framer-motion"
import styles from "./TimelineDot.module.css"


const labelPlacement = (year) => {
    return (year%2 === 0)? '150%': '-200%';
}
const dotAnimation = (scale) => {
    return {
        initial:{
            transform:'scale('+ 1 +')'
        },
        animate:{
            transform:'scale('+ scale +')'
        }
    }
}
const toggleCard = (props) => {
    props.setCardYear(
        (props.cardYear === null || props.cardYear !== props.year)? props.year:null
    );
}

const TimelineDot = (props) => {
    const [scale, setScale] = useState(1);

    const isSelected = (props.cardYear === props.year);
    const year = props.year;
    useEffect(() => {
        (isSelected)? setScale(1.3):setScale(1)
    },[isSelected])
    return (
            <Box sx={{position:"relative"}}>
                <motion.div {... dotAnimation(scale)}
                            onMouseEnter={() => setScale(1.5)}
                            onMouseLeave={() => {
                                (isSelected)? setScale(1.3):setScale(1)
                            }}
                            onClick={() => toggleCard(props)}
                            className={styles.circle +" "+ ( (isSelected)? styles.selected:'')}>
                </motion.div>
                <Typography variant={"h3"} sx={{
                    position:"absolute",
                    top: labelPlacement(year),
                    left:"50%",
                    transform:"translateX(-50%)"
                }} >
                    {year}
                </Typography>
            </Box>
        
    )
}

export default TimelineDot;