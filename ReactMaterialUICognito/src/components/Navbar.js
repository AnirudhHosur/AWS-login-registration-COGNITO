import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    formStyle: {
        width: '50%',
        margin: "auto",
        padding: 30,
        paddingTop: 20,
        boxShadow: "0px 0px 10px rgba(0,0,0,0.5)"
    },
    btn: {
        background: '#6c74cc'
    }
})

export default function Navbar() {

    const classes = useStyle(); 

    return (
        <Box sx={{ flexGrow: 1, mb: 4 }}>
        <AppBar position="static">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                BlogIt!
            </Typography>
            <Link to="/login">
            <Button color={'primary'} variant='contained' sx={{bgcolor: 'primary.light', '&:hover': {bgcolor: 'primary.dark'}}}>Login</Button>
            </Link>
            </Toolbar>
        </AppBar>
        </Box>
    );
}