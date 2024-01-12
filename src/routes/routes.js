import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "../pages/Main";
import Vilages from "../pages/Vilages";
import Drawer from "../components/Drawer";
import Footer from "../components/Footer";
import { Box } from "@mui/material";

const Rotas = ({toggleTheme}) => {


    
return(
    <BrowserRouter>
        <Box width={'100%'} display={'flex'} >
            <Drawer toggleTheme={toggleTheme} />
            <Box marginTop={'64px'}>
                <Routes>
                    <Route path="/" exact element={<MainPage />} />
                    <Route path="/vilages" exact element={<Vilages />} />
                </Routes>
            </Box>
        </Box>
        <Footer />
    </BrowserRouter>
);
}

export default Rotas;
