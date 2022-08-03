import React from 'react'
import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

const GuestLayout = () => {
    return (
        <ThemeProvider theme={theme}>
            <Outlet />
        </ThemeProvider>
    )
}

export default GuestLayout