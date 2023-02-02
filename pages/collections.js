import * as React from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { BoardHeader } from '../components/dashboard/BoardHeader'
import { Collection } from '../components/dashboard/CollectionTree'
import Container from '../components/Container'

function DashboardContent() {
  const initialState = { 1: false, 2: false, 3: false, 0: false }
  const [dropdownState, setDropdownState] = React.useState(initialState)

  return (
    <Container>
      <Box
        component="main"
        sx={{
          backgroundColor: 'white',
          flexGrow: 1,
          overflow: 'auto',
          padding: '32px',
        }}
      >
        <BoardHeader />
        <Divider
          sx={{
            top: '29px',
            position: 'relative',
            borderColor: 'rgba(122, 136, 153, 0.28)',
            marginBottom: '85px',
          }}
        />
        <div
          style={{
            border: '1px solid #EAECF0',
            padding: '20px',
            borderRadius: '8px',
            boxShadow:
              '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
          }}
        >
          {[1, 2, 3, 4].map((item, index) => (
            <Collection
              key={item}
              initialState={initialState}
              setDropdownState={setDropdownState}
              dropdownState={dropdownState}
              index={index}
            />
          ))}
        </div>
      </Box>
    </Container>
  )
}

export default function Dashboard() {
  return <DashboardContent />
}
