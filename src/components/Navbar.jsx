import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import ColourTabs from "./ColourTabs";

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
                        Nicholas Stathakis - Portfolio
                    </Typography>
                    <Box sx={{width: { xs: '100vw', sm: 'auto' }}}>
                        <ColourTabs />

                    </Box>

                </Toolbar>
            </AppBar>

            <Toolbar />
        </Box>
    );
}