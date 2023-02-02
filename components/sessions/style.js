import { TableRow, TableCell, Divider } from '@mui/material'
import { tableCellClasses } from '@mui/material/TableCell'
import { styled } from '@mui/material/styles'

export const StyledTableRow = styled(TableRow)({
  backgroundColor: 'white',
  height: '50px',
  color: '#667085',
  cursor: 'pointer',

  '& .MuiTableCell-root': {
    borderBottom: 'none',
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
})

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#EEF0F4',
    color: '#667085',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

export const StyledDivider = styled(Divider)(()=>({
  position: 'relative',
  borderColor: 'rgba(122, 136, 153, 0.28)',
  marginBottom: '45px',
}))