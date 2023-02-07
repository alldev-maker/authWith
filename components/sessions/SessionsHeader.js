import React from 'react'
import { Typography, Box, Select, MenuItem } from '@mui/material'
import { ArrowForwardIos } from '@mui/icons-material'
import { LoremContentTypo, DashboardTitleTypo } from '../../styled/typhos'
import EditIcon from '../../public/svg/edit.svg'
import SessionIcon from '../../public/svg/sessionGreen.svg'
import { SessionModal } from './SessionsModal'

export const SessionsPageHeader = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <DashboardTitleTypo>Sessions</DashboardTitleTypo>
        <Box
          component="form"
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
          noValidate
          autoComplete="off"
        >
          <SessionModal />
        </Box>
      </Box>
      <LoremContentTypo>
        Lorem ipsum dolor sit, amet consectetur ipsum fermentum porttittoe enim
      </LoremContentTypo>
    </>
  )
}

export const SessionsDetailHeader = ({ data }) => {
  const { name, fat } = data
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <SessionIcon />
        <Box m={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <ArrowForwardIos color="disabled" sx={{ fontSize: '1rem' }} />
        </Box>
        <Typography color="disabled" variant="h6" mr={2}>
          View Session
        </Typography>
        <ArrowForwardIos
          color="green"
          fontSize="small"
          sx={{ color: '#45AA61', fontSize: '1rem' }}
        />
        <Typography variant="h6" m={2} sx={{ color: '#45AA61' }}>
          {name}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <DashboardTitleTypo mr={1}>Session One</DashboardTitleTypo>
          <EditIcon />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <LoremContentTypo
          sx={{ display: 'flex', alignItems: 'center' }}
          mt={2}
          mb={2}
        >
          Date Created
          <Typography ml={1} fontWeight={'bold'} color="#212F43">
            {fat}
          </Typography>
        </LoremContentTypo>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography mr={1} color="#9097A1">
            Sort By
          </Typography>
          <Select sx={{ '& > fieldset': { border: 'none' } }} defaultValue={0}>
            <MenuItem value={0}>Date</MenuItem>
            <MenuItem value={1}>Name</MenuItem>
          </Select>
        </Box>
      </Box>
    </>
  )
}
