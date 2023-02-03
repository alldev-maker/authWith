import React, { useState } from 'react'
import { Link, Fade } from '@mui/material'
import { ArrowRight } from '@mui/icons-material'
import { styled } from '@mui/material/styles'
import { StyledTableRow, StyledTableCell } from './style'
import GalleryIcon from '../../public/svg/gallery.svg'

const StyledTableVisibleRow = styled(StyledTableRow)(({ show }) => ({
  display: show ? 'table-row' : 'none',
}))

const StyledArrowIcon = styled(ArrowRight)(({ show }) => ({
  transition: '0.5s',
  transform: show ? 'rotate(90deg)' : 'rotate(0)',
}))

const StyledTableCellItem = styled(StyledTableCell)({
  display: 'flex',
  alignItems: 'center',
})

const StyledTableCellHeader = styled(StyledTableCell)({
  fontWeight: 'bold',
  color: '#687482',
})

const mockData = [
  {
    action: 'Get Data',
    duration: 'Jan 6, 2022',
    timestamp: 'Monthly subscription',
    screenShot: 'https://sampleimage.test1',
  },
  {
    action: 'Get Data',
    duration: 'Jan 6, 2022',
    timestamp: 'Monthly subscription',
    screenShot: 'https://sampleimage.test1',
  },
]

const SessionDetailTableItem = () => {
  const [isShow, setShow] = useState(false)

  const handleCellClick = () => {
    setShow(!isShow)
  }

  return (
    <>
      <StyledTableRow onClick={handleCellClick}>
        <StyledTableCellItem component="th" scope="row">
          <StyledArrowIcon show={isShow ? 1 : 0} />
          b8563bb0-9135-4c86-b0e7-a24fa47d4957
        </StyledTableCellItem>
        <StyledTableCell>FlowTest1</StyledTableCell>
        <StyledTableCell>Version1</StyledTableCell>
        <StyledTableCell>09-12-2023, 09:03:23</StyledTableCell>
      </StyledTableRow>
      <Fade in={isShow} timeout={{ enter: 500, exit: 250 }}>
        <StyledTableVisibleRow show={isShow ? 1 : 0}>
          <StyledTableCellHeader
            component="td"
            scope="row"
            sx={{ paddingLeft: '40px' }}
          >
            Action
          </StyledTableCellHeader>
          <StyledTableCellHeader>Duration</StyledTableCellHeader>
          <StyledTableCellHeader>Timestamp</StyledTableCellHeader>
          <StyledTableCellHeader>Screenshot </StyledTableCellHeader>
        </StyledTableVisibleRow>
      </Fade>
      {mockData.map((item, index) => (
        <Fade
          in={isShow}
          timeout={{ enter: 500, exit: 250 }}
          key={item.action + index}
        >
          <StyledTableVisibleRow show={isShow ? 1 : 0}>
            <StyledTableCell
              component="td"
              scope="row"
              sx={{ paddingLeft: '40px' }}
            >
              {item.action}
            </StyledTableCell>
            <StyledTableCell>{item.duration}</StyledTableCell>
            <StyledTableCell>{item.timestamp}</StyledTableCell>
            <StyledTableCell>
              <Link
                href={item.screenShot}
                mr={1}
                sx={{ color: '#348049', textDecorationColor: '#348049' }}
              >
                View Screenshot <GalleryIcon />
              </Link>
            </StyledTableCell>
          </StyledTableVisibleRow>
        </Fade>
      ))}
    </>
  )
}

export default SessionDetailTableItem
