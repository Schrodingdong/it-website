import React from 'react';

import {BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./Components/Accueil/Accueil";
import Event from "./pages/Events";
import MeetTheTeam from "./pages/MeetTheTeam";
import Itholic from "./pages/Itholic";

import { createTheme,ThemeProvider } from "@mui/material";
const theme = createTheme({
    palette:{
        common:{
            white: "#F9F7F7",
            black: "#112D4E"
        },
        primary:{
            light: "#649be3",
            main: "#3F72AF",
            dark: "#112D4E"
        },
        secondary:{
            main: "#E751FF"
        },
        text:{
            primary:"#112D4E",
            secondary: "rgba(17,45,78,75%)",
            disabled: "rgba(17,45,78,50%)",
            contrastPrimary:"#F9F7F7",
            contrastSecondary: "rgba(249,247,247,0.75)",
            contrastDisabled: "rgba(249,247,247,0.50)"
        }
    },
    typography:{
        bigTitle:{
            fontWeight: 800,
            fontStyle: "normal",
            fontSize: "7.25rem",
            WebkitBackgroundClip: "text!important",
            WebkitTextFillColor: "transparent",
            background: "linear-gradient(180deg, rgba(51,106,171,1) 0%, rgba(63,114,175,1) 100%)",
        },
        h1:{
            fontSize: "4.2rem",
            fontWeight: 800
        },
        h3:{
            fontWeight: 500
        },
        codeLike:{
            fontFamily: "Consolas",
            fontStyle: "normal",
            fontWeight: 300,
            fontSize: "2rem",
            letterSpacing: "0.3rem"
        },
        justifiedText:{
            fontSize: "1.5rem",
            fontWeight: 400,
            textAlign: "justify"
        }
    }
})

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Accueil/>} />
                    <Route path={"/event"} element={<Event/>} />
                    <Route path={"/meet-the-team"} element={<MeetTheTeam/>} />
                    <Route path={"/itholic"} element={<Itholic/>} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )

}
export default App;