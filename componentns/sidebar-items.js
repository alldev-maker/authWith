import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Layers from '@mui/icons-material/Layers';
import Cloud from '@mui/icons-material/Cloud';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export const MainListItems = () => {
  return <div style={{ paddingTop: "90px" }}>
    <ListItemButton style={{ backgroundColor: 'rgba(154, 255, 182, 0.08', padding: '10px 15px 10px 30px' }} value="Collections">
      <ListItemIcon >
        <Layers style={{ color: 'rgba(187, 202, 191, 0.85)' }} />
      </ListItemIcon>
      <ListItemText primary="Collections" />
    </ListItemButton>
    <ListItemButton style={{ padding: '10px 15px 10px 30px' }} value="Sessios">
      <ListItemIcon>
        <Cloud style={{ color: 'rgba(187, 202, 191, 0.85)' }} />
      </ListItemIcon>
      <ListItemText primary="Sessions" />
    </ListItemButton>
    <ListItemButton style={{ padding: '10px 15px 10px 30px' }} value="Users">
      <ListItemIcon>
        <PermIdentityIcon style={{ color: 'rgba(187, 202, 191, 0.85)' }} />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItemButton>
    <ListItemButton style={{ padding: '10px 15px 10px 30px' }} value="Docs">
      <ListItemIcon>
        <MenuBookIcon style={{ color: 'rgba(187, 202, 191, 0.85)' }} />
      </ListItemIcon>
      <ListItemText primary="Docs" />
    </ListItemButton>

  </div>
};