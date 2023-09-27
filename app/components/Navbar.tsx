import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from 'next/link';

function ResponsiveAppBar() {

    return (
        <AppBar role='toolbar' position="static" sx={{ backgroundColor: 'white', position: 'fixed', zIndex: 10 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link role='link' href="/" style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography
                            variant="h6"
                            noWrap
                            color="primary"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                textDecoration: 'none',
                            }}
                        >
                            Podcaster
                        </Typography>
                    </Link>

                    <Link role='link' href="/" style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography
                            variant="h5"
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'blue',
                                textDecoration: 'none',
                            }}
                        >
                            Podcaster
                        </Typography>
                    </Link>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;