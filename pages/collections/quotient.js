import React from 'react';
import {Menu} from 'antd';

import CollectionsHolder from './index';
import Container from '../../components/Container';
import Box from '@mui/material/Box'
import {BoardHeader} from '../../components/dashboard/BoardHeader'
import QuotientStyle from '../../styles/quotient.module.scss';
import CollectionsImage from '../../public/svg/collections.svg';
import SessionsImage from '../../public/svg/sessions.svg';
import UsersImage from '../../public/svg/users.svg';
import DocsImage from '../../public/svg/docs.svg';
import {AppBar, MenuItem, Toolbar} from "@mui/material";
import style from "../../styles/Home.module.css";
import {Collection} from "../../components/dashboard/CollectionTree";

const Quotient = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
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
                <Menu.SubMenu key={1}>
                  page
                </Menu.SubMenu>
                <Menu.SubMenu key={2}>
                  setting
                </Menu.SubMenu>
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
          Quotient
        </div>
      </Box>
    </Container>
  );
};
export default Quotient;