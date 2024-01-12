import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Rotas from "./routes/routes";
import { useAppThemeContext } from "./components/contexts/ThemeContext";
import "./App.css";
const App = () => {

const {toggleTheme} = useAppThemeContext()

    return (
        <div>
            <Rotas toggleTheme={toggleTheme} />
        </div>
    );
}

export default App;
