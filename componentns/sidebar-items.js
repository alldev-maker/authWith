import * as React from 'react';
import { Link } from "@mui/material";
import { useRouter } from "next/router";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Layers from '@mui/icons-material/Layers';
import Cloud from '@mui/icons-material/Cloud';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MenuBookIcon from '@mui/icons-material/MenuBook';

function ListItemButtonMod({ propPath, sx, originPath, ...props }) {
  return (
    <ListItemButton sx={(propPath === originPath) ? { backgroundColor: 'rgba(154, 255, 182, 0.08)', padding: '10px 15px 10px 30px', color: "#9AFFB6", borderRight: 'solid #9AFFB6' } : { padding: '10px 15px 10px 30px', color: '#BBCABF' }} {...props} />
  )
}

export const MainListItems = ({ path }) => {
  return <div style={{ paddingTop: "90px" }}>

    <Link href='' sx={{ textDecoration: 'none' }}>
      <ListItemButtonMod propPath={path} originPath='/' value="Collections">
        <ListItemIcon >
          <Layers style={{ color: 'rgba(187, 202, 191, 0.85)' }} />
        </ListItemIcon>
        <ListItemText primary="Collections" />
      </ListItemButtonMod>
    </Link>

    <Link href='/sessions' sx={{ textDecoration: 'none' }}>
      <ListItemButtonMod propPath={path} originPath='/sessions' value="Sessions">
        <ListItemIcon>
          <Cloud style={{ color: 'rgba(187, 202, 191, 0.85)' }} />
        </ListItemIcon>
        <ListItemText primary="Sessions" />
      </ListItemButtonMod>
    </Link>

    <Link href='/users' sx={{ textDecoration: 'none' }}>
      <ListItemButtonMod propPath={path} originPath='/users' value="Users">
        <ListItemIcon>
          <PermIdentityIcon style={{ color: 'rgba(187, 202, 191, 0.85)' }} />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItemButtonMod>
    </Link>

    <Link href='/docs' sx={{ textDecoration: 'none' }}>
      <ListItemButtonMod propPath={path} originPath='/docs' value="Docs">
        <ListItemIcon>
          <MenuBookIcon style={{ color: 'rgba(187, 202, 191, 0.85)' }} />
        </ListItemIcon>
        <ListItemText primary="Docs" />
      </ListItemButtonMod>
    </Link>
  </div>
};