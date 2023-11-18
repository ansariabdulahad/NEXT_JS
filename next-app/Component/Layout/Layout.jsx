'use client'

import { Paper, ThemeProvider, createTheme } from "@mui/material";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {

    const them = createTheme({
        palette: {
            mode: 'light'
        }
    });

    const deisgn = (
        <>
            <ThemeProvider theme={them}>
                <Paper sx={{ minHeight: '100vh' }}>
                    <Navbar />
                    {children}
                    <Footer />
                </Paper>
            </ThemeProvider>
        </>
    );
    return deisgn;
}

export default Layout;