import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import style from '../styles/Home.module.css'
import { BootstrapInput, theme } from "../styled/styled";
import { SignupTypo, SignhpLeftbarTypo, LabelTypo, ButtonTypo } from "../styled/typhos";

export default function SignIn() {
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
            <SignhpLeftbarTypo>
              Welcome Back
            </SignhpLeftbarTypo>
            <Typography component="h1" variant="h5" style={{
              marginLeft: '-15px', fontSize: '15px', color: '#E2DEF7',
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
            <Typography style={{
              marginLeft: '-15px', marginBottom: '35px',
              fontFamily: 'Urbanist',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: '16px',
              lineHeight: '19px',
            }}> Don &apos;t have an AuthWith account? <Link href="/signup" style={{ color: 'green', textDecoration: 'none' }}>Sign up here</Link></Typography>

            <SignupTypo>
              Sign in
            </SignupTypo>
            <div className={style.avatar}>
              <Avatar sx={{ m: 1, color: '#3F3F3F', background: 'white', marginLeft: '-20px' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography style={{
                fontFamily: 'Urbanist',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '16px',
                lineHeight: '19px',
              }} >Account Information</Typography>
            </div>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}  >
              <Grid container spacing={2} >
                <Grid xs={12}>
                  <FormControl variant="standard" style={{ width: '100%', marginBottom: '35px' }}>
                    <InputLabel shrink htmlFor="email">
                      <LabelTypo>
                        Business Email Address
                      </LabelTypo>
                    </InputLabel>
                    <BootstrapInput placeholder="loemipsum@gmail.com" id="email" style={{ width: '100%' }} />
                  </FormControl>
                </Grid>
                <Grid xs={12}>
                  <FormControl variant="outlined" style={{
                    width: '100%',
                    borderRadius: '4px',
                    backgroundColor: "#F2F2F2",
                    border: 'none',
                    color: '#7E7E7E',
                    padding: '0',
                    marginBottom: '25px'
                  }}>
                    <InputLabel shrink htmlFor="password" style={{
                      left: '-12px',
                      top: '-13px'
                    }}>
                      <LabelTypo>
                        password
                      </LabelTypo>
                    </InputLabel>
                    <OutlinedInput
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      placeholder="Password"
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  padding: '16px 20px',
                  gap: '10px',
                  width: '110px',
                  height: '49px',
                  background: '#07090D',
                  borderRadius: '4px',
                  marginBottom: '25px',
                  marginLeft: '-15px'
                }}
              >
                <ButtonTypo>
                  <Link style={{ textDecoration: 'none', color: 'inherit' }} href="/collections">
                    Login
                  </Link>
                </ButtonTypo>
              </Button>
            </Box>

          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}