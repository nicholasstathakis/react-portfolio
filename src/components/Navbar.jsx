import { AppBar, Box, Toolbar, Typography, Link } from "@mui/material";

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >   
                        Nicholas Stathakis
                    </Typography>
                    <Link
                        variant="h6"
                        href="mailto:nicholas.stathakis1@gmail.com"
                        align="end"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >   
                        nicholas.stathakis1@gmail.com
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}