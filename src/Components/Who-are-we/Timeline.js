import {Box} from "@mui/material";
import TimelineDot from "./TimelineDot";

const Timeline = () => {
    return (
        <Box sx={{ width:"100%", position:"relative", display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center" }}>
            <TimelineDot year={ 2018 }/>
            <TimelineDot year={ 2019 }/>
            <TimelineDot year={ 2020 }/>
            <TimelineDot year={ 2021 }/>
            <TimelineDot year={ 2022 }/>
            <svg style={{
                position:"absolute",
                width:"100%",
                top:"0",
                left:"50%",
                transform:"translateX(-50%)"
            }}>
                <line x1="0" y1="17.7688" x2="1920" y2="17.7689" stroke="#003688" stroke-width="2"/>
            </svg>


        </Box>
    )
}

export default Timeline;