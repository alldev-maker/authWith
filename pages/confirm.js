import { jsx } from '@emotion/react'
import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import InputBase from '@mui/material/InputBase';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import style from '../styles/Home.module.css'
const theme = createTheme();
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    marginBottom: "25px",
    backgroundColor: theme.palette.mode === 'light' ? "#F2F2F2" : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 14,
    width: '100%',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));
export default function SignInSide({ props }) {
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
        <CssBaseline />
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
            <Typography component="h1" variant="h4" style={{ fontSize: '26px', color: 'white', paddingBottom: '13.6px' }}>
              Create an <span>AuthWith</span> account
            </Typography>
            <Typography component="h1" variant="h5" style={{ fontSize: '15px', color: '#E2DEF7' }}>
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
            <Typography style={{ marginLeft: '-15px', marginBottom: '35px' }}>Already have an AuthWith account? <Link href="/login" style={{ color: 'green', textDecoration: 'none' }}>Login here</Link></Typography>

            <Typography component="h1" variant="h4" style={{ marginLeft: '-15px' }}>
              Sign in
            </Typography>
            <div className={style.avatar}>
              <Avatar sx={{ m: 1, color: '#3F3F3F', background: 'white', marginLeft: '-20px' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography >Account Information</Typography>
            </div>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}  >
              <Grid container spacing={2} >
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <Input
                    id="email"
                    style={{ textAlign: 'right' }}
                    startAdornment={<InputAdornment position="start">Business email name</InputAdornment>}
                  />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <Input
                    id="fName"
                    style={{ textAlign: 'right' }}
                    startAdornment={<InputAdornment position="start">First name</InputAdornment>}
                  />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <Input
                    id="lName"
                    style={{ textAlign: 'right' }}
                    startAdornment={<InputAdornment position="start">Last name</InputAdornment>}
                  />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <Input
                    id="country"
                    style={{ textAlign: 'right' }}
                    startAdornment={<InputAdornment position="start">Country</InputAdornment>}
                  />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <Input
                    id="company"
                    classes={{ textAlign: 'right', marginBottom: '15px' }}
                    startAdornment={<InputAdornment position="start">Company</InputAdornment>}
                  />
                </FormControl>
              </Grid>
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked style={{ color: '#3F3F3F', }} />} label="Email Verify" style={{ marginLeft: "-10px" }} />
              </FormGroup>
              <Typography style={{ marginLeft: '0px', marginBottom: '35px', color: '#3F3F3F' }}>We emailed a 7 digit code to  <a href='mailto: lormIpsim@gmail.com' style={{ fontWeight: 'bold', textDecoration: 'none', color: 'inherit' }}>loremIpsum@gmail.com</a></Typography>
              <FormControl variant="standard" style={{ width: '100%', marginBottom: '35px' }}>
                <InputLabel shrink htmlFor="digitToken">
                  Enter 7 digit Token
                </InputLabel>
                <BootstrapInput placeholder="Enter code..." id="digitToken" />
              </FormControl>
              <Typography style={{ marginLeft: '-1px', marginBottom: '35px' }}>Didn`&apos;`t receive email? Check your spam folder or <Link style={{ color: 'green', textDecoration: 'none' }}>resend</Link> after 30 seconds</Typography>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '10px',
                  width: '178px',
                  height: '49px',
                  background: '#07090D',
                  borderRadius: '4px',
                  marginBottom: '25px',
                  marginLeft: '-15px'
                }}
              >
                <Link href="/confirmResult" style={{ textDecoration: 'none', color: 'inherit', padding: '16px 10px', }}>Create Account</Link>
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider >
  );
}
