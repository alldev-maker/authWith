import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import BackupIcon from '@mui/icons-material/Backup';
import { BootstrapInput, theme } from "../../styled/styled";
import { ButtonGroup } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import { CreateButton } from "../create-button";
import Add from "@mui/icons-material/Add"


const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex - start',
  padding: '24px 32px',
  gap: '10px',
  position: 'absolute',
  width: '621px',
  height: '527px',
  left: '411px',
  top: '400px',
  background: '#FFFFFF',
  borderRadius: '12px',
};

export function AddFlowModal({ state, index }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <AddFlowButton onClick={handleOpen} state={state} index={index}>Create Collection</AddFlowButton>
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
        sx={{ position: 'absolute' }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
              <Typography component="h1" variant="h5">Add Flow</Typography>
              <Button onClick={handleClose}>
                <CloseIcon />
              </Button>
            </div>
            <FormControl variant="standard" style={{ width: '100%' }}>
              <InputLabel shrink htmlFor="collectionName" sx={{
                fontFamily: 'Urbanist',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '14px',
                lineHeight: '17px',
                color: '#465262',
              }}>
                Flow Name
              </InputLabel>
              <BootstrapInput placeholder="Enter name" id="collectionName" type="text" sx={{ width: '100%', marginBottom: '0' }} />
            </FormControl>
            <p style={{ margin: '0' }}>Icon</p>
            <div style={{ display: 'flex' }}>
              <Button sx={{ alignItems: 'center', color: '#475467' }}>
                <BackupIcon />
              </Button>
              <div style={{ lineHeight: '2px' }}>
                <p style={{
                  fontFamily: 'Urbanist',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  fontSize: '14px',
                  color: '#45AA61',
                }}>Click to upload</p>
                <p style={{
                  fontFamily: 'Urbanist',
                  fonStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '12px',
                  color: '#667085'
                }}>or drag and drop</p>
              </div>
            </div>
            <FormControl>
              <p style={{ marginBottom: '10px' }}>Primary Color</p>
              <ButtonGroup sx={{ width: '330px', justifyContent: 'space-between' }}>
                <Avatar style={{ background: 'red' }} children="" />
                <Avatar style={{ background: '#F97C1B' }} children="" />
                <Avatar style={{ background: '#FAC81C' }} children="" />
                <Avatar style={{ background: '#165248' }} children={<CheckIcon />} />
                <Avatar style={{ background: '#2BAFF6' }} children="" />
                <Avatar style={{ background: '#6462FB' }} children="" />
                <Avatar style={{ background: '#9097A1' }} children={<AddIcon />} />
              </ButtonGroup>
            </FormControl>
            <FormControl sx={{ marginBottom: '20px' }}>
              <p style={{ marginBottom: '10px' }}>Secondary Color</p>
              <ButtonGroup sx={{ width: '330px', justifyContent: 'space-between' }}>
                <Avatar style={{ background: 'red' }} children="" />
                <Avatar style={{ background: '#F97C1B' }} children="" />
                <Avatar style={{ background: '#FAC81C' }} children="" />
                <Avatar style={{ background: '#165248' }} children={<CheckIcon />} />
                <Avatar style={{ background: '#2BAFF6' }} children="" />
                <Avatar style={{ background: '#6462FB' }} children="" />
                <Avatar style={{ background: '#9097A1' }} children={<AddIcon />} />
              </ButtonGroup>
            </FormControl>
            <CreateButton onClick={handleOpen}>Create Collection</CreateButton>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

function AddFlowButton({ onClick, state, index, ...props }) {
  return (
    <Button startIcon={<Add />} onClick={onClick} style={{
      top: !state[index] ? '-95px' : '',
      right: "-95px",
      color: "#45AA61",
      display: !state[index] ? 'none' : 'flex'
    }} {...props} />
  )
}