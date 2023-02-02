import * as React from 'react'
import {
  Backdrop,
  Box,
  Modal,
  FormControl,
  Fade,
  Button,
  Avatar,
  InputLabel,
  Typography,
  ButtonGroup,
} from '@mui/material'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import CloseIcon from '@mui/icons-material/Close'
import BackupIcon from '@mui/icons-material/Backup'
import CheckIcon from '@mui/icons-material/Check'
import AddIcon from '@mui/icons-material/Add'
import { BootstrapInput } from '../../styled/styled'
import { CreateButton } from '../Button'
import { StyledDivider } from './style'

const style = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '24px 32px',
  gap: '10px',
  width: '621px',
  height: '740px',
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
                Add Collection
              </Typography>
              <Button onClick={handleClose}>
                <CloseIcon />
              </Button>
            </div>
            <FormControl variant="standard" style={{ width: '100%' }}>
              <InputLabel
                shrink
                htmlFor="collectionName"
                sx={{
                  fontFamily: 'Urbanist',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  fontSize: '14px',
                  lineHeight: '17px',
                  color: '#465262',
                }}
              >
                Collection Name
              </InputLabel>
              <BootstrapInput
                placeholder="E-commerce Franchise"
                id="collectionName"
                type="text"
                style={{ width: '100%' }}
              />
            </FormControl>
            <StyledDivider mb={2} />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <Typography
                component="h1"
                variant="h5"
                sx={{
                  fontFamily: 'Urbanist',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  fontSize: '20px',
                  lineHeight: '24px',
                  color: '#344054',
                }}
              >
                Add Flow
              </Typography>
              <Button
                sx={{
                  color: '#FF6666',
                  alignItems: 'center',
                  background: 'rgba(255, 225, 225, 0.87)',
                }}
              >
                <DeleteOutlinedIcon
                  sx={{ fontSize: '27px', color: '#FF6666' }}
                />{' '}
                Remove Flow
              </Button>
            </div>
            <FormControl variant="standard" style={{ width: '100%' }}>
              <InputLabel
                shrink
                htmlFor="collectionName"
                sx={{
                  fontFamily: 'Urbanist',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  fontSize: '14px',
                  lineHeight: '17px',
                  color: '#465262',
                }}
              >
                Flow Name
              </InputLabel>
              <BootstrapInput
                placeholder="Enter name"
                id="collectionName"
                type="text"
                style={{ width: '100%' }}
              />
            </FormControl>
            <p>Icon</p>
            <div style={{ display: 'flex' }}>
              <Button sx={{ alignItems: 'center', color: '#475467' }}>
                <BackupIcon />
              </Button>
              <div style={{ lineHeight: '2px' }}>
                <p
                  style={{
                    fontFamily: 'Urbanist',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '14px',
                    color: '#45AA61',
                  }}
                >
                  Click to upload
                </p>
                <p
                  style={{
                    fontFamily: 'Urbanist',
                    fonStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '12px',
                    color: '#667085',
                  }}
                >
                  or drag and drop
                </p>
              </div>
            </div>
            <FormControl>
              <p style={{ marginBottom: '10px' }}>Primary Color</p>
              <ButtonGroup
                sx={{ width: '330px', justifyContent: 'space-between' }}
              >
                <Avatar style={{ background: 'red' }} children="" />
                <Avatar style={{ background: '#F97C1B' }} children="" />
                <Avatar style={{ background: '#FAC81C' }} children="" />
                <Avatar
                  style={{ background: '#165248' }}
                  children={<CheckIcon />}
                />
                <Avatar style={{ background: '#2BAFF6' }} children="" />
                <Avatar style={{ background: '#6462FB' }} children="" />
                <Avatar
                  style={{ background: '#9097A1' }}
                  children={<AddIcon />}
                />
              </ButtonGroup>
            </FormControl>
            <FormControl sx={{ marginBottom: '20px' }}>
              <p style={{ marginBottom: '10px' }}>Secondary Color</p>
              <ButtonGroup
                sx={{ width: '330px', justifyContent: 'space-between' }}
              >
                <Avatar style={{ background: 'red' }} children="" />
                <Avatar style={{ background: '#F97C1B' }} children="" />
                <Avatar style={{ background: '#FAC81C' }} children="" />
                <Avatar
                  style={{ background: '#165248' }}
                  children={<CheckIcon />}
                />
                <Avatar style={{ background: '#2BAFF6' }} children="" />
                <Avatar style={{ background: '#6462FB' }} children="" />
                <Avatar
                  style={{ background: '#9097A1' }}
                  children={<AddIcon />}
                />
              </ButtonGroup>
            </FormControl>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
