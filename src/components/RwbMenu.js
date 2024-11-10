import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { IconButton, useMediaQuery } from '@mui/material';
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import { useNavigate } from "react-router-dom";
import { useTheme } from '@mui/material/styles';

export default function AnchorTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const navigate = useNavigate();
  const theme = useTheme();
  const isMediumUp = useMediaQuery(theme.breakpoints.up('md'));

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const handleNavigation = (path) => {
    navigate(path); 
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['HLAVNÍ STRÁNKA', 'PŘIDAT PRODUKT', 'DATA'].map((text, index) => {
         
          const paths = ['/', '/write', '/read'];
          
          return (
            <ListItem key={text} disablePadding>

              <ListItemButton onClick={() => handleNavigation(paths[index])}>
                <ListItemText primary={text} />
              </ListItemButton>

            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <div>
        {!isMediumUp && (
        [''].map((anchor) => (
            <React.Fragment key={anchor}>

                <IconButton aria-label="reorder" onClick={toggleDrawer(anchor, true)}>
                    <ReorderOutlinedIcon />
                </IconButton>

                <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                >
                    {list(anchor)}
                </Drawer>

            </React.Fragment>
        ))
        )}
    </div>
  );
}