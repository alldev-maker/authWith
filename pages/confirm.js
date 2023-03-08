import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {ThemeProvider} from '@mui/material/styles';
import style from '../styles/Home.module.css'
import {BootstrapInput, theme} from "../styled/styled";
import {SignupTypo, SignupLeftbarTypo, LabelTypo, ButtonTypo} from "../styled/typhos";
import InputLabel from '../components/InputLabel';

import Account from '../public/svg/account.svg';
import CheckGreen from '../public/svg/checkGreen.svg';
import CheckBoxIcon from '../public/svg/checkBoxIcon.svg';

export default function Confirm({
                                  setUser, tempUser = {
    email: '', fName: '', lName: '', company: '', country: ''
  }
                                }) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const {email, fName, lName, company} = event.target.elements
    const data = {
      email: email.value, fName: fName.value, lName: lName.value, company: company.value, country: country
    }
    setUser(data)
  };
  const [showPassword, setShowPassword] = React.useState(false);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (<ThemeProvider theme={theme}>
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
            style={{
              paddingRight: '20px', paddingLeft: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
        <Box
          sx={{
            my: 3, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'left',
          }}
        >
          <Typography
            className={style.mobileInvisible}
            style={{
              marginLeft: '-15px',
              marginBottom: '35px',
              fontFamily: 'Urbanist',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: '16px',
              lineHeight: '19px',
            }}>Already have an AuthWith account? <Link href="/login" style={{color: 'green', textDecoration: 'none'}}>Login
            here</Link></Typography>

          <SignupTypo
            style={{
              fontSize: '28px',
              lineHeight: '33.6px',
              paddingBottom: '12px',
              borderBottom: '1px solid #E9E9E9',
              marginLeft: '-15px',
              fontFamily: 'Urbanist',
            }}
          >
            Sign Up
          </SignupTypo>
          <div
            className={style.avatar}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}
          >
            <div style={{display: 'flex', alignItems: 'center'}}>
              <Avatar sx={{m: 1, color: '#3F3F3F', background: 'white', marginLeft: '-20px'}}>
                <Account/>
              </Avatar>
              <Typography style={{
                fontFamily: 'Urbanist',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '16px',
                lineHeight: '19px',
                marginLeft: '-8px',
              }}>Account Information</Typography>
              <CheckGreen style={{marginLeft: '9.33px'}}/>
            </div>
            <Link
              href="/edit/"
              style={{
                fontFamily: 'Urbanist',
                fontWeight: '600',
                fontSize: '16px',
                lineHeight: '19.2px',
                color: '#45AA61',
                textDecoration: 'none'
              }}
            >
              EDIT
            </Link>
          </div>
          <Box
            className={style.multiInputBorder}
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{mt: 3}}
            style={{marginLeft: '-7px', marginTop: '10px'}}
          >
            <Grid container spacing={2}>
              <FormControl fullWidth sx={{m: 1}} variant="standard">
                <Input
                  id="email"
                  defaultValue={tempUser.email}
                  inputProps={{style: {textAlign: 'right'}}}
                  startAdornment={<InputAdornment position="start">
                    <InputLabel>
                      Business email address
                    </InputLabel>
                  </InputAdornment>}
                />
              </FormControl>
              <FormControl fullWidth sx={{m: 1}} variant="standard">
                <Input
                  id="fName"
                  defaultValue={tempUser.fName}
                  inputProps={{style: {textAlign: 'right'}}}
                  startAdornment={<InputAdornment position="start">
                    <InputLabel>
                      First name
                    </InputLabel>
                  </InputAdornment>}
                />
              </FormControl>
              <FormControl fullWidth sx={{m: 1}} variant="standard">
                <Input
                  id="lName"
                  defaultValue={tempUser.lName}
                  inputProps={{style: {textAlign: 'right'}}}
                  startAdornment={<InputAdornment position="start"><InputLabel>Last
                    name</InputLabel></InputAdornment>}
                />
              </FormControl>
              <FormControl fullWidth sx={{m: 1}} variant="standard">
                <Input
                  id="country"
                  defaultValue={tempUser.country}
                  inputProps={{style: {textAlign: 'right'}}}
                  startAdornment={<InputAdornment position="start"><InputLabel>Country</InputLabel></InputAdornment>}
                />
              </FormControl>
              <FormControl fullWidth sx={{m: 1}} variant="standard">
                <Input
                  id="company"
                  defaultValue={tempUser.company}
                  inputProps={{style: {textAlign: 'right'}}}
                  startAdornment={<InputAdornment position="start"><InputLabel>Company</InputLabel></InputAdornment>}
                />
              </FormControl>
            </Grid>
            <div style={{marginLeft: '-10px', marginTop: '10px'}}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox
                    defaultChecked
                    style={{color: '#3F3F3F',}}
                    checkedIcon={<CheckBoxIcon/>}
                  />}
                  label="Verify Email" style={{marginLeft: "-10px"}}
                />
              </FormGroup>
              <Typography
                style={{
                  marginLeft: '0px',
                  marginBottom: '30px',
                  color: '#3F3F3F',
                  marginTop: '5px',
                  fontWeight: '600',
                  fontSize: '16px',
                  lineHeight: '19.2px',
                }}
              >We emailed a 7 digit code to <a href='mailto: lormIpsim@gmail.com' style={{
                fontWeight: 'bold', textDecoration: 'none', color: 'inherit'
              }}
              >
                loremIpsum@gmail.com</a>
              </Typography>
              <FormControl variant="standard" style={{width: '100%', marginBottom: '35px'}}>
                <InputLabel shrink htmlFor="digitToken">
                  Enter 7 digit Token
                </InputLabel>
                <BootstrapInput placeholder="Enter code..." id="digitToken"/>
              </FormControl>
              <Typography
                style={{
                  marginBottom: '35px', marginLeft: '5px', color: '#3F3F3F'
                }}
              >Didn &apos;t receive
                email?
                Check your spam folder or <Link
                  href="resend"
                  style={{color: 'green', textDecoration: 'none'}}>resend</Link> after 30
                seconds</Typography>
              <Button
                // type="submit"
                variant="contained"
                sx={{mt: 3, mb: 2}}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '10px',
                  width: '178px',
                  height: '49px',
                  background: '#D3D3D3',
                  borderRadius: '4px',
                  marginBottom: '25px',
                  marginLeft: '5px',
                  boxShadow: 'none',
                }}
              >
                <ButtonTypo>
                  <Link style={{textDecoration: 'none', color: 'white', textTransform: 'initial'}} href="/signsuccess">
                    Create Account
                  </Link>
                </ButtonTypo>
              </Button>
            </div>
          </Box>
        </Box>

        <Typography
          className={style.mobileVisible}
          style={{
            marginLeft: '-15px',
            marginBottom: '35px',
            fontFamily: 'Urbanist',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '19px',
          }}>Already have an AuthWith account? <Link href="/login" style={{color: 'green', textDecoration: 'none'}}>Login
          here</Link></Typography>
      </Grid>
    </Grid>
  </ThemeProvider>);
}
