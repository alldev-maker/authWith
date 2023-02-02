import * as React from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Container from '../components/Container'
import { SessionsPageHeader } from '../components/sessions/SessionsHeader'
import { SessionsTable } from '../components/sessions/SessionsTable'

function SessionsContent() {
  return (
    <Container>
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
        <SessionsPageHeader />
        <Divider
          sx={{
            top: '15px',
            position: 'relative',
            borderColor: 'rgba(122, 136, 153, 0.28)',
            marginBottom: '45px',
          }}
        />
        <SessionsTable />
      </Box>
    </Container>
  )
}

export default function Sessions() {
  return <SessionsContent />
}
