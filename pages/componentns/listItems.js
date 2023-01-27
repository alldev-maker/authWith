import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton style={{ backgroundColor: 'rgba(154, 255, 182, 0.08', padding: '10px 15px 10px 30px'}} value="Collections">
      <ListItemIcon >
        <DashboardIcon style={{ color: 'rgba(187, 202, 191, 0.85)' }} />
      </ListItemIcon>
      <ListItemText primary="Collections" />
    </ListItemButton>
    <ListItemButton style={{ padding: '10px 15px 10px 30px'}} value="Sessios">
      <ListItemIcon>
        <ShoppingCartIcon style={{ color: 'rgba(187, 202, 191, 0.85)' }} />
      </ListItemIcon>
      <ListItemText primary="Sessions" />
    </ListItemButton>
    <ListItemButton style={{ padding: '10px 15px 10px 30px'}} value="Users">
      <ListItemIcon>
        <PeopleIcon style={{ color: 'rgba(187, 202, 191, 0.85)' }} />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItemButton>
    <ListItemButton style={{ padding: '10px 15px 10px 30px'}} value="Docs">
      <ListItemIcon>
        <BarChartIcon style={{ color: 'rgba(187, 202, 191, 0.85)' }} />
      </ListItemIcon>
      <ListItemText primary="Docs" />
    </ListItemButton>

  </React.Fragment>
);