import * as React from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { DocsPageHeader } from '../components/docs/DocsHeader'
import { Authorize } from '../components/docs/Authorize'
import { LoremContentTypo } from '../styled/typhos'
import { Typography } from '@mui/material'
import { DocsTable } from '../components/docs/DocsTable'
import Container from '../components/Container'

function DocsContent() {
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
        <DocsPageHeader />
        <Divider
          sx={{
            top: '15px',
            position: 'relative',
            borderColor: 'rgba(122, 136, 153, 0.28)',
            marginBottom: '25px',
          }}
        />
        <Authorize />
        <Divider
          sx={{
            top: '15px',
            position: 'relative',
            borderColor: 'rgba(122, 136, 153, 0.28)',
            marginBottom: '20px',
          }}
        />
        <div
          style={{
            padding: '10x 30px',
          }}
        >
          <div>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '18px',
              }}
            >
              Default
            </Typography>
            <LoremContentTypo sx={{ width: '330px', marginBottom: '10px' }}>
              Lorem ipsum dolor sit consectetur ipsum ferment
            </LoremContentTypo>
            <Divider
              sx={{
                position: 'relative',
                borderColor: 'rgba(122, 136, 153, 0.28)',
                marginBottom: '20px',
              }}
            />
          </div>
          <DocsTable />
        </div>
      </Box>
    </Container>
  )
}

export default function Docs() {
  return <DocsContent />
}
