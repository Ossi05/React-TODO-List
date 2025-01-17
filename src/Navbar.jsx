import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton, Link } from '@mui/material';
export default function Navbar({ title }) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <Link href="https://github.com/Ossi05/React-TODO-List" rel="noreferrer noopener" target="_blank" color="inherit">
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <GitHubIcon />
                        </IconButton>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}