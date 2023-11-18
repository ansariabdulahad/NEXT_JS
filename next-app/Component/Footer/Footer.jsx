import { AppBar } from "@mui/material";

const Footer = () => {
    const deisgn = (
        <>
            <AppBar
                position="static"
                sx={{
                    py: 20,
                    textAlign: "center",
                    fontSize: '50px'
                }}
            >
                Footer
            </AppBar>
        </>
    );
    return deisgn;
}

export default Footer;