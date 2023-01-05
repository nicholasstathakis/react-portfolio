import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import FullWidthTab from "./FullWidthTab";

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
                    <Box sx={{ width: { xs: '100vw', sm: 'auto' } }}>
                        <FullWidthTab />
                    </Box>
                    

                </Toolbar>
            </AppBar>

            <Toolbar />
        </Box>
    );
}