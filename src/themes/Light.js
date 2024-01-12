import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
  
    palette: {
        mode:"light",
        primary : {
            main: '#FF6D00',
            dark: '#FF6000',
            light: '#ff7900',
            contrastText : '#FFFFFF',
        }, secondary: {
          main: '#FF6D00',
            dark: '#FF6000',
            light: '#ff7900',
            contrastText : '#FFFFFF',
          },
          background: {
            paper: '#ffffff',
            default: '#f7f6f3',
          }
        }
});



