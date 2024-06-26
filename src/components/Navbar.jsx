import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import BgImageCard from '../components/Card';
import Main_Logo from '../assets/main-logo.png';
import CustomButton from './Button';

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }} style={{ margin: "10px ", }}>
            <AppBar position="static" style={{ borderRadius: "10px", boxShadow: "none" }} >
                <Toolbar className='navBar' style={{ borderRadius: "10px" }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 0 }}
                    >
                        <img src={Main_Logo} className='navBarLogo' alt="bg-changer" />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='appName'>
                        Bg-Changer
                    </Typography>
                    <CustomButton icon="find" text="Find Me" classNameNavBar="headerBtn" />
                    <div className='socialMediaIcons'>
                        <a href="https://github.com/Farooq85-dev"><FaGithubSquare className='icon' /></a>
                        <a href="https://www.linkedin.com/in/muhammad-farooq-b71886295/"><FaLinkedin className='icon' /></a>
                        <a href="https://web.facebook.com/muhammadfarooqdev"><FaSquareFacebook className='icon' /></a>
                    </div>
                </Toolbar>
            </AppBar>
            <BgImageCard />
        </Box>
    );
}