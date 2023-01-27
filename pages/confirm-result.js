import * as React from 'react';
import Image from 'next/image';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import confirmImg from '../public/img/confirmed.png'
import style from '../styles/Home.module.css'
import { theme } from "../styled/styled";

export default function ConfirmResult() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const [showPassword, setShowPassword] = React.useState(false);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }} spacing={0} style={{ maxWidth: '1512px', margin: '0 auto' }}>
        <Grid
          item
          xs={false}
          sm={5}
          md={4}
          sx={{
            backgroundImage: 'url(./img/login.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#0E1218',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundSize: 'auto',
            backgroundPositionY: 'bottom',
          }}
        >
          <div className={style.greetingTypo}>
            <Typography component="h1" variant="h4" style={{ marginLeft: '-15px', fontSize: '26px', color: 'white', paddingBottom: '13.6px' }}>
              Create an <span>AuthWith</span> account
            </Typography>
            <Typography component="h1" variant="h5" style={{ marginLeft: '-15px', fontSize: '15px', color: '#E2DEF7' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={7} md={8} component={Paper} elevation={6} square style={{ paddingRight: '20px', paddingLeft: '20px' }}>
          <Box
            sx={{
              my: 3,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
            }}
          >

            <Typography component="h1" variant="h4" style={{ marginLeft: '-15px', marginTop: "50px", color: '#262626' }}>
              Sign up Successful
            </Typography>
            <div className={style.avatar}>
              <Typography style={{ marginTop: '20px', marginLeft: '-5px', color: '#5F5F5F' }}>Your email address has been verified</Typography>
              <FormGroup style={{ paddingTop: '17px', marginLeft: '5px' }}>
                <FormControlLabel control={<Checkbox defaultChecked style={{ color: ' #57D57A', }} />} />
              </FormGroup>
            </div>
          </Box>
          <div className={style.confirmImg}>
            <Image src={confirmImg} alt="confirm" />
          </div>
        </Grid>
      </Grid>
    </ThemeProvider >
  );
}