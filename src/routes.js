import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./pages/Main";

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<MainPage />} />
        </Routes>
    </BrowserRouter>
);

export default Rotas;
