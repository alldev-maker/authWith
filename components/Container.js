import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { MainListItems } from './sidebar/SidebarItems'
import { AvartarInfo } from './dashboard/UserInfo'
import { mdTheme, Drawer } from '../styled/styled'

const Container = ({ children }) => {
  const router = useRouter()
  const path = router.pathname
  const [open, setOpen] = useState(true)
  const toggleDrawer = () => {
    setOpen(!open)
  }
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer variant="permanent" open={open} sx={{ position: 'fixed' }}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
            style={{
              backgroundColor: ' #0E1218',
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider
            style={{
              width: '223px',
              height: '28px',
              background: 'rgba(69, 170, 97, 0.15)',
              position: 'absolute',
              top: '50px',
              zIndex: '38',
              right: '50%',
              transform: 'translate(50%)',
            }}
          />
          <Divider
            style={{
              borderColor: 'rgba(122, 136, 153, 0.28)',
              width: '230px',
              top: '109px',
              right: '50%',
              transform: 'translate(50%)',
              position: 'absolute',
              zIndex: '123',
            }}
          />
          <List
            component="nav"
            style={{
              backgroundColor: ' #0E1218',
              height: '85vh',
              color: 'rgba(187, 202, 191, 0.85)',
            }}
          >
            <MainListItems path={path} />
          </List>
          <AvartarInfo />
        </Drawer>
        <Box sx={{ marginLeft: '20%', width: '100%' }}>{children}</Box>
      </Box>
    </ThemeProvider>
  )
}

export default Container
