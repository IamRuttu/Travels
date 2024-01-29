import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

//css
import style from "../Header/style.module.css";

//images
import Image from "../../../Assets/Icon/logo.png";

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" className={style.appBar}>
        <Toolbar>
          <Grid className={style.navbar}>
            <Grid className={style.logo}>
              <img src={Image}  onClick={() => navigate("/")} />
                     </Grid>
            <Grid className={style.menu} style={{marginRight:"4%"}}>
              <ul>
                <li onClick={() => navigate("/")} style={{display:"flex", alignItems:"center"}} className={style.menuItem}><i class="fa-solid fa-house" style={{paddingRight:"10px"}}></i> Home</li>
                <li onClick={() => navigate("/about")} style={{display:"flex",  alignItems:"center"}} className={style.menuItem}> <i class="fa-solid fa-address-card" style={{paddingRight:"10px"}}></i>About</li>
                <li onClick={() => navigate("/services")} style={{display:"flex", alignItems:"center"}} className={style.menuItem}><i class="fa-solid fa-taxi" style={{paddingRight:"10px"}}></i>Services</li>
                <li onClick={() => navigate("/contact")} style={{display:"flex", alignItems:"center"}} className={style.menuItem}><i class="fa-solid fa-address-book" style={{paddingRight:"10px"}}></i> Contact</li>
              </ul>
            </Grid>
          </Grid>
          


        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

    </Box>
  );
}

DrawerAppBar.propTypes = {
  
  window: PropTypes.func,
};

export default DrawerAppBar;