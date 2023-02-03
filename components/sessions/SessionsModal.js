import * as React from 'react'
import {
  Backdrop,
  Box,
  Modal,
  FormControl,
  Fade,
  Button,
  InputLabel,
  Typography,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { BootstrapInput } from '../../styled/styled'
import { ButtonTypo } from '../../styled/typhos'
import { CreateButton } from '../Button'

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

export function SessionModal() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <CreateButton onClick={handleOpen}>Create Session</CreateButton>
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
              <Typography component="h1" variant="h5">
                Create Session
              </Typography>
              <Button onClick={handleClose}>
                <CloseIcon />
              </Button>
            </div>
            <FormControl variant="standard" style={{ width: '100%' }}>
              <InputLabel
                shrink
                htmlFor="sessionName"
                sx={{
                  fontFamily: 'Urbanist',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  fontSize: '14px',
                  lineHeight: '17px',
                  color: '#465262',
                }}
              >
                Session Name
              </InputLabel>
              <BootstrapInput
                placeholder="Enter Name"
                id="sessionName"
                type="text"
                style={{
                  width: '100%',
                  borderWidth: 0,
                  backgroundColor: 'transparent',
                }}
              />
              <CreateButton onClick={handleOpen}>
                <ButtonTypo>Create Session</ButtonTypo>
              </CreateButton>
            </FormControl>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
