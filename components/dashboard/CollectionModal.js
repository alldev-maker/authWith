import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import Divider from '@mui/material/Divider'
import Avatar from '@mui/material/Avatar'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import BackupIcon from '@mui/icons-material/Backup'
import { BootstrapInput, theme } from '../../styled/styled'
import { ButtonGroup } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import AddIcon from '@mui/icons-material/Add'
import { CreateButton } from '../Button'
import { ButtonTypo } from '../../styled/typhos'

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

export function CollectionModal() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <CreateButton onClick={handleOpen}>
        <ButtonTypo>Create Collection</ButtonTypo>
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
            <Divider
              sx={{
                top: '-15px',
                position: 'relative',
                borderColor: 'rgba(122, 136, 153, 0.28)',
                width: '100%',
              }}
            />
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
                <Avatar style={{ background: 'red' }} />
                <Avatar style={{ background: '#F97C1B' }} />
                <Avatar style={{ background: '#FAC81C' }} />
                <Avatar style={{ background: '#165248' }}>
                  <CheckIcon />
                </Avatar>
                <Avatar style={{ background: '#2BAFF6' }} />
                <Avatar style={{ background: '#6462FB' }} />
                <Avatar style={{ background: '#9097A1' }}>
                  <AddIcon />
                </Avatar>
              </ButtonGroup>
            </FormControl>
            <FormControl sx={{ marginBottom: '20px' }}>
              <p style={{ marginBottom: '10px' }}>Secondary Color</p>
              <ButtonGroup
                sx={{ width: '330px', justifyContent: 'space-between' }}
              >
                <Avatar style={{ background: 'red' }} />
                <Avatar style={{ background: '#F97C1B' }} />
                <Avatar style={{ background: '#FAC81C' }} />
                <Avatar style={{ background: '#165248' }}>
                  <CheckIcon />
                </Avatar>
                <Avatar style={{ background: '#2BAFF6' }} />
                <Avatar style={{ background: '#6462FB' }} />
                <Avatar style={{ background: '#9097A1' }}>
                  <AddIcon />
                </Avatar>
              </ButtonGroup>
            </FormControl>
            <CreateButton onClick={handleOpen}>Create Collection</CreateButton>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
