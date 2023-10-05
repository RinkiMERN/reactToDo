import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EditNoteIcon from '@mui/icons-material/EditNote';

const Navbar = () => {

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                        <EditNoteIcon size="lg" />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,

                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            REACT TODO APP
                        </Typography>
                    </div>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"

                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}

                        >

                            <MenuItem >
                                <Typography textAlign="center">setting</Typography>
                            </MenuItem>

                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}



export default Navbar
