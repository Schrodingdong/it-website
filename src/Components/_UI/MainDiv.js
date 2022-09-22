import {styled} from "@mui/material/styles";
import {useState} from "react";

const MainDiv = ({ children,style }) => {
    // Styling
    const divStyle = {
        width:"100%",
        position:"relative",
        margin:"25px 0 25px 0",
        padding:"25px 0 25px 0",
        ...style
    }

    return (
        <div style={ divStyle }>
            { children }
        </div>
    )
}

export default MainDiv;