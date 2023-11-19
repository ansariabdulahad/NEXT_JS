import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {

    const pathname = usePathname();

    const design = (
        <>
            <AppBar position="static">
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Toolbar>
                        <Typography variant="h4">Next App</Typography>
                    </Toolbar>
                    <Stack direction={'row'}>
                        <Toolbar>
                            <Link href={'/'}
                                className={pathname === '/' ? 'bg-danger p-3 px-3' : ''}
                            >Home</Link>
                        </Toolbar>
                        <Toolbar>
                            <Link href={'/courses'}
                                className={pathname === '/courses' ? 'bg-danger p-3 px-3' : ''}
                            >Courses</Link>
                        </Toolbar>
                        <Toolbar>
                            <Link href={'/blog'}
                                className={pathname === '/blog' ? 'bg-danger p-3 px-3' : ''}
                            >Blog</Link>
                        </Toolbar>
                        <Toolbar>
                            <Link href={'/login'}
                                className={pathname === '/login' ? 'bg-danger p-3 px-3' : ''}
                            >Login</Link>
                        </Toolbar>
                    </Stack>
                </Stack>
            </AppBar>
        </>
    );
    return design;
}

export default Navbar;