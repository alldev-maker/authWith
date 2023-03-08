import React from 'react';
import {ThemeProvider} from '@mui/material/styles';
import {theme} from "../styled/styled";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import style from "../styles/Home.module.css";
import {SignupLeftbarTypo, SignupTypo} from "../styled/typhos";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import {Box} from "@mui/material";
import CheckGreen from "../public/svg/checkGreen.svg";
import SignUpSuccessImage from "../public/svg/signUpSuccess.svg";
import Link from "@mui/material/Link";

const signSuccess = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{height: '100vh'}} spacing={0}
            style={{maxWidth: '1512px', margin: '0 auto'}}>
        <CssBaseline/>
        <Grid
          item
          className={style.mobileInvisible}
          xs={false}
          sm={5}
          md={4}
          sx={{
            backgroundImage: 'url(./img/login.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#0E1218',
            backgroundPosition: 'center',
            backgroundSize: 'auto',
            backgroundPositionY: 'bottom',
          }}
        >
          <div className={style.greetingTypo}>
            <SignupLeftbarTypo>
              Create an <span>AuthWith</span> account
            </SignupLeftbarTypo>
            <Typography component="h1" variant="h5" style={{
              marginLeft: '-15px',
              color: '#E2DEF7',
              fontFamily: 'Urbanist',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: '16px',
              lineHeight: '19px',
            }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={7} md={8} component={Paper} elevation={6} square
              style={{paddingRight: '20px', paddingLeft: '10px'}}>
          <Box
            sx={{
              my: 3, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'left',
            }}
          >
            <SignupTypo
              style={{
                fontSize: '28px',
                lineHeight: '33.6px',
                paddingBottom: '12px',
                borderBottom: '1px solid #E9E9E9',
                fontFamily: 'Urbanist',
              }}
            >
              Sign Up Successful
            </SignupTypo>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <p>
                Your email address has been verified
              </p>
              <CheckGreen style={{marginLeft: '9.33px'}}/>
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px'}}>
              <SignUpSuccessImage/>
            </div>
            <Typography
              className={style.mobileInvisible}
              style={{
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '19px',
              }}>Already have an AuthWith account? <Link href="/login" style={{color: 'green', textDecoration: 'none'}}>Login
              here</Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default signSuccess;