import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Badge from "@mui/material/Badge";
import CheckIcon from '@mui/icons-material/Check';
import RemoveIcon from '@mui/icons-material/Remove';
import PauseIcon from '@mui/icons-material/Pause';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#EEF0F4',
    color: '#667085',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: 'white',
  height: "73px",
  color: '#667085',
  '&:nth-of-type': {

  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('session one', <ActiveBadge />, '09-12-2023. 09:03:23', <ActionActiveButton />),
  createData('session one', <ActiveBadge />, '09-12-2023. 09:03:23', <ActionActiveButton />),
  createData('session one', <ActiveBadge />, '09-12-2023. 09:03:23', <ActionActiveButton />),
  createData('session one', <ActiveBadge />, '09-12-2023. 09:03:23', <ActionActiveButton />),
  createData('session one', <ActiveBadge />, '09-12-2023. 09:03:23', <ActionActiveButton />),
  createData('session one', <TerminatedBadge />, '09-12-2023. 09:03:23', <ActionTerminatedButton />),
  createData('session one', <ActiveBadge />, '09-12-2023. 09:03:23', <ActionActiveButton />),
  createData('session one', <ActiveBadge />, '09-12-2023. 09:03:23', <ActionActiveButton />),
  createData('session one', <ActiveBadge />, '09-12-2023. 09:03:23', <ActionActiveButton />),
];

export function SessionsTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Date Created</StyledTableCell>
            <StyledTableCell>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={row.name + index}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.calories}</StyledTableCell>
              <StyledTableCell>{row.fat}</StyledTableCell>
              <StyledTableCell>{row.carbs}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function ActiveBadge() {
  return <Badge
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    style={{
      fontFamily: 'Urbanist',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '12px',
      color: '#348049',
      backgroundColor: '#E1FFE9',
      borderRadius: '16px',
      padding: '0 13px',
      height: '25px',
      alignitems: 'center',
      alignItems: 'center',
      marginLeft: '-10px'
    }}
  >
    <CheckIcon style={{ fontSize: '12px', }} /> Active
  </Badge>
}
function TerminatedBadge() {
  return <Badge
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    style={{
      fontFamily: 'Urbanist',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '12px',
      color: '#344054',
      backgroundColor: '#F2F4F7',
      borderRadius: '16px',
      padding: '0 13px',
      height: '25px',
      alignitems: 'center',
      alignItems: 'center',
      marginLeft: '-10px'
    }}
  >
    <RemoveIcon style={{ fontSize: '12px', }} /> Terminated
  </Badge>
}
function ActionActiveButton() {
  return (
    <PauseIcon sx={{
      color: '#B5BAC0'
    }} />
  )
}
function ActionTerminatedButton() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      width: '60px',
      justifyContent: "space-between"
    }}>
      <DeleteOutlineIcon sx={{
        color: '#B5BAC0'
      }} />
      <PlayArrowIcon sx={{
        color: '#348049'
      }} />
    </div>

  )
}