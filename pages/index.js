import { jsx } from '@emotion/react'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
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
    fontSize: 16,
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

export default function SignInSide() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [country, setCountry] = React.useState('Select a Country')
  const handleSetCountry = (event) => {
    setCountry(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, fName, lName, password, company } = event.target.elements
    const data = {
      email: email.value,
      fName: fName.value,
      lName: lName.value,
      password: password.value,
      company: company.value,
      country: country
    }
    console.log(data)
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const countries = ['Ukraine', 'Russia', 'United Kingdom', 'United States', 'Spain']
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }} spacing={3} style={{ maxWidth: '1512px', margin: '0 auto' }}>
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
            <Typography style={{ marginLeft: '-15px', marginBottom: '35px' }}>Already have an AuthWith account? <Link href="/login" style={{ color: 'green', textDecoration: 'none' }}>log in here</Link></Typography>

            <Typography component="h1" variant="h4" style={{ marginLeft: '-15px' }}>
              Sign up
            </Typography>
            <div className={style.avatar}>
              <Avatar sx={{ m: 1, color: '#3F3F3F', background: 'white', marginLeft: '-20px' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography >Account Information</Typography>
            </div>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}  >
              <Grid container spacing={2} >
                <Grid xs={12}>
                  <FormControl variant="standard" style={{ width: '100%' }}>
                    <InputLabel shrink htmlFor="email">
                      Business Email Address
                    </InputLabel>
                    <BootstrapInput placeholder="loemipsum@gmail.com" id="email" type="email" style={{ width: '100%' }} />
                  </FormControl>
                </Grid>
                <Grid xs={12} sm={6} style={{ marginBottom: '35px' }}>
                  <FormControl variant="standard" style={{
                    width: '96%',
                  }}>
                    <InputLabel shrink htmlFor="fName">
                      First Name
                    </InputLabel>
                    <BootstrapInput placeholder="Jonny" id="fName" />
                  </FormControl>
                </Grid>
                <Grid xs={12} sm={6}>
                  <FormControl variant="standard" style={{ width: '100%' }}>
                    <InputLabel shrink htmlFor="lName">
                      Last Name
                    </InputLabel>
                    <BootstrapInput placeholder="Welings" id="lName" />
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
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="password"
                      style={{ height: '49px' }}
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
                <Grid xs={12} sm={6}>
                  <FormControl sx={{ mt: 3 }} style={{ width: '96%' }}>
                    <Select
                      displayEmpty
                      value={country}
                      onChange={handleSetCountry}
                      input={<OutlinedInput />}
                      style={{ height: '47px', background: '#F2F2F2', color: '#7E7E7E' }}
                      renderValue={(selected) => {
                        if (selected.length === 0) {
                          return <em>Placeholder</em>;
                        }
                        else return selected
                      }}
                      inputProps={{ 'aria-label': 'Without label' }}
                    >
                      <MenuItem disabled value="">
                        <em>Select a Country</em>
                      </MenuItem>
                      {countries.map((country) => (
                        <MenuItem
                          key={country}
                          value={country}
                        >
                          {country}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid xs={12} sm={6}>
                  <FormControl variant="standard" style={{ width: '100%' }}>
                    <InputLabel shrink htmlFor="company">
                      Company
                    </InputLabel>
                    <BootstrapInput placeholder="Enter conpany name" id="company" />
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
                  gap: '10px',
                  width: '110px',
                  height: '49px',
                  background: '#07090D',
                  borderRadius: '4px',
                  marginBottom: '25px',
                  marginLeft: '-15px'
                }}
              >
                <Link style={{ textDecoration: 'none', color: 'inherit', padding: '16px 20px', }} href="/confirm">Next</Link>
              </Button>
            </Box>

          </Box>
        </Grid>
      </Grid>
    </ThemeProvider >
  );
}