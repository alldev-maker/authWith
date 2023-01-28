import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { MainListItems } from '../componentns/sidebar-items';
import { BoardHeader } from "../componentns/board-header";
import {Collection} from '../componentns/collection-tree'

const drawerWidth = 276;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const initialState = { 1: false, 2: false, 3: false, 0: false }
  const [dropdownState, setDropdownState] = React.useState(initialState)
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer variant="permanent" open={open} >
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
            style={{
              backgroundColor: ' #0E1218'
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider style={{
            borderColor: 'rgba(122, 136, 153, 0.28)',
            width: "230px",
            top: '109px',
            right: '50%',
            transform: 'translate(50%)',
            position: 'absolute',
            zIndex: '123',
          }} />
          <List component="nav"
            style={{
              backgroundColor: ' #0E1218',
              height: '93.2vh',
              color: 'rgba(187, 202, 191, 0.85)'
            }}>
            <MainListItems/>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: 'white',
            flexGrow: 1,
            overflow: 'auto',
            padding:'32px'
          }}
          >
          <BoardHeader/>
            <Divider style={{
            top: '29px',
            position:'relative',
            borderColor: 'rgba(122, 136, 153, 0.28)',
            marginBottom:'85px'
          }} />
          <div style={{border:"1px solid #EAECF0", padding:'20px', borderRadius:"8px", boxShadow:'0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);'}}>
          {[1,2,3,4].map((item, index) => <Collection key={item} initialState={initialState} setDropdownState={setDropdownState} dropdownState={dropdownState} index={index}/>)}
          </div>

        </Box>

      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}