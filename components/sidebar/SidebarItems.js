import * as React from 'react'
import { Box, Typography } from '@mui/material'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Layers from '@mui/icons-material/Layers'
import Session from '../../public/svg/sessionBlack.svg'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import { useRouter } from 'next/router'

function ListItemButtonMod({ propPath, sx, originPath, ...props }) {
  return (
    <ListItemButton
      sx={
        propPath === originPath
          ? {
              backgroundColor: 'rgba(154, 255, 182, 0.08)',
              padding: '10px 15px 10px 30px',
              color: '#9AFFB6',
              borderRight: 'solid #9AFFB6',
            }
          : { padding: '10px 15px 10px 30px', color: '#BBCABF' }
      }
      {...props}
    />
  )
}

export const MainListItems = ({ path }) => {
  const router = useRouter()

  const handleLink = (url) => {
    router.push(`/${url}`)
  }

  return (
    <div style={{ paddingTop: '90px' }}>
      <Box
        onClick={() => handleLink('collections')}
        sx={{ textDecoration: 'none' }}
      >
        <SidebarItemTypo>
          <ListItemButtonMod
            propPath={path}
            originPath="/collections"
            value="Collections"
          >
            <ListItemIcon>
              <Layers style={{ color: 'rgba(187, 202, 191, 0.85)' }} />
            </ListItemIcon>
            <ListItemText primary="Collections" />
          </ListItemButtonMod>
        </SidebarItemTypo>
      </Box>

      <Box
        onClick={() => handleLink('sessions')}
        sx={{ textDecoration: 'none' }}
      >
        <SidebarItemTypo>
          <ListItemButtonMod
            propPath={path}
            originPath="/sessions"
            value="Sessions"
          >
            <ListItemIcon>
              <Session style={{ color: 'rgba(187, 202, 191, 0.85)' }} />
            </ListItemIcon>
            <ListItemText primary="Sessions" />
          </ListItemButtonMod>
        </SidebarItemTypo>
      </Box>

      <Box onClick={() => handleLink('users')} sx={{ textDecoration: 'none' }}>
        <SidebarItemTypo>
          <ListItemButtonMod propPath={path} originPath="/users" value="Users">
            <ListItemIcon>
              <PermIdentityIcon
                style={{ color: 'rgba(187, 202, 191, 0.85)' }}
              />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItemButtonMod>
        </SidebarItemTypo>
      </Box>

      <Box onClick={() => handleLink('docs')} sx={{ textDecoration: 'none' }}>
        <SidebarItemTypo>
          <ListItemButtonMod propPath={path} originPath="/docs" value="Docs">
            <ListItemIcon>
              <MenuBookIcon style={{ color: 'rgba(187, 202, 191, 0.85)' }} />
            </ListItemIcon>
            <ListItemText primary="Docs" />
          </ListItemButtonMod>
        </SidebarItemTypo>
      </Box>
    </div>
  )
}

function SidebarItemTypo(props) {
  return (
    <Typography
      component="h1"
      variant="h4"
      style={{
        fontFamily: 'Urbanist',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '14px',
        lineHeight: '17px',
      }}
      {...props}
    />
  )
}
