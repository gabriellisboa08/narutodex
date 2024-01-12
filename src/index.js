import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import { LightTheme } from "./themes/Light";
import { DarkTheme } from "./themes/Dark";
import { useState } from "react";
import { light } from "@mui/material/styles/createPalette";
import { AppThemeProvider } from "./components/contexts/ThemeContext";



const Root = () => 
(ReactDOM.render(
    <React.StrictMode>
        <AppThemeProvider>
        <App />
        </AppThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
));


ReactDOM.render(<Root />, document.getElementById("root"));