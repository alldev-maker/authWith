import { useState } from 'react'
import {
  Avatar,
  Button,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
  Link,
  Paper,
  Box,
  Grid,
  Select,
  MenuItem,
  Typography,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { BootstrapInput, theme } from '../styled/styled'
import { ThemeProvider } from '@mui/material/styles'
import style from '../styles/Home.module.css'
import Confirm from './confirm'
import {
  SignupTypo,
  SignupLeftbarTypo,
  LabelTypo,
  ButtonTypo,
} from '../styled/typhos'

export default function Signup({ setUser }) {
  const [tempUser, setTempUser] = useState(null)
  const [country, setCountry] = useState('Select a Country')
  const handleSetCountry = (event) => {
    setCountry(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const { email, fName, lName, password, company } = event.target.elements
    const data = {
      email: email.value,
      fName: fName.value,
      lName: lName.value,
      password: password.value,
      company: company.value,
      country: country,
    }
    setTempUser(() => data)
  }
  return (
    <>
      {tempUser ? (
        <Confirm setUser={setUser} tempUser={tempUser} />
      ) : (
        <SignUpTemp
          handleSubmit={handleSubmit}
          handleSetCountry={handleSetCountry}
          country={country}
        />
      )}
    </>
  )
}

const SignUpTemp = ({ handleSubmit, country, handleSetCountry }) => {
  const [showPassword, setShowPassword] = useState(false)
  const countries = [
    'Ukraine',
    'Russia',
    'United Kingdom',
    'United States',
    'Spain',
  ]
  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  const handleClickShowPassword = () => setShowPassword((show) => !show)
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{ height: '100vh' }}
        spacing={3}
        style={{ maxWidth: '1512px', margin: '0 auto' }}
      >
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
              <SignupLeftbarTypo>
                Create an <span>AuthWith</span> account
              </SignupLeftbarTypo>
              <Typography
                component="h1"
                variant="h5"
                style={{
                  marginLeft: '-15px',
                  fontSize: '15px',
                  color: '#E2DEF7',
                  fontFamily: 'Urbanist',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '19px',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </div>
          </Grid>
        <Grid
          item
          xs={12}
          sm={7}
          md={8}
          component={Paper}
          elevation={6}
          square
          style={{ paddingRight: '20px', paddingLeft: '20px' }}
        >
          <Box
            sx={{
              my: 3,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
            }}
          >
            <Typography
              style={{
                marginLeft: '-15px',
                marginBottom: '35px',
                fontFamily: 'Urbanist',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '19px',
              }}
            >
              Already have an AuthWith account?{' '}
              <Link
                href="/login"
                style={{ color: 'green', textDecoration: 'none' }}
              >
                log in here
              </Link>
            </Typography>

            <SignupTypo>Sign up</SignupTypo>
            <div className={style.avatar}>
              <Avatar
                sx={{
                  m: 1,
                  color: '#3F3F3F',
                  background: 'white',
                  marginLeft: '-20px',
                }}
              >
                <LockOutlinedIcon />
              </Avatar>
              <Typography
                style={{
                  fontFamily: 'Urbanist',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  fontSize: '16px',
                  lineHeight: '19px',
                }}
              >
                Account Information
              </Typography>
            </div>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControl variant="standard" style={{ width: '100%' }}>
                    <InputLabel shrink htmlFor="email">
                      <LabelTypo>Business Email Address</LabelTypo>
                    </InputLabel>
                    <BootstrapInput
                      placeholder="loemipsum@gmail.com"
                      id="email"
                      type="email"
                      style={{ width: '100%' }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} style={{ marginBottom: '35px' }}>
                  <FormControl
                    variant="standard"
                    style={{
                      width: '96%',
                    }}
                  >
                    <InputLabel shrink htmlFor="fName">
                      <LabelTypo>First Name</LabelTypo>
                    </InputLabel>
                    <BootstrapInput placeholder="Jonny" id="fName" />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl variant="standard" style={{ width: '100%' }}>
                    <InputLabel shrink htmlFor="lName">
                      <LabelTypo>Last Name</LabelTypo>
                    </InputLabel>
                    <BootstrapInput placeholder="Welings" id="lName" />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl
                    variant="outlined"
                    style={{
                      width: '100%',
                      borderRadius: '4px',
                      backgroundColor: '#F2F2F2',
                      border: 'none',
                      color: '#7E7E7E',
                      padding: '0',
                      marginBottom: '25px',
                    }}
                  >
                    <InputLabel
                      shrink
                      htmlFor="password"
                      style={{
                        left: '-12px',
                        top: '-13px',
                      }}
                    >
                      <LabelTypo>Password</LabelTypo>
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
                <Grid item xs={12} sm={6}>
                  <FormControl sx={{ mt: 3 }} style={{ width: '96%' }}>
                    <Select
                      displayEmpty
                      value={country}
                      onChange={handleSetCountry}
                      input={<OutlinedInput />}
                      style={{
                        height: '47px',
                        background: '#F2F2F2',
                        color: '#7E7E7E',
                      }}
                      inputProps={{ 'aria-label': 'Without label' }}
                    >
                      <MenuItem disabled value="Russia">
                        <LabelTypo>
                          <em>Select a Country</em>
                        </LabelTypo>
                      </MenuItem>
                      {countries.map((country) => (
                        <MenuItem key={country} value={country}>
                          {country}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl variant="standard" style={{ width: '100%' }}>
                    <InputLabel shrink htmlFor="company">
                      <LabelTypo>Company</LabelTypo>
                    </InputLabel>
                    <BootstrapInput
                      placeholder="Enter conpany name"
                      id="company"
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
                  gap: '10px',
                  width: '110px',
                  height: '49px',
                  background: '#07090D',
                  borderRadius: '4px',
                  marginBottom: '25px',
                  marginLeft: '-15px',
                }}
              >
                <ButtonTypo>Next</ButtonTypo>
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}
