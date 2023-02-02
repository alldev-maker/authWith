import React from 'react'
import { CssBaseline, Drawer } from '@mui/material'

const SideBar = () => {
  return (
    <>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
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
    </>
  )
}

export default SideBar
