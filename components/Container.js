import React, {useState} from 'react'
import {useRouter} from 'next/router'
import {ThemeProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import {MainListItems} from './sidebar/SidebarItems'
import {AvartarInfo} from './dashboard/UserInfo'
import {mdTheme, Drawer} from '../styled/styled'
import {Grid} from "@mui/material";
import style from '../styles/Home.module.css';

const Container = ({children}) => {
  const router = useRouter()
  const path = router.pathname
  return (
    <ThemeProvider theme={mdTheme}>
      <Grid
        container
        component="main"
        sx={{height: '100vh'}}
        spacing={0}
        style={{
          maxWidth: '1512px',
          margin: '0 auto',
        }}
      >
        <CssBaseline/>
        <Grid
          item
          sm={4}
          md={3}
          elevation={6}
          className={style.mobileInvisible}
          style={{position: 'relative'}}
        >
          <div
            style={{
              position: 'absolute',
              left: '0',
              top: '0',
              width: '100%',
              zIndex: '100',
              background: '#0E1218',
              padding: '46px 26.5px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Divider
              style={{
                width: '100%',
                height: '28px',
                background: 'rgba(69, 170, 97, 0.15)',
                marginBottom: '35px',
              }}
            />
            <Divider
              style={{
                borderColor: 'rgba(122, 136, 153, 0.28)',
                width: '100%',
              }}
            />
          </div>
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
            <IconButton>
              <ChevronLeftIcon/>
            </IconButton>
          </Toolbar>
          <List
            component="nav"
            style={{
              backgroundColor: ' #0E1218',
              height: '85vh',
              color: 'rgba(187, 202, 191, 0.85)',
            }}
          >
            <MainListItems path={path}/>
          </List>
          <AvartarInfo/>
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={9}>
          <Box sx={{width: '100%'}}>{children}</Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default Container
