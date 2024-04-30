import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Avatar } from '@mui/material';
import { Logout } from '@mui/icons-material';
import axiosObj from '../../axios/axiosConfig';

export default function Header() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    handleMenuClose();
    try {
      const accessToken = window.localStorage.getItem('csrf-token');
      const resp = await axiosObj.post("/api/logout", null, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      if (resp.status === 200) {
        window.localStorage.removeItem("csrf-token");
        window.sessionStorage.removeItem("user");
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'red' }}>
      <Toolbar>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src="./images/logo2.jpg" alt="Logo" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '16px' }} />
        </Link>
        <div style={{ flexGrow: 1 }} />
        <IconButton
          aria-label="user-menu"
          aria-controls="user-menu"
          aria-haspopup="true"
          onClick={handleMenuOpen}
          color="inherit"
        >
          <Avatar src="./images/profile.png" alt="Avatar" />
        </IconButton>
        <Menu
          id="user-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose} component={Link} to="/settings">
            <i className="fa-solid fa-gear me-1 text-cyan-800"></i>Settings
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <Logout fontSize="small" sx={{ mr: 1 }} />
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
