import React from 'react'
import { styled } from '@mui/material/styles'
import {
  Box,
  Pagination as MPagination,
  PaginationItem,
  Container,
} from '@mui/material'
import ArrowRight from '../public/svg/arrowRight.svg'
import ArrowLeft from '../public/svg/arrowLeft.svg'

const StyledPaginationContainer = styled(Box)(() => ({
  margin: '1rem 0',
  '& .MuiPagination-ul li': {
    '&:first-of-type': {
      marginRight: 'auto',
      marginLeft: '20px'
    },
    '&:last-child': {
      marginLeft: 'auto',
      marginRight: '20px',
    },
  },
}))

const StyledButton = styled(Container)(() => ({
  padding: '10px 15px !important',
  width: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '14px !important',
  fontWeight: 'bold',
  color: '#344054',
}))

const StyledArrowRight = styled(ArrowRight)(() => ({
  marginLeft: '10px',
}))

const StyledArrowLeft = styled(ArrowLeft)(() => ({
  marginRight: '10px',
}))

const Pagination = () => {
  return (
    <StyledPaginationContainer>
      <MPagination
        count={10}
        variant="outlined"
        shape="rounded"
        renderItem={(item) => (
          <PaginationItem
            components={{
              next: (props) => (
                <StyledButton {...props}>
                  Next
                  <StyledArrowRight />
                </StyledButton>
              ),
              previous: (props) => (
                <StyledButton {...props}>
                  <StyledArrowLeft />
                  Previous
                </StyledButton>
              ),
            }}
            {...item}
          />
        )}
      />
    </StyledPaginationContainer>
  )
}

export default Pagination
