import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate, Link } from 'react-router-dom';

const pages = ['Lend', 'Borrow', 'Buy RCoin'];
const pages1 = ['How we work', 'Contact us', 'Manage Loans', 'Help'];
const settings = ['Profile', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();

  function openLend(event) {
    event.preventDefault();

    navigate('/listing');
  }

  function openBorrow(event) {
    event.preventDefault();

    navigate('/borrow');
  }

  function openBuycoin(event) {
    event.preventDefault();

    navigate('/');
  }

  function openDashboard(event) {
    event.preventDefault();

    navigate('/dashboard');
  }

  function openWork(event) {
    event.preventDefault();

    navigate('/work');
  }

  function openContact(event) {
    event.preventDefault();

    navigate('/contact');
  }

  return (
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <PaidRoundedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            P2P
          </Typography>

          {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: '10', md: 'flex' } }}>
            <Button
                onClick={openLend}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Lend money
            </Button>
            <Button
                onClick={openBorrow}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Borrow money
            </Button>
            <Button
                onClick={openBuycoin}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Buy Rcoin
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: '10', md: 'flex' } }}>
            <Button
                onClick={openDashboard}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Dashboard
            </Button>
            <Button
                onClick={openWork}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                How we Work
            </Button>
            <Button
                onClick={openContact}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Contact Us
            </Button>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;