import React, { useState } from 'react'
import {
  Backdrop,
  Box,
  Modal,
  FormControl,
  InputLabel,
  Fade,
  Button,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { styled } from '@mui/material/styles'
import { StyledInput } from '../../styled/styled'
import { CreateButton } from '../Button'
import { ButtonTypo } from '../../styled/typhos'

const StyledFormControlLabel = styled(FormControlLabel)(() => ({
  '.MuiRadio-root': {
    color: '#45AA61 !important',
  },
  '.MuiFormControlLabel-label': {
    color: '#9097A1',
    fontSize: '14px',
  },
}))

const style = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '24px 32px',
  gap: '10px',
  width: '621px',
  right: '30px',
  top: '91px',
  background: '#FFFFFF',
  borderRadius: '12px',
}

export const UserModal = () => {
  const [open, setOpen] = React.useState(false)
  const [radioVal, setRadioVal] = useState('admin')

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleRadioClick = (e) => setRadioVal(e.target.value)

  return (
    <div>
      <CreateButton onClick={handleOpen}>
        <ButtonTypo>Add new user</ButtonTypo>
      </CreateButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <Typography component="h1" fontSize={20}>
                Add New User
              </Typography>
              <Button onClick={handleClose}>
                <CloseIcon />
              </Button>
            </div>
            <FormControl>
              <RadioGroup
                row
                defaultValue={radioVal}
                onChange={handleRadioClick}
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <StyledFormControlLabel
                  value="admin"
                  control={<Radio />}
                  label="Admin User"
                />
                <StyledFormControlLabel
                  value="account"
                  control={<Radio />}
                  label="Account User"
                />
              </RadioGroup>
            </FormControl>
            {radioVal === 'admin' && (
              <>
                <InputLabel
                  shrink
                  htmlFor="userName"
                  sx={{
                    fontFamily: 'Urbanist',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '20px',
                    lineHeight: '17px',
                    color: '#465262',
                  }}
                >
                  Set Role
                </InputLabel>
                <Select
                  sx={{ '& > fieldset': { border: 'none' }, width: '100%' }}
                  defaultValue={0}
                >
                  <MenuItem value={0}>Select Action</MenuItem>
                  <MenuItem value={1}>Action 1</MenuItem>
                  <MenuItem value={2}>Action 2</MenuItem>
                </Select>
              </>
            )}
            <FormControl variant="standard" sx={{ width: '100%' }} mt={2}>
              <InputLabel
                shrink
                htmlFor="userName"
                sx={{
                  fontFamily: 'Urbanist',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  fontSize: '20px',
                  lineHeight: '17px',
                  color: '#465262',
                }}
              >
                User Name
              </InputLabel>
              <StyledInput placeholder="Enter Name" id="userName" type="text" />
            </FormControl>
            <FormControl variant="standard" style={{ width: '100%' }}>
              <InputLabel
                shrink
                htmlFor="email"
                sx={{
                  fontFamily: 'Urbanist',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  fontSize: '20px',
                  lineHeight: '17px',
                  color: '#465262',
                }}
              >
                Email
              </InputLabel>
              <StyledInput placeholder="Enter Email" id="email" type="text" />
            </FormControl>
            <CreateButton>
              <ButtonTypo>Add</ButtonTypo>
            </CreateButton>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
