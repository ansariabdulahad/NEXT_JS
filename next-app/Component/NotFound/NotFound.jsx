import Link from 'next/link';
import './notFound.css';
import { Box, Stack } from "@mui/material";

const NotFound = () => {
    const design = (
        <>
            <Stack
                className="body"
            >
                <Box className="not-found">
                    <h2><span>Oops!</span> Page not found.</h2>
                    <h1>404</h1>
                    <p className='mb-3'>We can't find the page you're looking for.</p>
                    <Link href='/' className='link'>Go Back</Link>
                </Box>
            </Stack>
        </>
    );
    return design;
}

export default NotFound;