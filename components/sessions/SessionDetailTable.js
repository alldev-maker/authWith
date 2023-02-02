import React from 'react'
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Paper,
  Box,
  Typography,
} from '@mui/material'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import { StyledTableRow, StyledTableCell, StyledDivider } from './style'
import SessionDetailTableItem from './SessionDetailTableItem'
import { SessionsDetailHeader } from './SessionsHeader'
import { IOSSwitch } from '../dashboard/Switch'
import { CreateButton } from '../Button'
import Pagination from '../Pagination'

const SessionDetailTable = ({ data }) => {
  const mockData = new Array(3).fill(0)
  return (
    <Box sx={{ width: '100%' }}>
      <Box
        component="main"
        sx={{
          backgroundColor: 'white',
          flexGrow: 1,
          overflow: 'auto',
          padding: '32px',
          paddingBottom: '0',
        }}
      >
        <SessionsDetailHeader data={data} />
        <StyledDivider mt={2} />
        <Box sx={{ border: '1px solid #EAECF0', borderRadius: 2 }} mt={2}>
          <Box sx={{ display: 'flex', alignItems: 'center' }} m={2}>
            <Typography fontSize={20} fontWeight="bold">
              All session activity
            </Typography>
            <Typography
              ml={1}
              sx={{
                backgroundColor: '#E1FFE9',
                borderRadius: 5,
                color: '#348049',
                padding: '4px 8px',
              }}
            >
              25 Sessions
            </Typography>
          </Box>
          <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Jon ID</StyledTableCell>
                  <StyledTableCell>Flow</StyledTableCell>
                  <StyledTableCell>Version</StyledTableCell>
                  <StyledTableCell>Date Created</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mockData.map((_, index) => (
                  <SessionDetailTableItem key={index} />
                ))}
              </TableBody>
            </Table>
            <Pagination />
          </TableContainer>
        </Box>
      </Box>
      <Box mt={5} mx={4} sx={{ width: '50%' }}>
        <Box
          my={3}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography fontWeight="bold" fontSize="20px" ml={2}>
            Session Vault
          </Typography>
          <CreateButton variant="contained">Add to vault</CreateButton>
        </Box>
        <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Key</StyledTableCell>
                <StyledTableCell>Lost Stored</StyledTableCell>
                <StyledTableCell>Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell>Lorem Ipsum</StyledTableCell>
                <StyledTableCell>09-12-2023, 09:03:23</StyledTableCell>
                <StyledTableCell>
                  <IOSSwitch sx={{ marginTop: '4px' }} />
                  <DeleteOutlinedIcon
                    sx={{ fontSize: '27px', color: '#FF6666' }}
                  />
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell>Lorem Ipsum</StyledTableCell>
                <StyledTableCell>09-12-2023, 09:03:23</StyledTableCell>
                <StyledTableCell sx={{ display: 'flex', alignItems: 'center' }}>
                  <IOSSwitch sx={{ marginTop: '4px' }} />
                  <DeleteOutlinedIcon
                    sx={{ fontSize: '27px', color: '#FF6666' }}
                  />
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}

export default SessionDetailTable
