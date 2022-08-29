import React from 'react';
import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from './Copyright';


const theme = createTheme({
    palette: {
        primary: {
            main: '#607d8b',
            light: '#eceff1',
            dark: '#37474f',
        },
        blue: {
            main: '#2196f3',
            contrastText: 'white'
        },
        grey: {
            main: '#9e9e9e',
            dark: '#212121',
            contrastText: '#fafafa',
        }
    },
});


export default function Errorlayout() {

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Outlet />
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}