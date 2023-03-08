import * as React from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import {BoardHeader} from '../../components/dashboard/BoardHeader'
import {Collection} from '../../components/dashboard/CollectionTree'
import {AppBar, Menu, MenuItem, Toolbar} from "@mui/material";
import style from '../../styles/Home.module.css';
import Container from '../../components/Container';

function DashboardContent() {
  const initialState = {1: false, 2: false, 3: false, 0: false}
  const [dropdownState, setDropdownState] = React.useState(initialState)

  return (
    <Container>
      <Box
        component="main"
        sx={{
          backgroundColor: 'white',
          flexGrow: 1,
          overflow: 'auto',
          padding: '32px',
        }}
      >
        <BoardHeader />
        <AppBar position="static" className={style.mobileVisible} style={{ background: 'white', boxShadow: 'none'}}>
          <Toolbar disableGutters>
            <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
              <Menu>
                <MenuItem key={1}>
                  page
                </MenuItem>
                <MenuItem key={2}>
                  setting
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
        <div
          style={{
            border: '1px solid #EAECF0',
            padding: '20px',
            marginTop: '33px',
            borderRadius: '8px',
            boxShadow:
              '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
          }}
        >
          {[1, 2, 3, 4].map((item, index) => (
            <Collection
              key={item}
              initialState={initialState}
              setDropdownState={setDropdownState}
              dropdownState={dropdownState}
              index={index}
            />
          ))}
        </div>
      </Box>
    </Container>
  )
}

export default function Dashboard() {
  return <DashboardContent/>
}
